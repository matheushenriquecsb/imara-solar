import { Sun, Wrench, BarChart3, Shield } from "lucide-react";

const services = [
  {
    icon: Sun,
    title: "Projeto Fotovoltaico",
    description:
      "Dimensionamento personalizado do sistema ideal para o seu consumo e tipo de telhado.",
  },
  {
    icon: Wrench,
    title: "Instalação Profissional",
    description:
      "Equipe certificada com instalação rápida, limpa e dentro das normas da ANEEL.",
  },
  {
    icon: BarChart3,
    title: "Monitoramento Remoto",
    description:
      "Acompanhe a geração de energia em tempo real pelo aplicativo, 24 horas por dia.",
  },
  {
    icon: Shield,
    title: "Manutenção Preventiva",
    description:
      "Planos de manutenção para garantir máxima eficiência e durabilidade do sistema.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">
            Nossos Serviços
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">
            Soluções completas em{" "}
            <span className="text-coral">energia solar</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Do projeto à instalação, cuidamos de tudo para você aproveitar o
            máximo da energia do sol.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card rounded-2xl border p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition">
                <s.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
