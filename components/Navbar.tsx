"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

type NavLink = {
  href: string;
  label: string;
  content?: () => JSX.Element;
};

const projects = [
  {
    title: "Projeto Alpha",
    image: "https://via.placeholder.com/150",
    description:
      "Uma breve descrição do Projeto Alpha, destacando seus principais objetivos e impacto.",
  },
  {
    title: "Projeto Beta",
    image: "https://via.placeholder.com/150",
    description:
      "Descrição do Projeto Beta, incluindo detalhes sobre o escopo e a implementação.",
  },
  {
    title: "Projeto Gamma",
    image: "https://via.placeholder.com/150",
    description:
      "Este é o Projeto Gamma, focado em inovações e soluções tecnológicas.",
  },
  {
    title: "Projeto Delta",
    image: "https://via.placeholder.com/150",
    description:
      "Detalhes do Projeto Delta, que visa melhorias em processos e eficiência operacional.",
  },
];

const navLinks: NavLink[] = [
  { href: "/", label: "Inicial" },
  {
    href: "/quem-somos",
    label: "Quem Somos",
  },
  {
    href: "/agenda",
    label: "Agenda",
  },
  {
    href: "/projetos",
    label: "Projetos",
    content: () => (
      <NavigationMenuContent>
        <div className="grid w-[400px] p-2">
          <NavigationMenuLink asChild>
            <Link
              className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              href="#"
            >
              <div className="text-sm font-medium leading-none group-hover:underline">
                Projetos
              </div>
              <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                Upgrade your reporting with advanced analytics.
              </div>
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild />
        </div>
      </NavigationMenuContent>
    ),
  },
  {
    href: "/dados",
    label: "Dados",
    content: () => (
      <NavigationMenuContent>
        <div className="grid w-[400px] p-2">
          <NavigationMenuLink asChild>
            <Link
              className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-white p-4 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              href="#"
            >
              <div className="text-sm font-medium leading-none group-hover:underline">
                Dados
              </div>
              <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                Upgrade your reporting with advanced analytics.
              </div>
            </Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild />
        </div>
      </NavigationMenuContent>
    ),
  },
  {
    href: "/contato",
    label: "Contato",
  },
];

const Navbar = () => {
  const [hovering, setHovering] = useState<number | null>(null);
  const [popoverLeft, setPopoverLeft] = useState<number | null>(null);
  const [popoverHeight, setPopoverHeight] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const refs = useRef<(HTMLElement | null)[]>([]);

  const onMouseEnter = (index: number, el: HTMLElement) => {
    setHovering(index);
    setPopoverLeft(el.offsetLeft);
    const menuElement = refs.current[index];
    if (menuElement) {
      setPopoverHeight(menuElement.offsetHeight);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          {navLinks.map((link, index) =>
            link.content ? (
              <NavigationMenuItem key={index}>
                <NavigationMenuTrigger className="group font-semibold uppercase inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50">
                  {link.label}
                </NavigationMenuTrigger>
                {link.content()}
              </NavigationMenuItem>
            ) : (
              <NavigationMenuLink key={index} asChild>
                <Link
                  className="group font-semibold uppercase inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </NavigationMenuLink>
            )
          )}
        </NavigationMenuList>
      </NavigationMenu>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link className="flex items-center gap-2" href="#">
            <span className="text-lg font-bold">Acme Inc</span>
          </Link>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
