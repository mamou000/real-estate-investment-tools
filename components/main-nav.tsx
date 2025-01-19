"use client"

import * as React from "react"
import Link from "next/link"
import { Home, Calculator, PiggyBank, FileText } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const tools = [
  {
    title: "Calcul de rentabilité",
    href: "/tools/profitability",
    description: "Calculez la rentabilité brute et nette de votre investissement",
    icon: Calculator,
  },
  {
    title: "Capacité d'emprunt",
    href: "/tools/borrowing-capacity",
    description: "Estimez votre capacité d'emprunt maximale",
    icon: PiggyBank,
  },
  {
    title: "Frais de notaire",
    href: "/tools/notary-fees",
    description: "Calculez les frais de notaire pour votre acquisition",
    icon: FileText,
  },
]

export function MainNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={cn(
              "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            )}>
              <Home className="mr-2 h-4 w-4" />
              Accueil
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Outils</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {tools.map((tool) => (
                <li key={tool.title}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={tool.href}
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="flex items-center gap-2">
                        <tool.icon className="h-4 w-4" />
                        <div className="text-sm font-medium leading-none">{tool.title}</div>
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {tool.description}
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}