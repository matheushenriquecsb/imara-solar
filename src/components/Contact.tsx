import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">
              Fale Conosco
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Solicite seu{" "}
              <span className="text-accent">orçamento gratuito</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Preencha o formulário e nossa equipe entrará em contato em até 24
              horas com uma proposta personalizada.
            </p>
            <div className="space-y-5">
              {[
                { icon: Phone, text: "(71) 99157-3157" },
                { icon: Mail, text: "ivan@imarasolar.com.br" },
                { icon: MapPin, text: "Salvador, BA" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-foreground font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <form
            className="bg-card rounded-2xl border p-8 md:p-10 space-y-5 shadow-lg"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground block mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  placeholder="(00) 00000-0000"
                  className="w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Cidade
              </label>
              <input
                type="cidade"
                placeholder="Cidade/Estado"
                className="w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Valor médio da conta de luz
              </label>
              <select className="w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                <option>Até R$ 300</option>
                <option>R$ 300 - R$ 600</option>
                <option>R$ 600 - R$ 1.000</option>
                <option>Acima de R$ 1.000</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground block mb-2">
                Mensagem
              </label>
              <textarea
                rows={4}
                placeholder="Conte-nos sobre o seu projeto..."
                className="w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-accent-foreground py-4 rounded-full font-bold text-base hover:brightness-110 transition"
            >
              Enviar Solicitação
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
