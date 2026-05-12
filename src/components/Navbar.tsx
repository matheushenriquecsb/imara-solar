import { useState } from "react";
import logo from "@/assets/imara-logo-x.png";
import logotext from "@/assets/imara-text.png";
import { cn } from "@/lib/utils";

type NavSection = "servicos" | "beneficios" | "como-funciona";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<NavSection | null>(null);

  const navLinkClass = (section: NavSection) =>
    cn(
      "text-base font-medium transition-colors pb-1 border-b-2",
      activeSection === section
        ? "text-primary border-yellow-400"
        : "text-muted-foreground border-transparent hover:text-primary",
    );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
         <img src={logotext} alt="Imara Solar" width={40} height={40} className="h-8 w-auto" />
          {/* <span className="font-heading text-xl font-bold text-primary">Imara Solar</span> */}
          <img src={logo} alt="Imara Solar" width={48} height={48} className="h-12 w-auto" /> 
        </a>
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
          <a href="#contato" className="bg-brand-gradient text-accent-foreground px-6 py-2.5 rounded-full text-base font-semibold hover:brightness-110 transition">
            Solicite Orçamento
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
