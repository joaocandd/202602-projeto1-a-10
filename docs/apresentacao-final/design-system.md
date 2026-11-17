# Design System: Bulbe Energia

Design system completo do app da Bulbe Energia. Cores e tipografia são os valores exatos dos estilos locais do Figma “Bulbe :: IBMEC”, lidos em 23/10/2026. Espaço e raios de canto foram medidos nas telas do app e estão marcados como aproximados. Use só os valores deste arquivo: não invente cores, fontes ou tamanhos.

---

## 1. Tema visual e atmosfera

A Bulbe é uma empresa de energia limpa de Minas Gerais. O cliente assina pelo app e passa a ter desconto na conta de luz, que continua chegando pela Cemig. O público são famílias de todas as idades, muitas pouco acostumadas com tecnologia.

- **Personalidade:** confiável, próxima, simples e otimista.
- **Aparência:** clara e limpa, com muito branco e respiro generoso. O azul-marinho é a cor de ação e de títulos. As cores do logo (verde, azul céu e laranja) aparecem só como detalhe.
- **Densidade:** média. Uma ideia por cartão e um botão principal por tela.
- **Profundidade:** cartões planos, com contorno fino ou sombra quase imperceptível.
- **Assinatura da marca:** “sua próxima energia”.

---

## 2. Cores

### 2.1 Cores principais da marca

No Figma, cada escala marca sua cor principal com ★.

| Nome | Token | Hex | Papel |
| --- | --- | --- | --- |
| Azul universo 700 ★ | `au-700` | #08068D | Cor principal: botões, títulos, links, cabeçalho da home |
| Azul céu 600 ★ | `ac-600` | #0762C7 | Traço azul do logo, início dos gradientes, links e ícones de destaque |
| Verde flora 500 ★ | `vf-500` | #26D07C | Traço verde do logo, destaques de economia, gráficos |
| Amarelo sol 500 ★ | `as-500` | #FF9E1B | Traço laranja do logo, destaques promocionais |
| Cinza 600 ★ | `c-600` | #536679 | Texto de apoio |
| Branco | `branco` | #FFFFFF | Fundo de cartões, campos e telas de fluxo |
| Preto | `preto` | #000000 | Evite em texto; prefira `c-800` |

### 2.2 Papéis semânticos

Os componentes usam estes nomes. Cada um aponta para um passo de escala.

| Token | Aponta para | Hex | Uso | Contraste |
| --- | --- | --- | --- | --- |
| `primary` | `au-700` | #08068D | Botões principais, títulos, links | 14,8:1 no branco |
| `primary-hover` | `au-800` | #060462 | Botão principal pressionado | 17,5:1 no branco |
| `primary-subtle` | `au-50` | #E7E7FE | Opção marcada, selo “em aberto” | `primary` por cima: 12,2:1 |
| `focus-ring` | `au-100` | #CFCEFD | Anel de foco de 4 px | decorativo |
| `secondary` | `ac-600` | #0762C7 | Links e ícones de destaque | 5,9:1 no branco |
| `surface` | `branco` | #FFFFFF | Cartões, campos, telas de fluxo | — |
| `surface-subtle` | `c-25` | #F6F9F9 | Fundo das telas com cartões | — |
| `text-strong` | `c-800` | #29333D | Valores e destaques | 12,8:1 no branco |
| `text` | `c-700` | #3E4D5B | Corpo de texto | 8,7:1 no branco |
| `text-muted` | `c-600` | #536679 | Apoio, legendas, placeholder | 5,9:1 no branco |
| `text-on-brand` | `branco` | #FFFFFF | Texto sobre `primary` e gradientes | 14,8:1 sobre `primary` |
| `border-control` | `c-500` | #678098 | Borda de campos e controles | 4,1:1 no branco |
| `border-subtle` | `c-100` | #D1D9E0 | Divisórias e contorno de cartões | decorativo |
| `success` | `s-700` | #027A48 | Texto de sucesso | 5,1:1 sobre `success-bg` |
| `success-bg` | `s-50` | #ECFDF3 | Fundo de sucesso, selo “paga” | — |
| `warning` | `a-700` | #B54708 | Texto de alerta | 5,2:1 sobre `warning-bg` |
| `warning-bg` | `a-50` | #FFFAEB | Fundo de alerta | — |
| `error` | `e-700` | #B42318 | Texto e borda de erro | 6,1:1 sobre `error-bg` |
| `error-bg` | `e-50` | #FEF3F2 | Fundo de erro, selo “em atraso” | — |
| `brand-green` | `vf-500` | #26D07C | Destaques e gráficos, nunca texto no branco | 2,0:1 no branco |
| `brand-orange` | `as-500` | #FF9E1B | Destaques e gráficos, nunca texto no branco | 2,1:1 no branco |

