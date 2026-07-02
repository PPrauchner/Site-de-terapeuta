# Regras de Atomicidade

## Princípios

- **Uma página por commit** — mudanças em páginas distintas (`index.html`, `pages/footer_pages/faq.html`) = commits separados, mesmo que relacionadas
- **Estilo separado de conteúdo** — mudanças em `assets/css/style.css` = commit independente de mudanças de HTML, salvo quando o CSS é parte inseparável da mesma feature
- **Scaffolding separado de implementação** — criar uma página nova ≠ preencher seu conteúdo/estilo
- **Docs junto com o que documentam** — mudanças em `CLAUDE.md`/`README.md` vão no commit que motivou a mudança

## Tipos

`feat`, `fix`, `docs`, `style`, `refactor`, `chore`

## Escopos sugeridos

| Escopo | Quando usar |
|--------|-------------|
| `pages` | Páginas HTML (`index.html`, `pages/footer_pages/*`) |
| `assets/css` | Folha de estilos (`assets/css/style.css`) |
| `assets/js` | Scripts (`menu.js`, `modal.js`, `faq_options.js`) |
| `assets/img` | Imagens/ícones |
| `docs` | `CLAUDE.md`, `README.md` |
| `config` | `.gitignore` e configuração do repo |
