import { Mail, Inbox, Tag, BarChart3, Settings, Sparkles } from "lucide-react";

const EmailSidebar = () => {
  return (
    <aside className="w-64 bg-card border-r flex flex-col h-screen shrink-0">
      <div className="p-5 border-b">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-foreground">MailClassify</h1>
            <p className="text-[11px] text-muted-foreground">Classificação com IA</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-3 space-y-1">
        <a href="#" className="sidebar-nav-item active">
          <Inbox className="w-4 h-4" />
          <span>Caixa de Entrada</span>
          <span className="ml-auto text-xs font-semibold bg-primary/10 text-primary px-2 py-0.5 rounded-full">6</span>
        </a>
        <a href="#" className="sidebar-nav-item">
          <Tag className="w-4 h-4" />
          <span>Classificados</span>
        </a>
        <a href="#" className="sidebar-nav-item">
          <Mail className="w-4 h-4" />
          <span>Respondidos</span>
        </a>
        <a href="#" className="sidebar-nav-item">
          <BarChart3 className="w-4 h-4" />
          <span>Estatísticas</span>
        </a>
      </nav>

      <div className="p-3 border-t">
        <a href="#" className="sidebar-nav-item">
          <Settings className="w-4 h-4" />
          <span>Configurações</span>
        </a>
      </div>
    </aside>
  );
};

export default EmailSidebar;
