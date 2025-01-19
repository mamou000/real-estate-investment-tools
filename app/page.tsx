import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/main-nav";
import { Building2, Calculator, PiggyBank, FileText } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <MainNav />
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="px-4 py-20 md:py-32 bg-gradient-to-b from-background to-accent">
          <div className="container mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Building2 className="h-16 w-16 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Boîte à outils de l&apos;investissement immobilier
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Tous les outils essentiels pour réussir vos investissements immobiliers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/tools/profitability">
                  Commencer maintenant
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/tools">
                  Découvrir les outils
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Nos outils principaux
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
                <Calculator className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Calcul de rentabilité</h3>
                <p className="text-muted-foreground mb-4">
                  Analysez la rentabilité de vos investissements avec précision
                </p>
                <Button variant="outline" className="mt-auto" asChild>
                  <Link href="/tools/profitability">
                    Calculer
                  </Link>
                </Button>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
                <PiggyBank className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Capacité d&apos;emprunt</h3>
                <p className="text-muted-foreground mb-4">
                  Estimez votre capacité d&apos;emprunt maximale
                </p>
                <Button variant="outline" className="mt-auto" asChild>
                  <Link href="/tools/borrowing-capacity">
                    Calculer
                  </Link>
                </Button>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-lg border bg-card">
                <FileText className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Frais de notaire</h3>
                <p className="text-muted-foreground mb-4">
                  Calculez les frais de notaire pour votre acquisition
                </p>
                <Button variant="outline" className="mt-auto" asChild>
                  <Link href="/tools/notary-fees">
                    Calculer
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto py-8 px-4">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Boîte à outils de l&apos;investissement immobilier. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  )
}