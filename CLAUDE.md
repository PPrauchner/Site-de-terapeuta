# CLAUDE.md — Site Maria Dinoir (Site de Terapeuta)

Site institucional da terapeuta **Maria Dinoir**: apresentação, áreas de
atendimento, agendamento de consulta e área do paciente (login/cadastro).
Site **estático** — HTML + CSS + JavaScript vanilla, **sem build, sem framework**.

> Documentação de estrutura, padrões e histórico de correções: [`README.md`](./README.md).

---

## ⚠️ Atenção: o código está em outra branch

O working tree está na branch **`main`, que contém apenas este `CLAUDE.md` e o
`README.md`** — os arquivos do site **não** estão aqui. O site vive em:

| Branch | Conteúdo |
|--------|----------|
| `main` | só `README.md` (+ este `CLAUDE.md`) |
| `development` | **versão mais completa** — `index.html`, `assets/css`, `assets/js` (`menu.js`, `modal.js`, `faq_options.js`), `pages/footer_pages/` (como-funciona, faq, privacidade) |
| `site-completo` | versão anterior — páginas soltas na raiz (`login.html`, `cadastro.html`, `agendar-consulta.html`, `area-paciente.html`, `recuperacao-senha.html`), `css/style.css`, `assets/img/` |

**Antes de editar o site, faça checkout da branch certa** (provavelmente `development`):

```bash
git checkout development
```

---

## Como rodar

Site estático: basta abrir `index.html` no navegador. Para os caminhos relativos e
o `fetch`/JS funcionarem de forma consistente, sirva por HTTP local:

```bash
python -m http.server 5500        # → http://localhost:5500
# ou a extensão "Live Server" do VS Code
```

Não há `package.json`, testes ou linter — mudanças são verificadas **abrindo as
páginas no navegador** (desktop e mobile).

---

## Estrutura (branch `development`)

```
index.html                     # página principal
assets/
├── css/style.css              # folha de estilos única
├── js/
│   ├── menu.js                # navegação / menu responsivo
│   ├── modal.js               # modais
│   └── faq_options.js         # acordeão de FAQ
└── img/                       # logo, foto (maria-denoir), ícones
pages/footer_pages/
├── como-funciona.html
├── faq.html
└── privacidade.html
```

Páginas de autenticação/agendamento (`login`, `cadastro`, `recuperacao-senha`,
`agendar-consulta`, `area-paciente`) existem na branch `site-completo`; confirmar se
já foram portadas para `development` antes de referenciá-las.

### Fluxo de navegação

`index` → `login` → (`cadastro` | `recuperacao-senha`) → `area-paciente`.
`agendar-consulta` é acessível sem login; após confirmar leva à `area-paciente`.

---

## Convenções (do README)

- **Idioma:** todo o conteúdo em **português (pt-BR)**; `<html lang="pt-BR">`.
- **HTML semântico:** `header` (logo + nav + botões) · `main` · `footer` em todas
  as páginas; comentários em português explicando cada seção.
- **Meta tags padrão:** `charset UTF-8`, `viewport`, `description`, `keywords`.
- **Nomenclatura:** classes e IDs em **kebab-case** (`.login-form`, `#areas-atendimento`).
- **Responsividade:** mobile-first via media queries em `style.css`
  (desktop > 768px, tablet ≤ 768px, mobile ≤ 480px).
- **Identidade visual:** cor primária teal `#14a1a6`.

### Contato (rodapé)

Maria Dinoir — Terapeuta · Email `Maria@Terapeuta.com.br` · Tel/WhatsApp (55) 9703-9336.

---

## Repositório

- GitHub: `https://github.com/PPrauchner/Site-de-terapeuta`
- Branches ativas: `main`, `development`, `site-completo`.

---

## Notas de manutenção (pendências conhecidas)

- **Migração para Astro em andamento** — decisão registrada em
  [`docs/adr/0001-migracao-astro-php-hostinger.md`](./docs/adr/0001-migracao-astro-php-hostinger.md).
  Acontece na branch `astro-migration`. Quando atingir paridade com `development` e for
  mergeada: atualizar este `CLAUDE.md` (comandos `dev`/`build` viram `pnpm dev`/`pnpm build`
  do Astro, estrutura de pastas muda para `src/components`, `src/layouts`, `src/pages`,
  `src/styles`, `src/scripts`) e também a linha "Site de Terapeuta" na tabela de comandos do
  `CLAUDE.md` do workspace (`~/Documents/ES/CLAUDE.md`) — o aviso sobre as 3 branches
  confusas deixa de valer depois que `development`/`site-completo` forem aposentadas.
- **Glossário de domínio (`CONTEXT.md`) ainda não existe** — as páginas de
  autenticação/agendamento (`login`, `cadastro`, `agendar-consulta`, `área-paciente`,
  `recuperação-senha`) ficaram de fora da migração para Astro, congeladas em
  `site-completo` só como referência. Quando o backend PHP+MySQL for desenhado de
  verdade (ver ADR 0001), essa é a hora certa de abrir uma sessão `grill-with-docs`
  focada em domínio (termos como "paciente", "consulta", "área do paciente") — não em
  stack.