### 2.3 Escalas da marca

**Cinza** (neutros)

| Passo | Hex | Uso |
| --- | --- | --- |
| `c-25` | #F6F9F9 | Fundo suave das telas |
| `c-50` | #E1E6EA | Blocos inativos |
| `c-100` | #D1D9E0 | Divisórias |
| `c-200` | #C2CCD6 | Trilhos e esqueletos de carregamento |
| `c-300` | #A4B3C1 | Ícones desabilitados |
| `c-400` | #8699AC | Só decorativo (2,9:1) |
| `c-500` | #678098 | Borda de campos (4,1:1) |
| `c-600` ★ | #536679 | Texto de apoio (5,9:1) |
| `c-700` | #3E4D5B | Corpo de texto (8,7:1) |
| `c-800` | #29333D | Texto forte (12,8:1) |
| `c-900` | #151A1E | Máximo contraste |

**Azul universo**

| Passo | Hex | Uso |
| --- | --- | --- |
| `au-50` | #E7E7FE | Seleção e selos |
| `au-100` | #CFCEFD | Anel de foco |
| `au-200` | #9F9DFB | Ilustrações e gráficos |
| `au-300` | #6E6CF9 | Ilustrações e gráficos |
| `au-400` | #3E3BF7 | Ilustrações e gráficos |
| `au-500` | #0E0AF5 | Ilustrações e gráficos |
| `au-600` | #0B08C4 | Variação de destaque |
| `au-700` ★ | #08068D | Cor principal da marca |
| `au-800` | #060462 | Pressionado |
| `au-900` | #030231 | Fundos muito escuros |

**Azul céu**

| Passo | Hex | Uso |
| --- | --- | --- |
| `ac-50` | #E6F1FE | Fundos de informação |
| `ac-100` | #CEE4FD | — |
| `ac-200` | #9DC9FB | — |
| `ac-300` | #6BAEFA | — |
| `ac-400` | #3A93F8 | — |
| `ac-500` | #0978F6 | — |
| `ac-600` ★ | #0762C7 | Logo, gradientes, links (5,9:1) |
| `ac-700` | #054894 | Link sobre fundo claro (8,9:1) |
| `ac-800` | #043062 | — |
| `ac-900` | #021831 | — |

**Verde flora**

| Passo | Hex | Uso |
| --- | --- | --- |
| `vf-50` | #E9FBF2 | Fundo de destaque de economia |
| `vf-100` | #D4F7E6 | — |
| `vf-200` | #A9EFCC | — |
| `vf-300` | #7EE7B3 | — |
| `vf-400` | #53DF99 | — |
| `vf-500` ★ | #26D07C | Logo e destaques; nunca texto no branco |
| `vf-600` | #20AC66 | — |
| `vf-700` | #18814D | Texto verde no branco (4,9:1) |
| `vf-800` | #105633 | Texto verde sobre `vf-50` (8,1:1) |
| `vf-900` | #082B1A | Texto sobre `vf-500` (7,6:1) |

**Amarelo sol**

| Passo | Hex | Uso |
| --- | --- | --- |
| `as-50` | #FFF4E6 | Fundo de destaque promocional |
| `as-100` | #FFE9CC | — |
| `as-200` | #FFD399 | — |
| `as-300` | #FFC880 | — |
| `as-400` | #FFA733 | — |
| `as-500` ★ | #FF9E1B | Logo e destaques; nunca texto no branco |
| `as-600` | #CC7400 | — |
| `as-700` | #995700 | Texto laranja sobre `as-50` (5,2:1) |
| `as-800` | #663A00 | — |
| `as-900` | #331D00 | — |

### 2.4 Escalas de estado

