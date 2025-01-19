"use client"

import { useState } from "react"
import { MainNav } from "@/components/main-nav"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { PiggyBank } from "lucide-react"

export default function BorrowingCapacityCalculator() {
  const [monthlyIncome, setMonthlyIncome] = useState("")
  const [monthlyCharges, setMonthlyCharges] = useState("")
  const [loanDuration, setLoanDuration] = useState("25")
  const [interestRate, setInterestRate] = useState("3.5")
  const [maxLoan, setMaxLoan] = useState<number | null>(null)

  const calculateMaxLoan = () => {
    const income = parseFloat(monthlyIncome)
    const charges = parseFloat(monthlyCharges) || 0
    const rate = parseFloat(interestRate) / 100 / 12
    const months = parseFloat(loanDuration) * 12
    
    if (income) {
      const maxMonthlyPayment = (income - charges) * 0.35
      const maxAmount = maxMonthlyPayment * ((1 - Math.pow(1 + rate, -months)) / rate)
      setMaxLoan(Math.round(maxAmount))
    }
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
          <PiggyBank className="h-8 w-8" />
          <h1 className="text-3xl font-bold">Calculateur de capacité d&apos;emprunt</h1>
        </div>

        <Card className="max-w-2xl mx-auto p-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="monthlyIncome">Revenus mensuels nets (€)</Label>
              <Input
                id="monthlyIncome"
                type="number"
                placeholder="3000"
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="monthlyCharges">Charges mensuelles (€)</Label>
              <Input
                id="monthlyCharges"
                type="number"
                placeholder="500"
                value={monthlyCharges}
                onChange={(e) => setMonthlyCharges(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="loanDuration">Durée du prêt (années)</Label>
                <Input
                  id="loanDuration"
                  type="number"
                  value={loanDuration}
                  onChange={(e) => setLoanDuration(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="interestRate">Taux d&apos;intérêt (%)</Label>
                <Input
                  id="interestRate"
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                />
              </div>
            </div>

            <Button onClick={calculateMaxLoan} className="w-full">
              Calculer la capacité d&apos;emprunt
            </Button>

            {maxLoan !== null && (
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm font-medium">Capacité d&apos;emprunt maximale</p>
                <p className="text-2xl font-bold">
                  {maxLoan.toLocaleString('fr-FR')} €
                </p>
              </div>
            )}
          </div>
        </Card>
      </main>
    </div>
  )
}