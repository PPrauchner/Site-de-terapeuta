---
status: accepted
---

# Migração para Astro (estático) com backend futuro em PHP+MySQL, mantendo hosting Hostinger Single/Premium

O site era estático (HTML/CSS/JS vanilla, sem build), hospedado no plano Hostinger
**Single/Premium**. Buscávamos modernizar o frontend (componentização, TypeScript,
manutenibilidade) e abrir caminho para um backend real (login, cadastro, agendamento,
área do paciente) no futuro — **sem contratar um plano novo na Hostinger**. Essa
restrição de plano é o fator decisivo por trás de toda a decisão: Node.js como app
persistente só é suportado a partir do plano Business/Cloud da Hostinger; PHP+MySQL e
sites estáticos rodam em qualquer plano, incluindo o atual.

**Decisão:** adotar **Astro** com output estático para o frontend — o build gera
HTML/CSS/JS puro, publicável em qualquer plano Hostinger exatamente como hoje. Quando o
backend for implementado (não é objeto desta migração), usar **PHP + MySQL nativos do
Hostinger**, sem Node.js persistente e sem BaaS externo.

Detalhes da migração:
- CSS escopado por componente Astro + um arquivo de tokens globais (cores, tipografia,
  breakpoints, reset), substituindo o `style.css` único.
- Componentização das seções recorrentes: `PageHero`, `InfoCard`, `CtaSection`,
  `Modal`, `FaqAccordion`, `Header`, `Footer`.
- Imagens migradas para `astro:assets` (otimização/lazy-loading automáticos).
- Scripts continuam vanilla TypeScript, sem framework de UI/islands, reorganizados em
  `src/scripts/`.
- Gerenciador de pacotes: **pnpm** (mais rápido, `node_modules` estrito evita
  dependências fantasmas, e é o padrão majoritário nos demais projetos JS/TS do
  workspace — SAGA e Peak Plan já usam pnpm) + Node.js LTS. ESLint + Prettier para
  consistência de formatação/lint.
- Deploy via **CI/CD** (GitHub Actions + FTP/SFTP) a cada push na `main`, usando
  credenciais do hPanel guardadas como secret no repositório. O pipeline roda
  `astro check` (type-check) e lint **antes** do build; se algum falhar, o deploy é
  bloqueado (gate de qualidade) — nenhum erro de tipo ou lint vai pro ar.
- Migração feita na branch `astro-migration` (a partir de `development`). As páginas de
  autenticação/agendamento hoje em `site-completo` (`login`, `cadastro`,
  `agendar-consulta`, `área-paciente`, `recuperação-senha`) **ficam de fora** desta
  migração — permanecem congeladas como referência visual/estrutural para quando o
  backend PHP existir.

## Considered Options

- **Node.js (Next.js/Express)** para backend JS unificado — rejeitado: exige plano
  Business ou Cloud na Hostinger, contrariando a restrição de não contratar plano novo.
- **BaaS externo (Supabase/Firebase)** para auth+dados, mantendo o front estático —
  rejeitado: adiciona dependência de serviço terceiro com custo potencial; preferência
  explícita por manter tudo dentro do Hostinger (PHP "não é um problema").
- **Manter o site 100% sem build** — rejeitado: não resolve o problema de
  manutenibilidade que motivou a migração.
- **Deploy manual** (FTP/File Manager) — rejeitado em favor de CI/CD, por consistência
  e alinhamento com o objetivo de um fluxo de publicação profissional.
- **npm como gerenciador de pacotes** — cogitado inicialmente por não exigir setup
  extra no CI (já vem pré-instalado nos runners do GitHub Actions), mas rejeitado:
  pnpm é mais rápido, tem `node_modules` estrito e já é o padrão majoritário no
  workspace (SAGA, Peak Plan).
- **CI sem gate de qualidade** (só `astro build`, sem type-check/lint bloqueando) —
  rejeitado: contraria o objetivo de um pipeline profissional: um erro de tipo
  passaria despercebido direto pra produção.

## Consequences

- Passa a existir uma etapa de build: é preciso Node.js instalado localmente/no CI para
  gerar o `dist/` antes do deploy — o Hostinger em si continua sem rodar Node.
- O repositório ganha uma quarta branch temporária (`astro-migration`) até atingir
  paridade com o site atual e ser mergeada; quando isso ocorrer, `development` e
  `site-completo` devem ser reavaliados/aposentados para reduzir a confusão de branches
  já sinalizada no `CLAUDE.md`.
- `site-completo` permanece congelada — não recebe atualizações até o backend PHP ser
  implementado de fato.
- Credenciais de FTP/SFTP do Hostinger precisam ser cadastradas como secret no GitHub
  para o pipeline de deploy funcionar.
- O GitHub Actions não vem com pnpm pré-instalado (ao contrário do npm) — o workflow
  precisa de um passo extra pra habilitá-lo (`pnpm/action-setup` ou `corepack enable`).
