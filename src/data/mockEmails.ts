export interface Email {
  id: string;
  from: string;
  fromEmail: string;
  subject: string;
  preview: string;
  body: string;
  date: string;
  classification: "productive" | "unproductive";
  confidence: number;
  suggestedReply: string;
  category: string;
}

export const mockEmails: Email[] = [
  {
    id: "1",
    from: "Carlos Silva",
    fromEmail: "carlos.silva@empresa.com",
    subject: "Erro no sistema de relatórios - Urgente",
    preview: "Estamos enfrentando um erro crítico no módulo de relatórios desde ontem...",
    body: "Olá equipe de suporte,\n\nEstamos enfrentando um erro crítico no módulo de relatórios desde ontem à tarde. Ao tentar gerar o relatório mensal de vendas, o sistema retorna o erro 500 e não conseguimos prosseguir.\n\nIsso está impactando diretamente nossa entrega mensal. Precisamos de uma solução urgente.\n\nAtenciosamente,\nCarlos Silva\nGerente Comercial",
    date: "Há 15 min",
    classification: "productive",
    confidence: 96,
    suggestedReply: "Olá Carlos,\n\nRecebemos sua solicitação e já estamos investigando o erro no módulo de relatórios. Nossa equipe técnica foi acionada e você receberá uma atualização em até 2 horas.\n\nPedimos desculpas pelo inconveniente.\n\nAtenciosamente,\nEquipe de Suporte",
    category: "Suporte Técnico",
  },
  {
    id: "2",
    from: "Ana Rodrigues",
    fromEmail: "ana.rodrigues@cliente.com.br",
    subject: "Dúvida sobre integração com API",
    preview: "Gostaria de saber como realizar a integração do sistema com nossa API...",
    body: "Prezados,\n\nGostaria de saber como realizar a integração do sistema com nossa API REST. Precisamos enviar dados de pedidos automaticamente e gostaríamos de entender quais endpoints estão disponíveis e qual a documentação técnica.\n\nPodem nos enviar as credenciais de acesso ao ambiente de sandbox?\n\nObrigada,\nAna Rodrigues\nAnalista de Sistemas",
    date: "Há 45 min",
    classification: "productive",
    confidence: 91,
    suggestedReply: "Olá Ana,\n\nObrigado pelo contato! Segue o link para nossa documentação técnica da API: [link]. As credenciais do ambiente sandbox serão enviadas separadamente por email seguro.\n\nCaso tenha dúvidas adicionais, estamos à disposição.\n\nAtenciosamente,\nEquipe Técnica",
    category: "Dúvidas Técnicas",
  },
  {
    id: "3",
    from: "Roberto Mendes",
    fromEmail: "roberto@parceiro.com",
    subject: "Parabéns pela conquista!",
    preview: "Quero parabenizar toda a equipe pelo excelente resultado no último trimestre...",
    body: "Olá pessoal!\n\nQuero parabenizar toda a equipe pelo excelente resultado no último trimestre. O crescimento de 40% é impressionante e mostra o comprometimento de todos.\n\nContinuem com o ótimo trabalho!\n\nAbraços,\nRoberto Mendes",
    date: "Há 1h",
    classification: "unproductive",
    confidence: 98,
    suggestedReply: "Olá Roberto,\n\nMuito obrigado pelas palavras! Ficamos muito felizes com o reconhecimento. É o resultado do trabalho em equipe.\n\nUm abraço,\nEquipe",
    category: "Felicitações",
  },
  {
    id: "4",
    from: "Mariana Costa",
    fromEmail: "mariana.costa@empresa.com",
    subject: "Atualização do caso #4521 - Cliente Alfa",
    preview: "Segue atualização sobre o caso do Cliente Alfa que está em aberto desde...",
    body: "Olá,\n\nSegue atualização sobre o caso do Cliente Alfa que está em aberto desde a semana passada:\n\n- O problema de sincronização foi identificado\n- A correção está em fase de testes\n- Previsão de deploy: amanhã às 10h\n\nPreciso de aprovação para realizar o deploy em produção.\n\nMariana Costa\nAnalista de Suporte N2",
    date: "Há 2h",
    classification: "productive",
    confidence: 94,
    suggestedReply: "Olá Mariana,\n\nObrigado pela atualização. O deploy está aprovado para amanhã às 10h conforme previsto. Por favor, notifique o Cliente Alfa sobre a previsão de resolução.\n\nAtenciosamente,\nCoordenação de Suporte",
    category: "Casos em Aberto",
  },
  {
    id: "5",
    from: "Fernanda Lima",
    fromEmail: "fernanda@newsletter.com",
    subject: "Obrigada pelo excelente atendimento!",
    preview: "Gostaria de agradecer ao João pelo suporte prestado ontem. Foi muito...",
    body: "Olá equipe,\n\nGostaria de agradecer ao João pelo suporte prestado ontem. Foi muito atencioso e resolveu meu problema rapidamente.\n\nVocês são incríveis!\n\nFernanda Lima",
    date: "Há 3h",
    classification: "unproductive",
    confidence: 95,
    suggestedReply: "Olá Fernanda,\n\nMuito obrigado pelo feedback! Ficamos felizes em saber que o atendimento foi satisfatório. Encaminharemos seu elogio ao João.\n\nEstamos sempre à disposição!\n\nAtenciosamente,\nEquipe de Suporte",
    category: "Agradecimentos",
  },
  {
    id: "6",
    from: "Pedro Almeida",
    fromEmail: "pedro.almeida@tech.io",
    subject: "Solicitação de acesso ao módulo financeiro",
    preview: "Preciso de acesso ao módulo financeiro para gerar os relatórios de...",
    body: "Prezados,\n\nPreciso de acesso ao módulo financeiro para gerar os relatórios de fechamento do mês. Meu perfil atual não tem as permissões necessárias.\n\nUsuário: pedro.almeida\nMódulo: Financeiro > Relatórios\nNível: Leitura\n\nAguardo retorno.\n\nPedro Almeida\nController Financeiro",
    date: "Há 4h",
    classification: "productive",
    confidence: 93,
    suggestedReply: "Olá Pedro,\n\nSua solicitação de acesso foi recebida. Estamos processando a liberação das permissões para o módulo Financeiro > Relatórios com nível de Leitura.\n\nPrazo estimado: até 4 horas úteis.\n\nAtenciosamente,\nEquipe de Administração",
    category: "Solicitação de Acesso",
  },
];
