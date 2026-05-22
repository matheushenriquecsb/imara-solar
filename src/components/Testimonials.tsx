import { Star, Quote } from "lucide-react";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-1.jpg";
import client4 from "@/assets/client-2.jpg";

type Testimonial = {
  name: string;
  city: string;
  savings: string;
  rating: number;
  quote: string;
  photo: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Carlos Mendes",
    city: "São Paulo, SP",
    savings: "R$ 1.250 / mês",
    rating: 5,
    quote:
      "Em menos de 60 dias minha conta caiu mais de 90%. A equipe da Imara cuidou de tudo, do projeto à homologação. Recomendo de olhos fechados.",
    photo: client1,
  },
  {
    name: "Patrícia Almeida",
    city: "Campinas, SP",
    savings: "R$ 890 / mês",
    rating: 5,
    quote:
      "Atendimento impecável e instalação muito rápida. O retorno do investimento veio antes do previsto e a economia é real todo mês.",
    photo: client2,
  },
  {
    name: "Roberto Tavares",
    city: "Ribeirão Preto, SP",
    savings: "R$ 4.300 / mês",
    rating: 5,
    quote:
      "Instalamos um sistema robusto no nosso galpão e o impacto na operação foi imediato. Profissionalismo e qualidade do início ao fim.",
    photo: client3,
  },
  {
    name: "Juliana Ferraz",
    city: "Sorocaba, SP",
    savings: "R$ 2.100 / mês",
    rating: 5,
    quote:
      "Na fazenda, a economia transformou nossos resultados. A Imara entendeu nossa necessidade e entregou um projeto sob medida.",
    photo: client4,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Depoimentos
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mt-3 mb-4 text-primary-foreground">
            O que nossos <span className="text-coral">clientes</span> dizem
          </h2>
          <p className="text-muted-foreground text-lg">
            Histórias reais de quem já transformou o sol em economia com a Imara
            Solar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="relative bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/20" />

              <div className="flex items-center gap-4 mb-5">
                <img
                  src={t.photo}
                  alt={t.name}
                  loading="lazy"
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover border-2 border-accent/40"
                />
                <div>
                  <h3 className="font-heading font-bold text-lg leading-tight">
                    {t.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{t.city}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground/90 leading-relaxed mb-6">
                "{t.quote}"
              </p>

              <div className="flex items-center justify-between pt-5 border-t border-border">
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  Economia mensal
                </span>
                <span className="font-heading text-xl font-bold text-primary">
                  {t.savings}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
