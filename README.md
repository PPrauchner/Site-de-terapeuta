# Site Maria Dinoir - Terapeuta

> Plataforma digital profissional para apresentação de serviços terapêuticos especializados em Terapia de Reprocesso Generativo (TRG).

**Última atualização**: Maio de 2026

---

## 📋 Visão Geral

Site responsivo desenvolvido em **HTML5** e **CSS3** com design moderno e intuitivo, apresentando os serviços de terapia emocional da profissional Maria Dinoir. A plataforma oferece informações completas sobre a prática terapêutica, áreas de atendimento, processo terapêutico e contato direto via WhatsApp.

**Tecnologias Utilizadas:**
- HTML5 semântico
- CSS3 com Flexbox e Grid
- Responsive Design (Mobile-First)
- Bootstrap Icons (CDN v1.11.3)
- Google Fonts (Lora + Poppins)

---

## 📁 Estrutura do Projeto

```
Site-de-terapeuta/
├── index.html                          # Página principal
├── README.md                           # Este arquivo
├── .git/                               # Controle de versão
├── .gitignore                          # Exclusões Git
│
├── assets/
│   ├── css/
│   │   └── style.css                   # Folha de estilos organizada em 9 seções
│   ├── img/                            # Imagens e logo
│   └── js/
│       ├── modal.js                    # Gerenciamento de modais
│       └── faq_options.js              # Interatividade FAQ
│
└── pages/
    └── footer_pages/
        ├── privacidade.html            # Política de Privacidade
        ├── como-funciona.html          # Como Funciona o Tratamento
        └── faq.html                    # Perguntas Frequentes
```

---

## � Páginas do Site

### 1. **index.html** - Página Principal
A página de entrada do site com as seções:

- **Header** - Logo, navegação principal e botão de agendamento
- **Hero Section** - Apresentação da profissional Maria Dinoir
- **Sobre a Profissional** - Biografia e experiência (3+ anos)
- **Áreas de Atendimento** - Especializações e tipos de tratamento
- **Como Funciona** - 6 cards explicativos do processo terapêutico
- **Relatos de Pacientes** - Depoimentos e feedback
- **Footer** - Informações de contato, links úteis e modais informativos

### 2. **pages/footer_pages/privacidade.html** - Política de Privacidade
Página informativa sobre tratamento de dados e privacidade com:
- Hero section padronizado
- 4 cards informativos com ícones
- Layout em 2 colunas fixas
- Link de atualização

### 3. **pages/footer_pages/como-funciona.html** - Como Funciona
Página detalhada sobre o processo terapêutico com:
- Hero section padronizado
- 6 cards explicativos em grid responsivo
- Seção CTA (Call-to-Action) com botão WhatsApp
- Links para agendamento

### 4. **pages/footer_pages/faq.html** - Perguntas Frequentes
Página interativa com accordion de FAQ contendo:
- Hero section padronizado
- 5 perguntas e respostas em expandable details
- Seção de dúvidas adicionais com link WhatsApp
- Estilo consistente com outras páginas

---

## 🎨 Design System

### Paleta de Cores
| Cor | Hex | Uso |
|-----|-----|-----|
| Teal Primário | `#14a1a6` | Links, buttons, accents |
| Teal Escuro | `#0d7377` | Títulos, heading |
| Teal Claro | `#187F7D` | Hover states, borders |
| Dark Navy | `#111620` | Footer background |
| Off-white | `#f9f9f9` | Background geral |
| White | `#ffffff` | Cards, content areas |

### Tipografia
- **Headings** (H1, H2, H3): `Lora` (serif) - elegante e profissional
- **Body Text**: `Poppins` (sans-serif) - legibilidade e modernidade

### Breakpoints Responsivos
```css
Desktop:   > 1200px
Tablet:    768px - 1199px
Mobile:    < 768px
Extra Small: < 480px
```

---

## 🏗️ Organização do CSS (9 Seções Lógicas)

O arquivo `style.css` está organizado em 9 seções bem-definidas:

1. **RESET E ESTILOS GLOBAIS** - Reset CSS, tipografia, variáveis
2. **HEADER** - Navegação, logo, botões (sticky)
3. **FOOTER** - Rodapé dark, contact info, modais
4. **PÁGINA PRINCIPAL** - Estilos para index.html (Hero, About, Services, Process, Testimonials)
5. **PÁGINAS SECUNDÁRIAS** - Componentes reutilizáveis:
   - `.page-hero` - Seção hero padronizada
   - `.page-section` - Content wrapper
   - `.info-cards-container` - Grid de cards
   - `.info-card` - Card individual com ícone
   - `.cta-section` - Call-to-action section
   - `.btn-voltar` - Botão de voltar
6. **MODAIS** - Estilos e animações de modal
7. **SEÇÃO FAQ** - Accordion details/summary
8. **RESPONSIVE DESIGN** - Media queries (768px, 480px)
9. **ANIMAÇÕES** - Keyframes e transitions

### Classes Principais (BEM Methodology)

**Page Hero:**
```css
.page-hero                    /* Container principal */
.page-hero__container         /* Wrapper interno */
.page-hero__header-inline     /* Header com back button */
.page-hero__title             /* Título da página */
.page-hero__subtitle          /* Subtítulo/descrição */
```

