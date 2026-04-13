# Documentação do Projeto - Site Maria Dinoir

**Última atualização**: 15 de março de 2026

## 📋 Estrutura do Projeto

### Arquivos HTML
1. **index.html** - Página principal do site
2. **login.html** - Página de login para pacientes
3. **cadastro.html** - Página de criação de nova conta
4. **recuperacao-senha.html** - Página para recuperação de senha
5. **agendar-consulta.html** - Página para agendamento de consultas
6. **area-paciente.html** - Área privada do paciente (após login)

### Recursos
- **style.css** - Folha de estilos principal
- **assets/** - Pasta com imagens (logo, ícones, fotos)

---

## 🎯 Padronizações Aplicadas

### 1. Estrutura HTML
**Todos os arquivos seguem este padrão:**
```html
<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <!-- Meta tags, título, estilos -->
    </head>
    <body class="[page-class]">
        <!-- Cabeçalho com logo, navegação e botões -->
        <header>
            <img src="./assets/logo.png" alt="Logo Maria Dinoir">
            <nav><!-- Links para navegação --></nav>
            <button><!-- Botões de ação --></button>
        </header>

        <!-- Conteúdo principal da página -->
        <main>
            <!-- Seções e componentes --></main>

        <!-- Rodapé com informações de contato e links -->
        <footer class="footer"><!-- Informações do rodapé --></footer>
    </body>
</html>
```

### 2. Meta Tags Padrão
Todos os arquivos incluem:
- `<meta charset="UTF-8">`
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- `<meta name="description">`
- `<meta name="keywords">` (quando aplicável)

### 3. Nomenclatura
- ✅ **Terapeuta**: "Maria Dinoir" (consistente em todos os arquivos)
- ✅ **Idioma**: Português (pt-BR)
- ✅ **Nomes de classes CSS**: kebab-case (ex: `.patient-area`, `.login-form`)
- ✅ **IDs**: kebab-case (ex: `id="areas-atendimento"`)

### 4. Navegação
**Página Principal (index.html):**
- Logo da marca
- Menu de navegação: Início, Sobre, Áreas de Atendimento, Como Funciona, Relatos
- Botão "Entrar" (redireciona para login.html)
- Botão "Agendar Consulta" (redireciona para agendar-consulta.html)

**Página de Login (login.html):**
- Mantém a mesma navegação
- Botão "Entrar" → login.html
- Botão "Agendar Consulta" → agendar-consulta.html (sem autenticação)

**Página de Cadastro (cadastro.html):**
- Mantém a mesma navegação
- Botões de ação redirecionam corretamente

**Página de Recuperação de Senha (recuperacao-senha.html):**
- Mantém a mesma navegação
- Botões de ação redirecionam corretamente

**Página de Agendamento (agendar-consulta.html):**
- Menu de navegação completo
- Botão "Entrar" (redireciona para login.html)
- Botão "Criar Conta" (redireciona para cadastro.html)
- Botão "Confirmar Agendamento" → area-paciente.html (após selecionar horário)
Botão "Entrar" → login.html
├── Botão "Agendar Consulta" → agendar-consulta.html
│
├── login.html (Página de Login)
│   ├── Botão "Agendar Consulta" → agendar-consulta.html
│   ├── Link "Esqueci minha senha" → recuperacao-senha.html
│   ├── Link "Criar Nova Conta" → cadastro.html
│   └── Após autenticação → area-paciente.html
│
├── cadastro.html (Nova Conta)
│   ├── Botão "Agendar Consulta" → agendar-consulta.html
│   └── Link "Fazer Login" → login.html
│
├── recuperacao-senha.html (Recuperação de Senha)
│   ├── Botão "Agendar Consulta" → agendar-consulta.html
│   └── Link "Criar Conta" → cadastro.html
│
├── agendar-consulta.html (Agendamento)
│   ├── Botão "Entrar" → login.html
│   ├── Botão "Criar Conta" → cadastro.html
│   ├── Link "← Voltar para Home" → index.html
│   └── Botão "Confirmar Agendamento" → area-paciente.html
│
└── area-paciente.html (Área do Paciente)
    ├── Menu com links para index.html
    ├── Botão "Sair" → login.html
    └── Botão "Agendar Consulta" → agendar-consulta
**Todas as páginas incluem footer.html com:**
- Coluna 1: Informações sobre Maria Dinoir
- Coluna 2: Contatos (email e telefone)
- Coluna 3: Links úteis (Política de Privacidade, Termos de Uso, etc)
- Seção inferior: - Criar Conta**: 
   - index.html → login.html → cadastro.html (criar conta)
   
2. **Usuário existente - Fazer Login**:
   - index.html → login.html (fazer login) → area-paciente.html
   
3. **Recuperação de Senha**:
   - login.html → recuperacao-senha.html → email com link

4. **Agendar Consulta**:
   - Usuário não autenticado: index.html → agendar-consulta.html → login.html
   - Usuário autenticado: area-paciente.html → agendar-consulta.html → area-paciente.html
├── Cadastro.html (Nova Conta)
│   └── Fazer Login → login.html
├── Recuperação de Senha
│   └── Criar Conta → cadastro.html
└── Login (após autenticação) → area-paciente.html
```

---

## 🔐 Fluxo de Autenticação

1. **Usuário novo**: 
   - index.html → login.html → cadastro.html (criar conta)
   
2. **Usuário existente**:
   - index.html → login.html (fazer login) → area-paciente.html
   
3. **Recuperação de Senha**:
   - login.html → recuperacao-senha.html (enviar email)

---

## 📝 Comentários HTML

Todos os arquivos possuem comentários em português explicando:
- Sections principais
- Grupos de elementos
- Componentes importantes
- Scripts especiais

Exemplo:
```html
<!-- Cabeçalho com logo e navegação -->
<header>
    <!-- Logo da marca -->
    <img src="./assets/logo.png" alt="Logo">
    
    <!-- Menu de navegação principal -->
    <nav><!-- ... --></nav>
</header>
```

---

## 🎨 Convenções de Style

### Classes CSS
- **Componentes**: `.card`, `.button`, `.form-group`, `.stat-card`
- **Layouts**: `.container`, `.section-header`, `.stats-container`
- **Estados**: `.active`, `.primary`, `.disabled`
- **Páginas**: `.login-page`, `.signup-page`, `.patient-area-page`

### IDs
- **Seções**: `id="inicio"`, `id="sobre"`, `id="areas-atendimento"`
- **Elementos únicos**: `id="loginForm"`, `id="signupForm"`

---

## 🔧 Correções Aplicadas (Março 2026)

### Problema Identificado: Ícones SVG Oversized
Os ícones SVG dentro dos campos de entrada (inputs) em **login.html**, **cadastro.html** e **recuperacao-senha.html** estavam aparecendo com tamanho exagerado (19px em vez de 14px) e com cor não adequada.

**Causa:** Conflito de definições CSS para `.input-icon` resultando em:
1. Múltiplas definições conflitantes de `.input-icon` no style.css
2. Aplicação incorreta de dimensões aos elementos SVG
3. Seletores CSS não-específicos (`.input-icon svg`) que não correspondiam à estrutura HTML real

### Solução Implementada

#### Correções no CSS (style.css):

**1. Consolidação de definições `.input-icon`:**
- Removidas definições duplicadas e conflitantes
- Unificada definição única para `.input-icon` com todas as propriedades necessárias

**2. Dimensionamento correto:**
| Breakpoint | Viewport | Tamanho |
|-----------|----------|---------|
| Desktop | > 768px | 0.875rem (~14px) |
| Tablet | ≤ 768px | 0.7rem (~11px) |
| Mobile | ≤ 480px | 0.6rem (~10px) |

**3. Propriedades CSS aplicadas:**
```css
.input-icon {
    width: 0.875rem;          /* Desktop: 14px */
    height: 0.875rem;         /* Desktop: 14px */
    stroke: #14a1a6;          /* Cor teal primária */
    color: #14a1a6;           /* Cor teal primária */
    stroke-width: 1.5;        /* Espessura do traço */
    min-width: 12px;          /* Mínimo para readabilidade */
    margin-right: 0.8rem;     /* Espaçamento do input */
    flex-shrink: 0;           /* Evita compressão */
    display: flex;            /* Layout flexível */
    align-items: center;      /* Centralização vertical */
    justify-content: center;  /* Centralização horizontal */
}
```

**4. Media Queries habilitadas:**
- Tablet (768px): Ícones reduzidos para 0.7rem mantendo proporção
- Mobile (480px): Ícones compactados para 0.6rem otimizado para telas pequenas

#### Arquivos HTML - Estrutura Preservada:
Os arquivos HTML mantiveram a estrutura original:
```html
<div class="input-field">
    <svg class="input-icon" viewBox="0 0 24 24" ...>
        <!-- Paths SVG -->
    </svg>
    <input type="email" placeholder="...">
