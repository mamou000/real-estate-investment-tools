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

export default function ProfitabilityCalculator() {
  // Initial states and calculateResults function from previous part...

  return (
    <div className="min-h-screen bg-background">
      {/* Previously added header and main form parts... */}

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
  )
}