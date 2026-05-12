import { Email } from "@/data/mockEmails";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface EmailListProps {
  emails: Email[];
  selectedId: string | null;
  onSelect: (email: Email) => void;
}

const EmailList = ({ emails, selectedId, onSelect }: EmailListProps) => {
  return (
    <div className="w-96 border-r bg-card/50 flex flex-col h-screen shrink-0">
      <div className="p-4 border-b">
        <h2 className="text-sm font-semibold text-foreground">Emails Recebidos</h2>
        <p className="text-xs text-muted-foreground mt-0.5">{emails.length} emails classificados pela IA</p>
      </div>

      <div className="flex-1 overflow-y-auto">
        {emails.map((email) => (
          <div
            key={email.id}
            onClick={() => onSelect(email)}
            className={`p-4 border-b cursor-pointer transition-colors duration-150 ${
              selectedId === email.id
                ? "bg-primary/5 border-l-2 border-l-primary"
                : "hover:bg-accent/50 border-l-2 border-l-transparent"
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm font-semibold text-foreground truncate">{email.from}</span>
                  <span className="text-[11px] text-muted-foreground shrink-0">{email.date}</span>
                </div>
                <p className="text-sm font-medium text-foreground/80 truncate">{email.subject}</p>
                <p className="text-xs text-muted-foreground mt-1 truncate">{email.preview}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-2.5">
              {email.classification === "productive" ? (
                <span className="badge-productive flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Produtivo
                </span>
              ) : (
                <span className="badge-unproductive flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  Improdutivo
                </span>
              )}
              <span className="text-[11px] text-muted-foreground">{email.confidence}% confiança</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailList;