| Passo | Alerta (`a-`) | Erro (`e-`) | Sucesso (`s-`) |
| --- | --- | --- | --- |
| 50 | #FFFAEB | #FEF3F2 | #ECFDF3 |
| 100 | #FEF0C7 | #FEE4E2 | #D1FADF |
| 200 | #FEDF89 | #FECDCA | #A6F4C5 |
| 300 | #FEC84B | #FDA29B | #6CE9A6 |
| 400 | #FDB022 | #F97066 | #32D583 |
| 500 ★ | #F79009 | #F04438 | #12B76A |
| 600 | #DC6803 | #D92D20 | #039855 |
| 700 | #B54708 | #B42318 | #027A48 |
| 800 | #93370D | #912018 | #05603A |
| 900 | #7A2E0E | #7A271A | #054F31 |

Em cada estado, o passo 50 é o fundo, o 500 é o ícone e o 700 é o texto.

### 2.5 Gradientes

| Token | Valor | Uso |
| --- | --- | --- |
| `g2` | `linear-gradient(90deg, #0762C7 0%, #08068D 100%)` | Splash, hero e capas, com texto e logo brancos (5,9:1 no ponto mais claro) |
| `g1` | `linear-gradient(90deg, #0762C7 0%, #26D07C 100%)` | “Gradiente Verde”: destaques de economia |

Não use outros gradientes.

### 2.6 Cores auxiliares

Só para ilustrações e gráficos, nunca para interface ou texto.

| Token | Hex |
| --- | --- |
| `m1` | #F4F3DE |
| `m2` | #E0DC6A |
| `m3` | #DF7145 |
| `m4` | #C4DFC9 |
| `m5` | #4F9358 |
| `m6` | #396439 |
| `m7` | #3B63A9 |
| `m8` | #2C2D7A |

### 2.7 Regras de contraste

- Texto: mínimo de 4,5:1. Texto grande (24 px ou mais), ícones e bordas de controle: mínimo de 3:1.
- **Reprovam como texto sobre branco:** `vf-500` (2,0:1), `as-500` (2,1:1), `a-500` (2,4:1), `s-500` (2,6:1), `e-500` (3,8:1) e todo cinza de `c-400` para baixo. Para texto, use o passo 700 da mesma escala.
- `c-400` (2,9:1) não serve como borda de campo: use `c-500`.
- Cor nunca sozinha: todo status também aparece escrito.

---

## 3. Tipografia

### 3.1 Família

**Poppins** (Google Fonts) em todo o app, nos pesos Regular 400, Medium 500, Semibold 600 e Bold 700, com itálicos. Pilha: `"Poppins", system-ui, -apple-system, "Segoe UI", Arial, sans-serif`.

### 3.2 Escala

Tamanho e altura de linha em px. Cada tamanho existe nos quatro pesos (no Figma: Regular ou Normal, Medium, Semibold e Bold).

| Estilo | Tamanho / linha | Observações do arquivo |
| --- | --- | --- |
| Display 2xl | 72 / 90 | — |
| Display xl | 60 / 72 | — |
| Display lg | 48 / 60 | — |
| Display md | 36 / 44 | — |
| Display sm | 30 / 38 | Também Medium itálico 30/44 |
| Display xs | 24 / 32 | Também Medium itálico 24/36 |
| Text xl | 20 / 30 | Também itálicos e Regular sublinhado |
| Text lg | 18 / 28 | Também itálicos |
| Text md | 16 / 24 | — |
| Text sm | 14 / 20 | — |
| Text xs | 12 / 18 | — |

Nomes dos tokens: `display-xs-semibold`, `text-md-regular` e assim por diante.

### 3.3 Uso no app mobile

| Elemento | Estilo | Cor |
| --- | --- | --- |
| Título de tela | Display xs Semibold (24/32) | `primary` |
| Título do hero | Display sm ou md Semibold | `text-on-brand` |
| Valor em destaque (ex.: valor da fatura) | Display sm ou md Semibold | `text-strong` ou `primary` |
| Subtítulo de seção | Text lg Semibold (18/28) | `text-strong` |
| Corpo | Text md Regular (16/24) | `text` |
| Label de campo | Text sm Medium (14/20) | `text` |
| Texto de apoio | Text sm Regular (14/20) | `text-muted` |
| Botão | Text md Semibold (16/24) | conforme o botão |
| Legendas e selos | Text xs Regular ou Medium (12/18) | conforme o selo |

### 3.4 Regras de texto

