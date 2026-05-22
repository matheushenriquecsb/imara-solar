import { useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "@/assets/imara-logo-x.png";
import logotext from "@/assets/imara-text.png";
import { cn } from "@/lib/utils";

type NavSection = "servicos" | "beneficios" | "como-funciona";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<NavSection | null>(null);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinkClass = (section: NavSection) =>
    cn(
      "text-base font-medium transition-colors pb-1 border-b-2",
      activeSection === section
        ? "text-primary border-yellow-400"
        : "text-muted-foreground border-transparent hover:text-primary",
    );

  const handleSectionClick = (section: NavSection) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src={logotext}
            alt="Imara Solar"
            width={40}
            height={40}
            className="h-8 w-auto"
          />

          <img
            src={logo}
            alt="Imara Solar"
            width={48}
            height={48}
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#servicos"
            className={navLinkClass("servicos")}
            onClick={() => setActiveSection("servicos")}
          >
            Conheça nossos serviços
          </a>

          <a
            href="#beneficios"
            className={navLinkClass("beneficios")}
            onClick={() => setActiveSection("beneficios")}
          >
            Benefícios
          </a>

          <a
            href="#como-funciona"
            className={navLinkClass("como-funciona")}
            onClick={() => setActiveSection("como-funciona")}
          >
            Como Funciona
          </a>

          <a
            href="#contato"
            className="bg-brand-gradient text-accent-foreground px-6 py-2.5 rounded-full text-base font-semibold hover:brightness-110 transition"
          >
            Solicite Orçamento
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden  "
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-7 h-7 text-primary" />
          ) : (
            <Menu className="w-7 h-7 text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 pb-6 bg-background border-t animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-5 pt-5">
            <a
              href="#servicos"
              className={navLinkClass("servicos")}
              onClick={() => handleSectionClick("servicos")}
            >
              Conheça nossos serviços
            </a>

            <a
              href="#beneficios"
              className={navLinkClass("beneficios")}
              onClick={() => handleSectionClick("beneficios")}
            >
              Benefícios
            </a>

            <a
              href="#como-funciona"
              className={navLinkClass("como-funciona")}
              onClick={() => handleSectionClick("como-funciona")}
            >
              Como Funciona
            </a>

            <a
              href="#contato"
              className="bg-brand-gradient text-accent-foreground px-6 py-3 rounded-full text-center text-base font-semibold hover:brightness-110 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Solicite Orçamento
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