**Info Cards:**
```css
.info-cards-container         /* Grid container */
.info-cards-container--2cols  /* Auto-fit responsivo */
.info-cards-container--2cols-fixed  /* 2 colunas fixas */
.info-card                    /* Card individual */
.info-card__icon              /* Ícone do card */
.info-card__title             /* Título do card */
.info-card__content           /* Conteúdo do card */
```

**CTA Section:**
```css
.cta-section                  /* Container */
.cta-section__container       /* Wrapper */
.cta-section__title           /* Título */
.cta-section__subtitle        /* Subtítulo */
.cta-section__button          /* Botão CTA */
```

---

## 📱 Responsividade

Todas as páginas implementam **Mobile-First Design** com media queries:

- **Desktop (1200px+)**: Layout completo, navegação horizontal
- **Tablet (768px-1199px)**: Grid ajustado, fonte reduzida
- **Mobile (<768px)**: Single column, stack vertical
- **Extra Small (<480px)**: Compactado, header responsivo

---

## 🔗 Navegação

### Header (Todas as Páginas)
- Logo clicável → `index.html`
- Menu principal (Início, Sobre, Áreas, Como Funciona, Relatos)
- Botão "Agendar Consulta" → WhatsApp

### Footer (Todas as Páginas)
Rodapé dark com 3 colunas:
1. **Sobre** - Breve apresentação
2. **Contato** - Email, telefone, WhatsApp
3. **Links** - Privacidade, FAQ, Como Funciona

### Páginas Secundárias
- Back button (`←`) para voltar
- Navegação consistente
- Links para outras seções

---

## 📊 Componentes Reutilizáveis

### `.page-hero`
Hero section com gradient teal para todas as páginas secundárias
- Padding: 2rem (otimizado para compactação)
- Background: Linear gradient
- Contém back button e título

### `.page-section`
Wrapper de conteúdo principal com fundo off-white
- Padding: 3rem 2rem
- Max-width: 1200px
- Centralização automática

### `.info-card`
Card individual com ícone, título e conteúdo
- Fundo branco, sombra suave
- Hover: elevação e sombra aumentada
- Ícone com fundo teal 10%

### `.cta-section`
Seção de chamada para ação com botão
- Fundo branco
- Padding: 3rem 2rem
- Botão teal com hover animado

---

## 🔧 JavaScript

### modal.js
Gerencia abertura/fechamento de modais:
- Modal de "Serviços Online"
- Modal de "Política de Cancelamento"
- Overlay com opacity
- Animação fade-in

### faq_options.js
Interatividade para accordion FAQ:
- Toggle expand/collapse
- Ícone rotativo de seta
- Animação suave

---

## ✅ Características Implementadas

- [x] Design responsivo (mobile-first)
- [x] Navegação intuitiva
- [x] Hero section com imagem
- [x] Componentes reutilizáveis
- [x] Modais funcionais
- [x] FAQ interativa (accordion)
- [x] Integração WhatsApp
- [x] Página de Privacidade
- [x] Página Como Funciona
- [x] Footer profissional
- [x] SEO meta tags
- [x] Acessibilidade (alt text, semantic HTML)
- [x] Performance otimizada

---

## 🚀 Como Usar

1. **Clonar repositório:**
   ```bash
   git clone [seu-repo-url]
   cd Site-de-terapeuta
   ```

2. **Abrir no navegador:**
   - Abra `index.html` direto no navegador
   - Ou use um servidor local: `python -m http.server 8000`

3. **Estrutura pronta para deploy:**
   - Compatível com qualquer hosting (GitHub Pages, Netlify, Vercel)
   - Sem dependências externas (apenas CDNs)
   - Buildtime: 0 (HTML/CSS puro)

---

## 📧 Contato & Links

- **Email:** maria@terapeuta.com.br
- **WhatsApp:** (55) 9703-9336
- **Especialidade:** Terapia de Reprocesso Generativo (TRG)
- **Localização:** Alegrete, RS

---

## 📄 Licença & Créditos

**Desenvolvido por:** Pietro Mendes com Maria Dinoir

**Design:**
- Logo: [Autor]
- Imagens: [Fonte]
- Icons: Bootstrap Icons (v1.11.3)
- Fonts: Google Fonts

---

## 📝 Notas de Desenvolvimento

### Últimas Atualizações (Maio 2026)

✅ **CSS Reorganizado em 9 Seções**
- Melhor manutenção e escalabilidade
- Comentários detalhados para cada seção
- Separação de concerns clara

✅ **Páginas Secundárias Padronizadas**
- Pattern reusável `.page-hero` + `.page-section`
- Componentes `.info-card` consistentes
- Layout responsivo com grid

✅ **Otimizações de Espaço**
- Padding reduzido em 25% (containers mais compactos)
- Footer otimizado (altura reduzida)
- Design mais limpo e eficiente

✅ **Componentes de Grid**
- `.info-cards-container--2cols` (auto-fit responsivo)
- `.info-cards-container--2cols-fixed` (exatamente 2 colunas)

### Próximas Melhorias Potenciais

- [ ] Integração com agenda online
- [ ] Sistema de agendamento automático
- [ ] Blog/artigos sobre terapia
- [ ] Chatbot de atendimento
- [ ] Análise de visitantes (Google Analytics)

---

**Versão:** 2.0  
**Status:** Production Ready  
**Último update:** 15 de Maio de 2026