- Só a primeira letra maiúscula em títulos e botões.
- Valores em reais com vírgula (R$ 252,06) e datas como 25/10/2026.
- Nada abaixo de 12 px.

---

## 4. Espaço, forma e elevação

### 4.1 Grade e espaço

Frames mobile de 360 × 812 px e grade de 8 px. O arquivo não tem variáveis de espaço; os valores abaixo foram medidos nos frames (padding 8 e 16) e completados pela grade.

| Token | Valor | Uso |
| --- | --- | --- |
| `space-1` | 4 px | Entre ícone e texto |
| `space-2` | 8 px | Dentro de grupos, padding lateral de cartões compactos |
| `space-4` | 16 px | Margem lateral das telas, padding de cartões, espaço entre cartões |
| `space-6` | 24 px | Espaço entre seções |

### 4.2 Raios de canto

Aproximados pelos prints das telas; confirmar no arquivo.

| Token | Valor | Uso |
| --- | --- | --- |
| `radius-sm` | 8 px | Botões e campos |
| `radius-md` | 12 px | Cartões, como o cartão de fatura |
| `radius-lg` | 24 px | Topo de painéis inferiores |
| `radius-full` | 9999 px | Selos e pílulas |

### 4.3 Elevação

O arquivo tem estilos de sombra (xs a 3xl), foco e desfoque de fundo, mas os valores não puderam ser lidos. Enquanto isso:

- Cartões: contorno `border-subtle` de 1 px ou sombra muito suave.
- Painéis inferiores e menus: a sombra mais suave que separe do fundo.
- Foco: anel de 4 px em `focus-ring`.
- Sem sombras pesadas.

### 4.4 Toque

Toda área tocável tem no mínimo 44 × 44 px.

---

## 5. Componentes

### 5.1 Botões

| Variante | Visual | Quando usar |
| --- | --- | --- |
| Principal | Fundo `primary`, texto `text-on-brand` em Text md Semibold, `radius-sm`, altura mínima de 44 px | A ação principal da tela; um por tela |
| Secundário | Fundo `surface`, contorno de 1,5 px `primary`, texto `primary` | Ação alternativa (ex.: “Quero economizar” na entrada) |
| Link | Texto `primary` ou `secondary` sublinhado, sem fundo | Ações leves, como “Ver detalhes” |
| Compartilhar | Como o secundário, com o ícone do WhatsApp à esquerda | Só para compartilhar ou indicar pelo WhatsApp |

Estados:

- **Pressionado:** fundo `primary-hover`.
- **Foco:** anel de 4 px `focus-ring`.
- **Carregando:** rótulo trocado por indicador; o botão mantém o tamanho.
- **Sempre ativo:** não use botão cinza desabilitado. Se faltar algo, o erro aparece no campo.

### 5.2 Campos de texto

- Label visível acima, em Text sm Medium e cor `text`. O placeholder nunca substitui a label.
- Fundo `surface`, borda de 1 px `border-control`, `radius-sm`, altura mínima de 44 px.
- Placeholder em `text-muted`.
- **Foco:** borda `primary` e anel de 4 px `focus-ring`.
- **Erro:** borda `error` e mensagem em `error` logo abaixo do campo, com ícone. Ex.: “Informe um e-mail válido.”
- Máscaras: CPF 000.000.000-00, telefone (00) 00000-0000.

### 5.3 Seleção

- **Checkbox de aceite:** sempre desmarcado por padrão, com o texto do aceite ao lado.
- **Cartões de opção (Sim/Não):** a opção não escolhida segue legível em `text`; a escolhida ganha borda `primary`, fundo `primary-subtle` e ícone de check.
- **Switch:** só para preferências que ligam ou desligam algo, nunca para escolha de formulário.

### 5.4 Cartões

- Fundo `surface` sobre `surface-subtle`, `radius-md`, padding `space-4`.
- Contorno `border-subtle` ou sombra muito suave.
- Nunca barra colorida na lateral.

### 5.5 Cartão de fatura

Mês (ex.: “Outubro/26”), vencimento (“Vence dia 25/10/26”), selo de status, “De R$ 281,93 por”, valor em destaque, “Desconto Bulbe: R$ 29,87”, botão principal “Pagar com PIX” e link “Ver detalhes”.

### 5.6 Selos de status

Pílula com `radius-full` e texto Text xs Medium.

