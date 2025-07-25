# Intranet Hortsoy

Uma intranet moderna e completa desenvolvida para a Hortsoy, inspirada no modelo da Coplacana.

## 🚀 Funcionalidades

### ✅ Páginas Implementadas
- **Home/Timeline**: Posts de filiais, blog e comunicados com sistema de curtidas e filtros
- **Aniversários**: Lista de aniversariantes com filtros (hoje, próximos) e sistema de mensagens
- **Sistemas**: Acesso aos sistemas corporativos (BI, SIAGRI, EMAIL, etc.) com status em tempo real
- **Universidade**: Manuais e treinamentos organizados por categoria com links para OneDrive
- **Docs & Fotos**: Documentos organizados (assinaturas email, planos de fundo, comunicados)

### 🎨 Design e Interface
- Design responsivo para desktop e mobile
- Cores da marca Hortsoy (verde e branco)
- Logo da Hortsoy integrada
- Animações e efeitos hover nos ícones da navegação
- Sidebar com navegação lateral
- Header com busca e menu do usuário

### 📱 Responsividade
- Menu hamburger para dispositivos móveis
- Layout adaptativo para diferentes tamanhos de tela
- Sidebar que se oculta automaticamente em telas pequenas

## 🛠️ Tecnologias Utilizadas

- **React 19** - Framework principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes de interface
- **Lucide React** - Ícones
- **JavaScript (JSX)** - Linguagem de programação

## 📦 Estrutura do Projeto

```
hortsoy-intranet/
├── src/
│   ├── components/
│   │   ├── ui/              # Componentes shadcn/ui
│   │   ├── pages/           # Páginas da aplicação
│   │   ├── Sidebar.jsx      # Navegação lateral
│   │   └── Header.jsx       # Cabeçalho
│   ├── assets/
│   │   └── hortsoy-logo.png # Logo da empresa
│   ├── App.jsx              # Componente principal
│   └── App.css              # Estilos customizados
├── dist/                    # Build de produção
└── package.json             # Dependências
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou pnpm

### Instalação
```bash
# Instalar dependências
npm install
# ou
pnpm install

# Executar em desenvolvimento
npm run dev
# ou
pnpm run dev

# Build para produção
npm run build
# ou
pnpm run build
```

### Acesso
- **Desenvolvimento**: http://localhost:5173
- **Produção**: Servir os arquivos da pasta `dist/`

## 🔧 Configuração

### Integração com Firebase
Para integrar com o Firebase (autenticação e dados dos usuários):

1. Instalar Firebase SDK:
```bash
npm install firebase
```

2. Configurar Firebase no projeto
3. Substituir dados mockados pelos dados reais do Firebase
4. Implementar autenticação de usuários @hortsoy.com.br

### Personalização
- **Cores**: Editar variáveis CSS em `src/App.css`
- **Logo**: Substituir `src/assets/hortsoy-logo.png`
- **Dados**: Modificar arrays de dados nas páginas

## 📋 Funcionalidades Futuras

- [ ] Integração com Firebase Authentication
- [ ] Sistema de notificações em tempo real
- [ ] Chat interno entre colaboradores
- [ ] Sistema de aprovação de documentos
- [ ] Dashboard executivo com métricas
- [ ] Integração com sistemas externos (BI, SIAGRI)

## 🎯 Características Especiais

### Animações
- Ícones da navegação sobem ao fazer hover
- Cards com efeito de elevação
- Transições suaves entre páginas

### Sistema de Filtros
- Timeline: Filtrar por tipo de post (comunicados, resultados, marketing)
- Aniversários: Filtrar por período (hoje, próximos)
- Universidade: Filtrar por categoria de treinamento
- Docs: Filtrar por tipo de documento

### Responsividade
- Sidebar se transforma em menu hamburger no mobile
- Layout de cards se adapta ao tamanho da tela
- Textos e botões otimizados para touch

## 📞 Suporte

Para dúvidas ou suporte técnico, entre em contato com a equipe de TI da Hortsoy.

---

**Desenvolvido para Hortsoy** - Intranet v1.0

