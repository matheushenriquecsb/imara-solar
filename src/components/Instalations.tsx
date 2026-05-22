import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import install1a from "@/assets/installs/install-1a.jpeg";
import install1b from "@/assets/installs/install-1b.jpeg";
import install1c from "@/assets/installs/install-1c.jpeg";
import install2a from "@/assets/install-2a.jpg";
import install2b from "@/assets/install-2b.jpg";
import install3a from "@/assets/install-3a.jpg";
import install3b from "@/assets/install-3b.jpg";

type Installation = {
  title: string;
  location: string;
  description: string;
  images: string[];
};

const installations: Installation[] = [
  {
    title: "Residência Família Souza",
    location: "São Paulo, SP",
    description:
      "Sistema de 8 kWp instalado em telhado residencial, gerando economia de 92% na conta de energia.",
    images: [install1a, install1b, install1c],
  },
  {
    title: "Galpão Industrial Vertex",
    location: "Campinas, SP",
    description:
      "Instalação comercial de 120 kWp em telhado industrial, com retorno do investimento em 3,5 anos.",
    images: [install2a, install2b],
  },
  {
    title: "Fazenda Boa Vista",
    location: "Ribeirão Preto, SP",
    description:
      "Usina solar de solo com 50 kWp para alimentar toda a operação rural da propriedade.",
    images: [install3a, install3b],
  },
];

const Installations = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);

  const close = useCallback(() => setOpenIndex(null), []);
  const current = openIndex !== null ? installations[openIndex] : null;

  const next = useCallback(() => {
    if (!current) return;
    setSlide((s) => (s + 1) % current.images.length);
  }, [current]);

  const prev = useCallback(() => {
    if (!current) return;
    setSlide((s) => (s - 1 + current.images.length) % current.images.length);
  }, [current]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, next, prev]);

  const open = (i: number) => {
    setOpenIndex(i);
    setSlide(0);
  };

  return (
    <section id="instalacoes" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-orange font-semibold uppercase tracking-wider text-sm">
            Nossos Projetos
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4">
            Instalações realizadas
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça alguns projetos entregues pela Imara Solar para nossos
            clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {installations.map((inst, i) => (
            <button
              key={inst.title}
              onClick={() => open(i)}
              className="group text-left bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={inst.images[0]}
                  alt={inst.title}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-coral font-semibold mb-1">
                  {inst.location}
                </p>
                <h3 className="font-heading text-xl font-bold mb-2">
                  {inst.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {inst.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {current && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
        >
          <div
            className="relative bg-card rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={close}
              aria-label="Fechar"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/90 hover:bg-background flex items-center justify-center shadow-md transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] bg-muted">
              <img
                src={current.images[slide]}
                alt={`${current.title} — foto ${slide + 1}`}
                className="w-full h-full object-cover"
              />

              {current.images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Foto anterior"
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/90 hover:bg-background flex items-center justify-center shadow-md transition"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Próxima foto"
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/90 hover:bg-background flex items-center justify-center shadow-md transition"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {current.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setSlide(i)}
                        aria-label={`Ir para foto ${i + 1}`}
                        className={`h-2 rounded-full transition-all ${
                          i === slide ? "w-8 bg-accent" : "w-2 bg-background/70"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="p-6">
              <p className="text-sm text-accent font-semibold mb-1">
                {current.location}
              </p>
              <h3 className="font-heading text-2xl font-bold mb-2">
                {current.title}
              </h3>
              <p className="text-muted-foreground">{current.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Installations;
