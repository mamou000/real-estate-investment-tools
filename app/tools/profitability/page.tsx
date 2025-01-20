"use client"

import { useState } from "react"
import { MainNav } from "@/components/main-nav"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Calculator } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Results {
  totalInvestment: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  monthlyCashflow: number;
  annualCashflow: number;
  grossYield: number;
  netYield: number;
}

export default function ProfitabilityCalculator() {
  // Prix d'acquisition
  const [purchasePrice, setPurchasePrice] = useState("")
  const [notaryFees, setNotaryFees] = useState("")
  const [renovationCosts, setRenovationCosts] = useState("")
  const [furnitureCosts, setFurnitureCosts] = useState("")
  const [agencyFees, setAgencyFees] = useState("")

  // Financement
  const [downPayment, setDownPayment] = useState("")
  const [loanAmount, setLoanAmount] = useState("")
  const [interestRate, setInterestRate] = useState("")
  const [loanDuration, setLoanDuration] = useState("")
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null)

  // Revenus locatifs
  const [monthlyRent, setMonthlyRent] = useState("")
  const [parkingRent, setParkingRent] = useState("")
  const [otherIncome, setOtherIncome] = useState("")

  // Charges
  const [propertyTax, setPropertyTax] = useState("")
  const [coownershipCharges, setCoownershipCharges] = useState("")
  const [insurance, setInsurance] = useState("")
  const [maintenanceProvision, setMaintenanceProvision] = useState("")
  const [rentalManagementFees, setRentalManagementFees] = useState("")
  const [unpaidProvision, setUnpaidProvision] = useState("")
  const [propertyManagerFees, setPropertyManagerFees] = useState("")

  // Résultats
  const [results, setResults] = useState<Results | null>(null)

  const calculateResults = () => {
    // Calcul de l'investissement total
    const totalInvestment = 
      parseFloat(purchasePrice || "0") +
      parseFloat(notaryFees || "0") +
      parseFloat(renovationCosts || "0") +
      parseFloat(furnitureCosts || "0") +
      parseFloat(agencyFees || "0")

    // Calcul des revenus mensuels
    const monthlyIncome = 
      parseFloat(monthlyRent || "0") +
      parseFloat(parkingRent || "0") / 12 +
      parseFloat(otherIncome || "0") / 12

    // Calcul des charges mensuelles
    const monthlyExpenses = 
      parseFloat(propertyTax || "0") / 12 +
      parseFloat(coownershipCharges || "0") / 12 +
      parseFloat(insurance || "0") / 12 +
      parseFloat(maintenanceProvision || "0") / 12 +
      parseFloat(rentalManagementFees || "0") / 12 +
      parseFloat(unpaidProvision || "0") / 12 +
      parseFloat(propertyManagerFees || "0") / 12

    // Calcul du remboursement mensuel du prêt
    const rate = parseFloat(interestRate || "0") / 100 / 12
    const months = parseFloat(loanDuration || "0") * 12
    const loan = parseFloat(loanAmount || "0")
    
    let calculatedMonthlyPayment = 0
    if (rate > 0 && months > 0 && loan > 0) {
      calculatedMonthlyPayment = loan * (rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1)
      setMonthlyPayment(calculatedMonthlyPayment)
    }

    // Calcul des rendements
    const monthlyCashflow = monthlyIncome - monthlyExpenses - calculatedMonthlyPayment
    const annualCashflow = monthlyCashflow * 12
    const grossYield = totalInvestment > 0 ? (monthlyIncome * 12) / totalInvestment * 100 : 0
    const netYield = totalInvestment > 0 ? annualCashflow / totalInvestment * 100 : 0

    setResults({
      totalInvestment,
      monthlyIncome,
      monthlyExpenses,
      monthlyCashflow,
      annualCashflow,
      grossYield,
      netYield
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <MainNav />
        </div>
      </header>

      <main className="container py-10">
        <div className="flex items-center gap-4 mb-8">
          <Calculator className="h-8 w-8" />
          <h1 className="text-3xl font-bold">Calculateur de rentabilité</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Tabs defaultValue="acquisition" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="acquisition">Acquisition</TabsTrigger>
                <TabsTrigger value="financing">Financement</TabsTrigger>
                <TabsTrigger value="operation">Exploitation</TabsTrigger>
              </TabsList>

              {/* Contenu des onglets... */}

            </Tabs>

            <Button onClick={calculateResults} className="w-full">
              Calculer la rentabilité
            </Button>
          </div>

          {results && (
            <Card className="p-6 h-fit lg:sticky lg:top-20">
              <h2 className="text-xl font-semibold mb-6">Résultats</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Investissement total</h3>
                  <p className="text-2xl font-bold">{results.totalInvestment.toLocaleString('fr-FR')} €</p>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Mensuel</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm">Revenus</p>
                      <p className="text-lg font-semibold text-green-600">
                        +{results.monthlyIncome.toLocaleString('fr-FR')} €
                      </p>
                    </div>
                    <div>
                      <p className="text-sm">Charges</p>
                      <p className="text-lg font-semibold text-red-600">
                        -{results.monthlyExpenses.toLocaleString('fr-FR')} €
                      </p>
                    </div>
                  </div>
                  {monthlyPayment && (
                    <div>
                      <p className="text-sm">Mensualité du prêt</p>
                      <p className="text-lg font-semibold text-red-600">
                        -{monthlyPayment.toLocaleString('fr-FR')} €
                      </p>
                    </div>
                  )}
                </div>

                <Separator />

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Cashflow mensuel</h3>
                  <p className={`text-2xl font-bold ${results.monthlyCashflow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {results.monthlyCashflow.toLocaleString('fr-FR')} €
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Cashflow annuel</h3>
                  <p className={`text-2xl font-bold ${results.annualCashflow >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {results.annualCashflow.toLocaleString('fr-FR')} €
                  </p>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Rentabilité brute</h3>
                    <p className="text-2xl font-bold">{results.grossYield.toFixed(2)}%</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Rentabilité nette</h3>
                    <p className="text-2xl font-bold">{results.netYield.toFixed(2)}%</p>
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}