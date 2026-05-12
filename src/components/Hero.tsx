import heroImg from "@/assets/hero-solar.jpg";
import badgeLogo from "@/assets/imara-logo-x.png";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Painéis solares em telhado residencial"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/30" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/30 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            <img
              src={badgeLogo}
              alt=""
              width={24}
              height={24}
              className="h-5 w-5 object-contain shrink-0"
            />
            O PODER DO SOL EM SUAS MÃOS
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-900 text-primary-foreground leading-tight mb-6">
            Transforme o sol em{" "}
            <span className="text-accent">economia real</span> para sua casa
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 leading-relaxed max-w-xl">
            A Imara Solar projeta e instala sistemas fotovoltaicos de alta
            performance. Reduza até 95% da sua conta de luz com energia
            sustentável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-full text-base font-bold hover:brightness-110 transition text-center"
            >
              Simule Sua Economia
            </a>
            <a
              href="#como-funciona"
              className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-full text-base font-semibold hover:bg-primary-foreground/10 transition text-center"
            >
              Como Funciona
            </a>
          </div>
          <div className="flex gap-8 mt-12">
            {[
              ["500+", "Instalações"],
              ["95%", "Economia"],
              ["25 anos", "Garantia"],
            ].map(([val, label]) => (
              <div key={label} className="text-center">
                <div className="font-heading text-2xl md:text-3xl font-bold text-accent">
                  {val}
                </div>
                <div className="text-primary-foreground/70 text-sm">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