| Status | Fundo | Texto |
| --- | --- | --- |
| em aberto | `primary-subtle` (#E7E7FE) | `primary` (#08068D) |
| paga | `success-bg` (#ECFDF3) | `success` (#027A48) |
| em atraso | `error-bg` (#FEF3F2) | `error` (#B42318) |
| PIX Automático | `primary-subtle` | `primary` |

### 5.7 Avisos

Bloco com fundo do estado, ícone e texto: `warning-bg`/`warning` para alerta, `error-bg`/`error` para erro, `success-bg`/`success` para confirmação. A mensagem diz o que aconteceu e o que fazer. Ex.: “Não conseguimos entregar sua fatura no WhatsApp”, com os botões “Reenviar fatura” e “Corrigir número”.

### 5.8 Cabeçalhos

- **Home:** fundo `primary`, com menu, logo branco, notificações e avatar. Logo abaixo, o seletor de instalação e a faixa do Indique e ganhe.
- **Fluxo:** fundo `surface`, voltar (seta ←) à esquerda, logo azul no centro e “Ajuda” à direita. Em fluxos com etapas, barra de progresso com o texto “Etapa X de 3”.

### 5.9 Barra inferior

Três abas com ícone e nome: Faturas, Consumo e Indicações. A aba ativa fica em `primary` e as outras em `text-muted`.

### 5.10 Painel inferior

Fundo `surface`, `radius-lg` no topo e alça de arraste. Usado no seletor de instalação e no agendamento.

### 5.11 Linha do tempo

Lista vertical de etapas com marcador, nome e data. Concluída: marcador `success` com check. Atual: marcador `primary`. Futura: marcador vazio com contorno `border-control`. O status sempre aparece escrito.

### 5.12 Chat do assistente

Mensagens do assistente à esquerda, em balão `surface`; mensagens do cliente à direita, em balão `primary` com texto branco. Atalhos em pílulas contornadas. O assistente se identifica como automático.

### 5.13 Ícones

Ícones de contorno, com traço de 1,5 a 2 px e cantos arredondados, em `primary` ou `text-muted`. Ícone sozinho sempre tem nome acessível. Nada de emojis.

---

## 6. Logo

O logo é a palavra “bulbe” em minúsculas arredondadas, com três traços à direita: verde (#26D07C), azul (#0762C7) e laranja (#FF9E1B).

- **Branco** sobre `primary` ou sobre o gradiente `g2`.
- **Azul** (#08068D) sobre fundos claros.
- Não redesenhe, não distorça e não recolora os traços.
- Respiro mínimo ao redor: a altura da letra “b”.
- Arquivos: `bulbe-logo-branco.png` e `bulbe-logo-azul.png` (413 × 131 px, fundo transparente).

---

## 7. Voz e conteúdo

- Português do Brasil, tratamento por “você”, frases curtas e diretas.
- Botões começam com verbo e dizem o que acontece: “Pagar com PIX”, “Reenviar fatura”, “Criar senha e entrar”.
- Sem jargão do setor elétrico: “sua conta de luz” em vez de “unidade consumidora”.
- Erros explicam o que houve e como resolver, sem culpar o cliente.
- Números concretos, sem promessas vagas.

---

## 8. Acessibilidade

- Contraste WCAG AA (seção 2.7).
- Área de toque de no mínimo 44 × 44 px.
- Label visível em todo campo.
- Status nunca indicado só pela cor.
- Ordem de foco segue a leitura da tela; foco sempre visível com `focus-ring`.
- Mensagens de erro anunciadas para leitores de tela.

---

## 9. Não fazer

- Gradientes além de `g1` e `g2`.
- Neon, efeito de vidro, sombras pesadas ou emojis.
- Cartões com barra colorida na lateral.
- Botão cinza desabilitado.
- Texto com as cores do logo sobre branco.
- Cores fora deste arquivo.

---

## 10. Tokens em CSS

Para usar direto no HTML/CSS da implementação:

```css
:root {
  /* Marca e neutros */
  --branco: #FFFFFF; --preto: #000000;
  --c-25: #F6F9F9; --c-50: #E1E6EA; --c-100: #D1D9E0; --c-200: #C2CCD6; --c-300: #A4B3C1;
  --c-400: #8699AC; --c-500: #678098; --c-600: #536679; --c-700: #3E4D5B; --c-800: #29333D; --c-900: #151A1E;
  --au-50: #E7E7FE; --au-100: #CFCEFD; --au-200: #9F9DFB; --au-300: #6E6CF9; --au-400: #3E3BF7;
  --au-500: #0E0AF5; --au-600: #0B08C4; --au-700: #08068D; --au-800: #060462; --au-900: #030231;
  --ac-50: #E6F1FE; --ac-100: #CEE4FD; --ac-200: #9DC9FB; --ac-300: #6BAEFA; --ac-400: #3A93F8;
  --ac-500: #0978F6; --ac-600: #0762C7; --ac-700: #054894; --ac-800: #043062; --ac-900: #021831;
  --vf-50: #E9FBF2; --vf-100: #D4F7E6; --vf-200: #A9EFCC; --vf-300: #7EE7B3; --vf-400: #53DF99;
  --vf-500: #26D07C; --vf-600: #20AC66; --vf-700: #18814D; --vf-800: #105633; --vf-900: #082B1A;
  --as-50: #FFF4E6; --as-100: #FFE9CC; --as-200: #FFD399; --as-300: #FFC880; --as-400: #FFA733;
  --as-500: #FF9E1B; --as-600: #CC7400; --as-700: #995700; --as-800: #663A00; --as-900: #331D00;

  /* Estados */
  --a-50: #FFFAEB; --a-100: #FEF0C7; --a-200: #FEDF89; --a-300: #FEC84B; --a-400: #FDB022;
  --a-500: #F79009; --a-600: #DC6803; --a-700: #B54708; --a-800: #93370D; --a-900: #7A2E0E;
  --e-50: #FEF3F2; --e-100: #FEE4E2; --e-200: #FECDCA; --e-300: #FDA29B; --e-400: #F97066;
  --e-500: #F04438; --e-600: #D92D20; --e-700: #B42318; --e-800: #912018; --e-900: #7A271A;
  --s-50: #ECFDF3; --s-100: #D1FADF; --s-200: #A6F4C5; --s-300: #6CE9A6; --s-400: #32D583;
  --s-500: #12B76A; --s-600: #039855; --s-700: #027A48; --s-800: #05603A; --s-900: #054F31;

  /* Auxiliares */
  --m1: #F4F3DE; --m2: #E0DC6A; --m3: #DF7145; --m4: #C4DFC9;
  --m5: #4F9358; --m6: #396439; --m7: #3B63A9; --m8: #2C2D7A;

  /* Papéis */
  --primary: var(--au-700); --primary-hover: var(--au-800); --primary-subtle: var(--au-50);
  --focus-ring: var(--au-100); --secondary: var(--ac-600);
  --surface: var(--branco); --surface-subtle: var(--c-25);
  --text-strong: var(--c-800); --text: var(--c-700); --text-muted: var(--c-600); --text-on-brand: var(--branco);
  --border-control: var(--c-500); --border-subtle: var(--c-100);
  --success: var(--s-700); --success-bg: var(--s-50);
  --warning: var(--a-700); --warning-bg: var(--a-50);
  --error: var(--e-700); --error-bg: var(--e-50);
  --brand-green: var(--vf-500); --brand-orange: var(--as-500);

  /* Gradientes */
  --g1: linear-gradient(90deg, #0762C7 0%, #26D07C 100%);
  --g2: linear-gradient(90deg, #0762C7 0%, #08068D 100%);

  /* Tipografia */
  --font-sans: "Poppins", system-ui, -apple-system, "Segoe UI", Arial, sans-serif;

  /* Espaço e raios (aproximados) */
  --space-1: 4px; --space-2: 8px; --space-4: 16px; --space-6: 24px;
  --radius-sm: 8px; --radius-md: 12px; --radius-lg: 24px; --radius-full: 9999px;
}
```

Fonte no HTML:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap" rel="stylesheet">
```

---

## 11. Origem e limites

- **Fonte:** estilos locais do Figma “Bulbe :: IBMEC” (Bulbe :: Base, Primárias, Informações, Auxiliares, Gradiente e Poppins), lidos em 23/10/2026 em modo de visualização.
- **Exato:** todas as cores, os gradientes e a escala tipográfica.
- **Aproximado:** espaço e raios de canto, medidos nas telas.
- **Não lido:** valores de sombra, foco e desfoque; componentes em código; logo em vetor (os PNG vieram de uma tela do app).
