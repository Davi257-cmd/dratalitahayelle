# Dra. Talita Hayelle - Landing Page

Landing page profissional para harmonização facial da Dra. Talita Hayelle - Founder da Clínica TH Harmony.

## 🚀 Tecnologias

Este projeto foi construído com:

- **Vite** - Build tool e dev server
- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes UI modernos
- **Framer Motion** - Animações fluidas
- **React Router** - Roteamento

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

## 🛠️ Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview
```

## 📁 Estrutura do Projeto

```
thalita-estetic/
├── public/          # Arquivos estáticos (imagens, favicon, antes-depois, instagram)
│   ├── antes-depois/  # Imagens de transformações
│   ├── instagram/     # Posts do Instagram
│   └── talita-secoes/ # Fotos da Dra. Talita
├── src/
│   ├── components/  # Componentes React
│   ├── pages/       # Páginas
│   ├── lib/         # Utilitários
│   └── ui/          # Componentes UI (shadcn)
├── index.html       # HTML principal
└── vite.config.ts   # Configuração do Vite
```

## 🎨 Funcionalidades

- ✅ Design responsivo e moderno
- ✅ Header com comportamento de scroll no mobile
- ✅ Animações suaves com Framer Motion
- ✅ Integração com WhatsApp para agendamentos
- ✅ Galeria de transformações (antes/depois)
- ✅ Feed do Instagram integrado
- ✅ Formulário de contato funcional
- ✅ SEO otimizado
- ✅ Acessibilidade

## 📱 Responsividade

O projeto é totalmente responsivo, otimizado para:
- Mobile (320px+)
- Tablet (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🚀 Deploy

### Vercel (Recomendado)

O projeto está configurado para deploy na Vercel:

```bash
# Instalar Vercel CLI (se ainda não tiver)
npm i -g vercel

# Deploy
vercel --prod
```

O arquivo `vercel.json` já está configurado com:
- Cache headers otimizados
- Rewrites para SPA
- Configurações de build

### Outras plataformas

O projeto pode ser deployado em qualquer plataforma que suporte aplicações Vite/React:
- Netlify
- GitHub Pages
- AWS Amplify
- etc.

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa o linter

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto se necessário:

```env
VITE_API_URL=your_api_url
```

## 📄 Licença

Este projeto é privado e proprietário.

## 👤 Contato

**Dra. Talita Hayelle**
- Especialista em Harmonização Facial
- Founder da Clínica TH Harmony
- Localização: Fortaleza & Baturité, CE
- Instagram: [@dra.talitahayelle](https://www.instagram.com/dra.talitahayelle/)
- Instagram Clínica: [@clinica_th.harmony](https://www.instagram.com/clinica_th.harmony/)
- WhatsApp: [+55 85 99126-2487](https://wa.me/5585991262487)

## 📋 Seções da Landing Page

- **Hero**: Apresentação principal com slogan "Resultados Sofisticados com Naturalidade"
- **Por Que Você Merece Realçar Sua Beleza com Propósito**: Benefícios e diferenciais
- **Procedimentos**: Harmonização Facial Completa, Rejuvenescimento com Propósito, Harmonização de Olhar, Escultura Facial Sensível
- **Transformações**: Galeria de antes/depois (Cristiane, Beatriz, Marina, Lucia)
- **O Chamado de Lapidar Talentos**: História pessoal e propósito
- **Sobre**: Biografia e qualificações da Dra. Talita Hayelle
- **Estatísticas**: Números que representam jornada (5.820 mulheres)
- **Depoimentos**: Testimonials de pacientes
- **Feed Instagram**: Posts recentes
- **FAQ**: Perguntas frequentes
- **Contato**: Formulário e informações de contato
