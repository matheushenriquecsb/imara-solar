const steps = [
  {
    num: "01",
    title: "Simulação Gratuita",
    desc: "Analisamos seu consumo e projetamos o sistema ideal sem compromisso.",
  },
  {
    num: "02",
    title: "Projeto Técnico",
    desc: "Engenheiros criam o projeto respeitando normas e otimizando a geração.",
  },
  {
    num: "03",
    title: "Instalação Rápida",
    desc: "Equipe especializada instala em poucos dias, sem sujeira ou transtorno.",
  },
  {
    num: "04",
    title: "Economia Imediata",
    desc: "Sistema ligado à rede — comece a economizar já no primeiro mês.",
  },
];

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-semibold text-sm uppercase tracking-widest text-primary">
            Passo a Passo
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3">
            Como funciona a <span className="text-accent">instalação</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <div key={s.num} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[2px] bg-border" />
              )}
              <div className="relative bg-card rounded-2xl border p-8 text-center hover:shadow-lg transition">
                <div className="font-heading text-5xl font-900 text-accent/20 mb-4">
                  {s.num}
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
