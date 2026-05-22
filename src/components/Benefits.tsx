import { TrendingDown, Leaf, Home, Award } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Economia de até 95%",
    desc: "Reduza drasticamente sua conta de luz desde o primeiro mês de operação.",
  },
  {
    icon: Leaf,
    title: "100% Sustentável",
    desc: "Energia limpa e renovável que contribui para um planeta mais saudável.",
  },
  {
    icon: Home,
    title: "Valorização do Imóvel",
    desc: "Imóveis com energia solar são valorizados em até 8% no mercado.",
  },
  {
    icon: Award,
    title: "Garantia de 25 Anos",
    desc: "Painéis de alta durabilidade com garantia de performance estendida.",
  },
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Por Que Escolher Solar
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mt-3">
            Benefícios que <span className="text-coral">transformam</span> seu
            dia a dia
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-5">
                <b.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">
                {b.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