</div>
```

**Páginas afetadas:**
- ✅ login.html (2 ícones: email, senha)
- ✅ cadastro.html (5 ícones: nome, email, telefone, data, senha x2)
- ✅ recuperacao-senha.html (1 ícone: email)

### Resultado Esperado

✅ **Ícones agora aparecem com tamanho correto** (14px em desktop)
✅ **Cor teal (#14a1a6) renderizada corretamente** em todos os tamanhos
✅ **Responsividade mantida** com scaling proporcional para tablet/mobile
✅ **Alinhamento visual** preservado com campos de entrada
✅ **Sem conflitos CSS** com definições unificadas e limpas

---

## 📱 Responsividade

Todos os arquivos incluem:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

CSS responsivo deve ser implementado em `style.css` para:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (até 767px)

---

## ✅ Checklist de Conformidade

- [x] Todos os arquivos em português
- [x] Meta tags consistentes
- [x] Estrutura HTML semântica
- [x] Header, main, footer em todas as páginas
- [x] Navegação consistente
- [x] Footer padronizado
- [x] Títulos informativos
- [x] Comentários HTML explicativos
- [x] Links funcionais dentro da navegação
- [x] Botões com ações definidas
- [x] Responsividade (viewport meta tag)

---

## 🔗 Links Importantes

- **Email**: Maria@Terapeuta.com.br
- **Telefone**: (55) 9703-9336
- **WhatsApp**: (55) 9703-9336
- **Profissional**: Maria Dinoir – Terapeuta

---

**Última atualização**: 12 de março de 2026 (Adição página agendar-consulta.html e atualização de rotas de navegação)
