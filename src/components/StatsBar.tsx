import { Mail, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import { Email } from "@/data/mockEmails";

interface StatsBarProps {
  emails: Email[];
}

const StatsBar = ({ emails }: StatsBarProps) => {
  const total = emails.length;
  const productive = emails.filter((e) => e.classification === "productive").length;
  const unproductive = emails.filter((e) => e.classification === "unproductive").length;
  const avgConfidence = Math.round(emails.reduce((sum, e) => sum + e.confidence, 0) / total);

  return (
    <div className="grid grid-cols-4 gap-3 p-4 border-b bg-card">
      <div className="stat-card">
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-muted-foreground" />
          <span className="text-[11px] text-muted-foreground uppercase tracking-wider">Total</span>
        </div>
        <span className="text-2xl font-bold text-foreground">{total}</span>
      </div>
      <div className="stat-card">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-productive" />
          <span className="text-[11px] text-muted-foreground uppercase tracking-wider">Produtivos</span>
        </div>
        <span className="text-2xl font-bold text-foreground">{productive}</span>
      </div>
      <div className="stat-card">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-unproductive" />
          <span className="text-[11px] text-muted-foreground uppercase tracking-wider">Improdutivos</span>
        </div>
        <span className="text-2xl font-bold text-foreground">{unproductive}</span>
      </div>
      <div className="stat-card">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-[11px] text-muted-foreground uppercase tracking-wider">Confiança</span>
        </div>
        <span className="text-2xl font-bold text-foreground">{avgConfidence}%</span>
      </div>
    </div>
  );
};

export default StatsBar;
