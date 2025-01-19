"use client"

import { useState } from "react"
import { MainNav } from "@/components/main-nav"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FileText } from "lucide-react"

export default function NotaryFeesCalculator() {
  const [propertyPrice, setPropertyPrice] = useState("")
  const [propertyType, setPropertyType] = useState("old")
  const [notaryFees, setNotaryFees] = useState<number | null>(null)

  const calculateNotaryFees = () => {
    const price = parseFloat(propertyPrice)
    
    if (price) {
      // Simplified calculation - actual rates vary by region and circumstances
      const rate = propertyType === "new" ? 0.0275 : 0.08
      const fees = price * rate
      setNotaryFees(Math.round(fees))
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
          <FileText className="h-8 w-8" />
          <h1 className="text-3xl font-bold">Calculateur de frais de notaire</h1>
        </div>

        <Card className="max-w-2xl mx-auto p-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="propertyPrice">Prix du bien (€)</Label>
              <Input
                id="propertyPrice"
                type="number"
                placeholder="200000"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label>Type de bien</Label>
              <RadioGroup
                value={propertyType}
                onValueChange={setPropertyType}
                className="flex gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="old" id="old" />
                  <Label htmlFor="old">Ancien</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="new" id="new" />
                  <Label htmlFor="new">Neuf</Label>
                </div>
              </RadioGroup>
            </div>

            <Button onClick={calculateNotaryFees} className="w-full">
              Calculer les frais de notaire
            </Button>

            {notaryFees !== null && (
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm font-medium">Frais de notaire estimés</p>
                <p className="text-2xl font-bold">
                  {notaryFees.toLocaleString('fr-FR')} €
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {propertyType === "new" 
                    ? "Environ 2.75% du prix d'achat pour un bien neuf"
                    : "Environ 8% du prix d'achat pour un bien ancien"}
                </p>
              </div>
            )}
          </div>
        </Card>
      </main>
    </div>
  )
}