# Intranet Hortsoy

Uma intranet moderna em desenvolvimento para a Hortsoy.

## 🚀 Funcionalidades

### ✅ Páginas Implementadas
- **Home/Timeline**: Posts de filiais, blog e comunicados com sistema de curtidas e filtros
- **Aniversários**: Lista de aniversariantes com filtros (hoje, próximos) e sistema de mensagens
- **Sistemas**: Acesso aos sistemas corporativos (BI, SIAGRI, EMAIL, etc.) com status em tempo real
- **Universidade**: Manuais e treinamentos organizados por categoria com links para OneDrive
- **Docs & Fotos**: Documentos organizados (assinaturas email, planos de fundo, comunicados)


## 🛠️ Tecnologias Utilizadas

- **React 19** - Framework principal
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes de interface
- **Lucide React** - Ícones
- **JavaScript (JSX)** - Linguagem de programação

## Como Executar

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

## 🎯 Características Especiais

### Animações
- Ícones da navegação sobem ao fazer hover
- Cards com efeito de elevação
- Transições suaves entre páginas
- Menu hamburger para dispositivos móveis
- Layout adaptativo para diferentes tamanhos de tela
- Sidebar que se oculta automaticamente em telas pequenas

### Sistema de Filtros
- Timeline: Filtrar por tipo de post (comunicados, resultados, marketing)
- Aniversários: Filtrar por período (hoje, próximos)
- Universidade: Filtrar por categoria de treinamento
- Docs: Filtrar por tipo de documento

## 📋 Funcionalidades Futuras

Para integrar com o Firebase (autenticação e dados dos usuários):

1. Instalar Firebase SDK:
```bash
npm install firebase
```
2. Configurar Firebase no projeto
3. Substituir dados mockados pelos dados reais do Firebase
4. Implementar autenticação de usuários @hortsoy.com.br

- [ ] Integração com Firebase Authentication
- [ ] Sistema de notificações em tempo real
- [ ] Chat interno entre colaboradores
- [ ] Integração com sistemas externos (BI, SIAGRI)

---

**Desenvolvido para Hortsoy** - Intranet v1.0

