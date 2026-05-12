import logo from "@/assets/imara-logo-x.png";
import logotext from "@/assets/imara-text.png";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/imarasolar/";

const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Imara Solar"
                width={40}
                height={40}
                className="h-10 w-auto"
                loading="lazy"
              />
              <img
                src={logotext}
                alt="Imara Solar"
                width={40}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
              Energia solar acessível e sustentável para residências e empresas
              em Salvador e Região Metropolitana.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">
              Links Rápidos
            </h4>
            <div className="space-y-2">
              {["Serviços", "Benefícios", "Como Funciona", "Contato"].map(
                (l) => (
                  <a
                    key={l}
                    href={`#${l.toLowerCase().replace(/ /g, "-")}`}
                    className="block text-primary-foreground/60 text-sm hover:text-accent transition"
                  >
                    {l}
                  </a>
                ),
              )}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-bold text-primary-foreground mb-4">
              Contato
            </h4>
            <div className="space-y-2 text-primary-foreground/60 text-sm">
              {[
                { icon: Phone, text: "(71) 99157-3157" },
                { icon: Mail, text: "ivan@imarasolar.com.br" },
                { icon: Instagram, text: "Instagram", href: INSTAGRAM_URL },
                { icon: MapPin, text: "Salvador - BA" },
              ].map(({ icon: Icon, text, href }) => {
                const row = (
                  <>
                    <div className="w-8 h-8 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="font-medium">{text}</span>
                  </>
                );
                const rowClass =
                  "flex items-center gap-4 text-primary-foreground/60 hover:text-accent transition-colors";
                if (href) {
                  return (
                    <a
                      key={text}
                      href={href}
                      className={rowClass}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {row}
                    </a>
                  );
                }
                return (
                  <div key={text} className="flex items-center gap-4">
                    {row}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © 2026 Imara Solar. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
