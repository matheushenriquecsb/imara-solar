import { Email } from "@/data/mockEmails";
import { CheckCircle2, AlertCircle, Sparkles, Send, Copy, User } from "lucide-react";

interface EmailDetailProps {
  email: Email | null;
}

const EmailDetail = ({ email }: EmailDetailProps) => {
  if (!email) {
    return (
      <div className="flex-1 flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-7 h-7 text-muted-foreground" />
          </div>
          <h3 className="text-sm font-semibold text-foreground">Selecione um email</h3>
          <p className="text-xs text-muted-foreground mt-1">Escolha um email para ver a classificação e resposta sugerida</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden bg-background">
      {/* Header */}
      <div className="p-6 border-b bg-card">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h2 className="text-lg font-bold text-foreground">{email.subject}</h2>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="w-3.5 h-3.5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{email.from}</p>
                  <p className="text-xs text-muted-foreground">{email.fromEmail}</p>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-xs text-muted-foreground">{email.date}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {/* Classification Card */}
        <div className="rounded-xl border p-4 bg-card">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-primary" />
            <h3 className="text-sm font-semibold text-foreground">Classificação da IA</h3>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-1">Classificação</p>
              {email.classification === "productive" ? (
                <span className="badge-productive inline-flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Produtivo
                </span>
              ) : (
                <span className="badge-unproductive inline-flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  Improdutivo
                </span>
              )}
            </div>
            <div>
              <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-1">Categoria</p>
              <p className="text-sm font-medium text-foreground">{email.category}</p>
            </div>
            <div>
              <p className="text-[11px] text-muted-foreground uppercase tracking-wider mb-1">Confiança</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${email.confidence}%`,
                      backgroundColor: email.classification === "productive"
                        ? "hsl(var(--productive))"
                        : "hsl(var(--unproductive))",
                    }}
                  />
                </div>
                <span className="text-sm font-semibold text-foreground">{email.confidence}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Email Body */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-3">Conteúdo do Email</h3>
          <div className="rounded-xl border p-5 bg-card">
            <p className="text-sm text-foreground/80 whitespace-pre-line leading-relaxed">{email.body}</p>
          </div>
        </div>

        {/* Suggested Reply */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-semibold text-foreground">Resposta Sugerida pela IA</h3>
            </div>
            <div className="flex gap-2">
              <button className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-accent">
                <Copy className="w-3.5 h-3.5" />
                Copiar
              </button>
              <button className="flex items-center gap-1.5 text-xs font-medium bg-primary text-primary-foreground px-4 py-1.5 rounded-lg hover:bg-primary/90 transition-colors">
                <Send className="w-3.5 h-3.5" />
                Enviar Resposta
              </button>
            </div>
          </div>
          <div className="rounded-xl border-2 border-dashed border-primary/20 p-5 bg-primary/[0.02]">
            <p className="text-sm text-foreground/80 whitespace-pre-line leading-relaxed">{email.suggestedReply}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailDetail;
