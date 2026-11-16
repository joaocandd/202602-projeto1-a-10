# Conteúdo do site · Apresentação final para a Bulbe Energia

Squad 10 · Turma A · Ibmec BH · Projeto em Ciência de Dados I e Design Gráfico e UX · 2º semestre de 2026

Este arquivo reúne tudo o que o squad fez até 11/11/2026 e é a única fonte de texto e números do site. Não invente dados, depoimentos, métricas de resultado nem logos de parceiros. Os valores das telas (R$ 255, R$ 252,06 etc.) são fictícios e devem ser apresentados como ilustrativos.

Outras fontes nesta pasta:
- `prompts-ia.md`: os prompts completos de IA de cada user story.
- `design-system.md`: cores, tipografia e componentes da Bulbe, lidos do Figma oficial.
- `Bulbe_Squad10_Design_UX.pdf`: os 24 slides da entrega de Design (pode virar um link "Baixar os slides").

Imagens prontas em `assets/img/apresentacao/` (lista no fim deste arquivo). As telas do app estão em `pages/` e devem aparecer funcionando, não como print.

---

## 1. Mensagem principal

**Da dor do cliente ao app da Bulbe.** Cinco dores medidas viraram cinco user stories, 31 telas em HTML e CSS e um app único, navegável a partir da tela inicial.

Números do processo:
- 36 oportunidades levantadas nos mapas de jornada (brainstorming)
- 17 notas no SCAMPER sobre o app atual da Bulbe
- 4 Crazy 8's desenhados à mão
- 31 telas finais em HTML e CSS
- 12 pull requests em duas semanas, de 23/10 a 05/11/2026

## 2. Equipe

| Integrante | User story | Telas |
| --- | --- | --- |
| Samuel Pascini | US01 · Prévia da 1ª fatura | 7 |
| André Coelho | US02 · Correção do canal de contato | 2 telas, com 4 estados |
| João Victor Cândido Lopes Silva | US03 · Reenvio da fatura pelo Assistente Bulbe | 5 |
| Miguel Fernando Rocha | US04 · Mudança de endereço | 9 |
| MariB | US05 · Confirmação de pagamento e comprovante | 8, 3 delas estados de demonstração |

## 3. Problema mapeado

A Bulbe dá desconto na conta de luz com energia solar, mas a comunicação de fatura e pagamento falha nos primeiros meses, e o cliente desiste ou deixa de pagar.

| Dor | Dado | Fonte | User story |
| --- | --- | --- | --- |
| A 1ª fatura não é reconhecida e parece golpe | 32,4% de inadimplência na 1ª fatura, de set/2025 a jul/2026 | Dado da Bulbe | US01 |
| As mensagens vão para o número errado | ~20% das mensagens de WhatsApp não chegam ao destino | Dado da Bulbe | US02 |
| A fatura não chega e o suporte demora | 8 dias e 16 horas de tempo médio de resposta do suporte | Reclame Aqui | US03 |
| Quem muda de casa cancela o serviço | A mudança de endereço é a 3ª maior causa de churn | Dado da Bulbe | US04 |
| O cliente paga e não sabe se o pagamento entrou | Até 3 dias úteis de compensação sem saber se o pagamento entrou | Reclamação de 11/09/2026 no Reclame Aqui | US05 |

## 4. Personas

Nome e idade são ilustrativos; as dores vêm de reclamações públicas e de dados da Bulbe. Detalhes completos em `docs/personas/` e os mapas de jornada em `docs/wireframes/jornada1.md` a `jornada5.md`.

| Persona | Quem é | O que precisa | User story |
| --- | --- | --- | --- |
| Marlene Aparecida, 58 | Costureira em Contagem, paga cerca de R$ 250 de luz por mês | Entender a 1ª cobrança antes de pagar | US01 |
| Rogério Alves, 52 | Motorista de aplicativo em BH, dois chips e WhatsApp em só um | Receber a fatura no número certo e pagar por PIX entre corridas | US02 e US03 |
| Lucas Mendes, 31 | Analista de suporte em BH, vai entregar o apartamento alugado | Resolver a mudança sozinho, sem fila no WhatsApp | US04 |
| Ricardo Nogueira, 45 | Ex-cliente cobrado quase três anos depois de cancelar | Provar o que pagou e saber o que ainda deve | US05 |
| Tatiane Ferreira, 37 | Diarista em Betim, controla os gastos pelo celular | Saber quanto pagar, qual desconto recebeu e se o valor foi repassado | Pesquisa base (34 reclamações de 2026) |

## 5. As cinco user stories e as telas

Cada US tem: a frase da user story, o dado da dor, a persona, o fluxo, por onde se entra e a prova que o cliente leva no fim. O "arquivo inicial" é a tela que deve abrir no celular de demonstração do site.

### US01 · Prévia da 1ª fatura · Samuel Pascini
- **User story:** Como cliente prestes a pagar o primeiro mês, quero uma explicação prévia e didática dos valores, para reconhecer a cobrança como legítima e não cancelar o serviço.
- **Dado:** 32,4% de inadimplência na 1ª fatura (set/2025 a jul/2026, dado da Bulbe).
- **Persona:** Marlene, 58, quer entender o produto antes da primeira cobrança.
- **Fluxo:** aviso na tela inicial → Notificação → Antes x agora → Fatura unificada → Sua economia → Pagamento (e Ajuda).
- **Entrada:** aviso "Entender agora" e sino da tela inicial; aba Consumo abre Sua economia.
- **Prova no fim:** fatura explicada e pronta para pagar por PIX.
- **Arquivo inicial:** `pages/Wireframe%2001/index.html` (a pasta tem espaço no nome). Telas em `pages/Wireframe 01/pages/`: notificacao, comparacao, fatura-unificada, economia, pagamento, ajuda.
- **Regra central da US:** a Bulbe apresenta uma fatura unificada (R$ 300 sem Bulbe → R$ 255 com Bulbe, economia de R$ 45 ou 15%, valores ilustrativos), nunca duas faturas.

### US02 · Correção do canal de contato · André Coelho
- **User story:** Como usuário, quero corrigir meu canal de contato (telefone/WhatsApp ou e-mail) quando necessário, para que as comunicações e faturas cheguem no meu dispositivo atual.
- **Dado:** ~20% das mensagens de WhatsApp da Bulbe não chegam ao destino.
- **Persona:** Rogério, 52, cadastrou um número que não tem WhatsApp.
- **Fluxo:** foto de perfil → Dados de contato → Corrigir número → Código de 6 dígitos → número confirmado.
- **Entrada:** foto de perfil (avatar) no cabeçalho da tela inicial.
- **Prova no fim:** número confirmado por código.
- **Arquivo inicial:** `pages/Wireframe02/contato.html`. Estados por endereço: `contato.html?editar=1`, `confirmar-numero.html?tel=31987654321`, `contato.html?confirmado=1&tel=31987654321`. O código de teste fictício aparece na própria tela.

### US03 · Reenvio da fatura pelo Assistente Bulbe · João Victor
- **User story:** Como usuário, quero pedir o reenvio da fatura de forma automatizada, para recuperar o recebimento sem abrir um chamado genérico nem esperar atendimento sem previsão. (Ajustada na Sprint II: saiu o agendamento de ligação, porque exigiria uma equipe de atendentes.)
- **Dado:** 8 dias e 16 horas de tempo médio de resposta do suporte no Reclame Aqui.
- **Persona:** Rogério, 52, a fatura não chega e ele não pode ficar parado esperando.
- **Fluxo:** botão Ajuda → Assistente Bulbe → Reenviar fatura (WhatsApp, e-mail ou PDF) → Fatura enviada com código PIX e protocolo → Meus atendimentos.
- **Entrada:** botão flutuante Ajuda, link "Não recebi minha fatura" e "Fale conosco" no menu lateral.
- **Prova no fim:** fatura enviada, com protocolo 20261021-0042 e código PIX.
- **Arquivo inicial:** `pages/Wireframe03/us03-assistente.html` (há também `us03-faturas.html`, versão da tela Faturas da US03).

### US04 · Mudança de endereço · Miguel Fernando Rocha
- **User story:** Como cliente que está mudando de endereço, quero verificar se posso continuar com o serviço na nova casa e transferir de forma simples, para não precisar cancelar.
- **Dado:** a mudança de endereço é a 3ª maior causa de churn da Bulbe.
- **Persona:** Lucas, 31, está de mudança e hoje só consegue cancelar pelo WhatsApp.
- **Fluxo:** Vai se mudar? → CEP do novo endereço → Verificando disponibilidade → cenário A, endereço atendido: confirmar e transferir → transferência solicitada; cenário B, não atendido: lista de interesse e motivo da desistência.
- **Entrada:** "Mudança de endereço" no menu lateral.
- **Prova no fim:** transferência solicitada, com protocolo.
- **Arquivo inicial:** `pages/Wireframe04/index.html`. Telas: 1-mudanca-de-endereco, 2-informar-endereco, 3-verificando-disponibilidade, 4a-continuidade-disponivel, 4b-indisponibilidade, 5a-confirmar-transferencia, 5b-motivo-da-desistencia, 6a-solicitacao-realizada.

### US05 · Confirmação de pagamento e comprovante · MariB
- **User story:** Como cliente que acabou de pagar a fatura, quero verificar se o pagamento foi reconhecido e consultar o comprovante, para ter segurança de que não existe dívida pendente. (Redefinida na Sprint II.)
- **Dado:** até 3 dias úteis de compensação em que o cliente fica sem saber se o pagamento entrou.
- **Origem:** reclamação de 11/09/2026 no Reclame Aqui, cobranças mesmo após boletos pagos.
- **Fluxo:** menu lateral → Meus pagamentos → Detalhe (aguardando, pago ou em atraso) → Comprovante.
- **Entrada:** "Meus pagamentos" no menu lateral.
- **Prova no fim:** comprovante do pagamento.
- **Arquivo inicial:** `pages/pagamentos.html`. Estados de demonstração: `pagamentos-carregando.html`, `pagamentos-vazio.html`, `pagamentos-em-dia.html` (fora da navegação do app, mas podem ser mostrados no site como estados).

### O app completo
- Porta de entrada: `pages/index.html`, que abre a tela inicial `pages/Wireframe%2001/index.html`.
- `pages/menu.html`, `pages/exemplo.html`, `pages/templates/*.html` e `pages/Wireframe 01/visao-geral.html` não são telas do app.

## 6. Raciocínio da criação das telas

Cada tela entra onde o cliente já toca e termina com uma prova do que foi resolvido.

1. **Começar pela dor, não pela tela.** Cada fluxo responde ao momento da jornada em que a persona desiste.
2. **Entrar pelo que o cliente já conhece.** Fatura, foto de perfil, menu lateral ou botão Ajuda; nada de menu novo.
3. **Uma decisão por tela.** Telas curtas, um botão principal e o status sempre escrito.
4. **Terminar com uma prova.** Protocolo, código confirmado, transferência solicitada ou comprovante.

## 7. Ideação

### Brainstorming: 36 oportunidades nos mapas de jornada, 5 viraram user stories

| Jornada | Oportunidades | Exemplos que não seguiram | Escolhida | Virou |
| --- | --- | --- | --- | --- |
| Marlene | 7 | Simulador com o total das duas contas; guia de boas-vindas no WhatsApp | Prévia da primeira conta Bulbe, enviada antes da emissão | US01 |
| Rogério | 7 | Calendário com a data prevista da fatura; aviso de atraso na emissão | Confirmar o contato com um código; autoatendimento "Minha fatura não chegou" | US02 e US03 |
| Lucas | 7 | Rastreador da desvinculação na distribuidora; extrato do saldo residual | Central de contrato com transferência para o novo endereço | US04 |
| Ricardo | 7 | Declaração final de encerramento; memória de cálculo de cada cobrança | Histórico de faturas, pagamentos e protocolos | US05 |
| Tatiane | 8 | Simulação com o desconto real; cancelamento com protocolo | Painel de fatura única com o status do pagamento (reforçou) | US01 e US05 |

### SCAMPER: 17 notas sobre o app atual da Bulbe (foto `scamper.jpg`)
- **Substituir:** telas de contrato e de acompanhamento por textos claros sobre como o serviço funciona.
- **Adaptar:** deixar a espera pela conexão mais visual, com widgets, temporizador e notificações como no Duolingo.
- **Modificar:** juntar "Primeiro acesso" e "Quero economizar", que levam ao mesmo lugar, e destacar a segurança.
- **Eliminar:** "Baixe o novo app", os grandes parceiros e o Indique e ganhe antes da 1ª conta paga.
- **Reorganizar:** abrir o app explicando como o serviço funciona e fazer todo o processo dentro dele.
- **Destaque:** a nota "Assistente de IA embutido no app" deu origem ao chatbot da US03.

### Crazy 8's (fotos dos esboços)
| Integrante | US | O que desenhou | O que gerou |
| --- | --- | --- | --- |
| Samuel Pascini | US01 | Oito jeitos de mostrar a economia: dias até a 1ª fatura, gráfico mês a mês e Cemig x Bulbe | A ideia do histórico de economia (tela Sua economia) |
| André Coelho | US01 | Calculadora de economia, progresso até a 1ª fatura e o comparativo "com a Bulbe x só com a Cemig" | Apoiou as telas da US01, como o Antes x agora |
| João Victor | US03 | Cartão de desconto, Cemig x Bulbe e um balão com "Reenvie sua fatura" e "Outro assunto" | Feito antes de fechar a US; o balão virou os atalhos do Assistente Bulbe |
| Miguel Fernando Rocha | US04 | Linha de etapas, progresso circular e contagem de dias até começar a economizar | O progresso circular virou a tela "Verificando disponibilidade" |

### Definição das melhores telas
Critérios: ataca a desistência medida; resolve sem atendente; segue o app da Bulbe (parece uma função nativa); termina com uma prova.

| US | Tela escolhida | Por que venceu | O que ficou de fora |
| --- | --- | --- | --- |
| US01 | Prévia com "antes x agora" e fatura unificada | Explica a cobrança antes de ela chegar | "Seu total vem em duas faturas", da 1ª versão |
| US02 | Central de dados de contato, com código | Mostra o status de cada canal e confirma o número | As outras 4 das 5 alternativas exploradas (A a E) |
| US03 | Assistente que reenvia a fatura na hora | Resolve sem fila e já entrega o código PIX | Agendamento de ligação: exigiria uma equipe de atendentes |
| US04 | Verificação por CEP e transferência | Troca o cancelamento pela transferência | Cabeçalho próprio e cartões coloridos da 1ª versão |
| US05 | Meus pagamentos com status e comprovante | Prova o pagamento sem perguntar ao suporte | Status só por cor: cada estado vem escrito |

## 8. Como usamos IA

Os prompts que funcionaram traziam contexto, regras da marca e o que a IA não podia fazer. Textos completos em `prompts-ia.md`.

| US | O que o prompt pedia | Resultado |
| --- | --- | --- |
| US01 | Storyboard de 6 telas de 390×844, sem landing page, com a regra central da fatura unificada e o exemplo R$ 300 → R$ 255 | As 6 telas do fluxo; a regra corrigiu a 1ª versão, que falava em duas faturas |
| US02 | Como product designer sênior, 5 alternativas independentes (A a E) para a mesma US, com validação, privacidade e acessibilidade | Cinco abordagens comparadas; venceu a central de dados de contato |
| US03 | Cinco prompts em sequência no Google Stitch | 5 telas na identidade oficial, sem o agendamento de ligação |
| US04 | Fluxo completo com cenário A (atendido) e B (não atendido), azul #08068D e reaproveitamento dos dados já cadastrados | 8 telas, depois adaptadas ao template do squad |
| US05 | Sem prompt registrado | — |

Na integração, o Claude Code ligou as telas dos cinco integrantes numa branch separada (PR #46).

Lição: hex, px e imagens de referência funcionam; "deixe parecido com a Bulbe" não.

## 9. Evolução das telas

### Linha do tempo
| Data | O que aconteceu | Quem |
| --- | --- | --- |
| 23/10 | Wireframe da US04 | Miguel · PR #29 |
| 26/10 | Wireframe da US02 revisado | André · PR #30 |
| 29/10 | Templates do app: template 1 e 2 | Miguel · PRs #32 e #39 |
| 02/11 | Telas da US05 em código | MariB · PR #31 |
| 03/11 | Telas da US02, US03 e US04 em código | PRs #40, #43 e #44 |
| 04/11 | Telas da US01 em código | Samuel · PR #45 |
| 05/11 | Navegação integrada na main | João Victor · PR #46 |

### Antes e depois
- **US01** (`us01-primeira-versao.png` → telas `comparacao.html` e `fatura-unificada.html`):
  - Tipografia: valor em destaque (R$ 255,00) e um rótulo curto em caixa alta acima de cada título.
  - Cor: sai o topo em degradê; entra o cabeçalho branco com a faixa azul da unidade consumidora. Verde só na economia.
  - Imagens: o gráfico de rosca decorativo virou barras simples, sem Bulbe x com Bulbe.
  - Organização: um simulador longo virou telas em sequência; "duas faturas" virou "uma cobrança, tudo explicado".
- **US03** (`us03-rascunho-stitch.jpg` → `us03-final-stitch.jpg` → telas em HTML): o rascunho tinha 7 telas, azul #1A0D87, logo quebrado (texto no lugar da imagem), selos em pílula e agendamento de ligação; a versão final tem 5 telas com o cabeçalho, os cartões e os selos do app oficial.
- **US04** (`us04-primeira-versao-tela1.png` e `us04-primeira-versao-fluxo.jpg` → telas `1-mudanca-de-endereco.html` e `3-verificando-disponibilidade.html`):
  - Tipografia: títulos e textos no mesmo tamanho e peso dos outros fluxos.
  - Cor: sai o cabeçalho "Solicitar Serviço" com sino e foto; entra o branco do template, com voltar e logo.
  - Imagens: a ilustração genérica de casa virou uma foto, com o selo de desconto e a instalação atual.
  - Organização: indicador "Passo 1 de 3" no topo e benefícios agrupados num cartão só.

### Tipografia (Poppins)
| Uso | Tamanho e peso |
| --- | --- |
| Valor da fatura | 40 px |
| Título da tela | 24 px Semibold |
| Mês da fatura e título de detalhe | 20 px Semibold |
| Texto e botões | 16 px; botões em Semibold |
| Apoio, datas e selos | 14 px |
| Abas e legendas | 12 px |

### Cor: antes (rascunho da IA) e depois (app)
| Papel | Antes | Depois |
| --- | --- | --- |
| Principal: cabeçalho, botões, títulos, valores | #1A0D87 | #08068D |
| Texto | #2B3240 | #3E4D5B |
| Apoio | #5B6472 | #536679 |
| Fundo | #F4F5FB | Branco, com faixas em #F6F9F9 |
| Sucesso | #1E8A50 sobre #E9F8F0 | #18814D sobre #E9FBF2 |

O verde #26D07C e o laranja #FF9E1B do logo ficam só em detalhes: no logo, na marca do cartão e na borda do seletor de instalação. Nunca em texto.

### Imagens e organização
- Logo oficial em arquivo, nunca redesenhado: branco no cabeçalho azul e azul no fundo branco. O rascunho da IA trocava o logo por texto.
- Ícones de contorno em SVG, os mesmos dos templates.
- Foto só onde ajuda a decidir, como a casa da US04. Nada de emoji nem ilustração genérica.
- Formato de app de celular: coluna de 430 px, centralizada; no celular, a tela ocupa tudo.
- Dois templates (template 1 na tela inicial, template 2 nas internas) e um `pages/templates/app.css` comum a todas as telas.

## 10. Arquitetura da informação

Da tela inicial, o cliente chega a todos os fluxos em até dois toques.

| Onde o cliente toca | Abre | US | Toques |
| --- | --- | --- | --- |
| Foto de perfil | Dados de contato | US02 | 1 |
| Botão Ajuda | Assistente Bulbe | US03 | 1 |
| Não recebi minha fatura | Assistente Bulbe | US03 | 1 |
| Sino e aviso da fatura | Notificação | US01 | 1 |
| Aba Consumo | Sua economia | US01 | 1 |
| Menu lateral › Meus pagamentos | Meus pagamentos | US05 | 2 |
| Menu lateral › Mudança de endereço | Vai se mudar? | US04 | 2 |
| Menu lateral › Fale conosco | Assistente Bulbe | US03 | 2 |
| Menu lateral › Perguntas frequentes | Ajuda | US01 | 2 |

Links entre fluxos: o "Fale conosco" da US04 e da US05 abre o Assistente da US03, e "Dúvidas frequentes" da US03 abre a Ajuda da US01. Itens sem tela (Como funciona?, Indique e ganhe, Termos, aba Indicações) ficam com `href="#"`.

## 11. Acessibilidade (WCAG 2.1 AA)

O texto principal passa com folga: azul #08068D (14,78:1), texto #3E4D5B (8,69:1) e apoio #536679 (5,92:1). Oito elementos ficaram abaixo do mínimo AA de 4,5:1; a correção usa cores que o app já tem. O status vem sempre escrito, nunca só pela cor.

| Elemento | Onde | Antes | Contraste | Depois | Contraste | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Rótulo das abas inativas | Template, todas | #C2CCD6 sobre branco | 1,63:1 | #536679 | 5,92:1 | A fazer |
| Selo "endereço localizado" | US04 | #26D07C sobre #EFECF7 | 1,73:1 | #18814D sobre #E9FBF2 | 4,56:1 | A fazer |
| Selo da etapa atual | US04 | #FF9E1B sobre laranja a 15% | 1,85:1 | #B54708 sobre #FFFAEB | 5,20:1 | A fazer |
| Selo "confirmado" | US04 | #00A45E sobre #F5F2FC | 2,93:1 | #18814D sobre #E9FBF2 | 4,56:1 | A fazer |
| Selo "em revisão" | US02 | #B97822 sobre #FFF2DF | 3,29:1 | #B54708 sobre #FFFAEB | 5,20:1 | A fazer |
| Selo "confirmado" | US02 | #3B9075 sobre #E5F6EF | 3,45:1 | #18814D sobre #E9FBF2 | 4,56:1 | A fazer |
| Erro do campo e do código | US02 | #D9534F sobre branco | 3,96:1 | #B42318 | 6,57:1 | A fazer |
| Etiquetas de economia (9 e 10 px) | US01 | #128858 sobre branco | 4,48:1 | #027A48 e mínimo de 12 px | 5,41:1 | A fazer |
| Selo "paga" e "concluído" | US03 | #1E8A50 sobre #E9F8F0 | 3,98:1 | #18814D sobre #E9FBF2 | 4,56:1 | Feito |

Medição pela fórmula de contraste da WCAG 2.1 sobre o CSS do repositório, em 09/11/2026.

## 12. Conclusão e próximos passos

O que concluímos:
1. **Partir da dor medida manteve cada fluxo curto.** Cada US ataca um número: 32,4%, ~20%, 8 dias e 16 h, a 3ª causa de churn.
2. **A IA acelera, mas a marca vem de regras exatas.** Os prompts que deram certo traziam hex, tamanhos, imagens de referência e o que evitar.
3. **Um padrão comum juntou cinco trabalhos num app.** Templates, app.css e navegação integrada ligam todas as telas à tela inicial.

Próximas sprints:
- Aplicar as 8 correções de contraste da tabela de WCAG.
- Usar no mínimo 12 px em todo texto; a US01 ainda tem 9 e 10 px.
- Testar o app com usuários de fora do grupo.
- Ligar as telas aos dados fictícios em JSON (`data/`).
- Criar as telas Como funciona?, Indique e ganhe e Termos.
- Registrar no Figma os prompts e versões de todas as US.

## 13. Imagens em `assets/img/apresentacao/`

| Arquivo | O que mostra | Texto alternativo sugerido |
| --- | --- | --- |
| `crazy8-samuel.jpg` | Folha de Crazy 8's do Samuel (US01), 8 esboços sobre economia | Crazy 8's do Samuel com oito esboços de telas de economia |
| `crazy8-andre.jpg` | Crazy 8's do André (US01): calculadora, progresso, comparativo | Crazy 8's do André com esboços de calculadora e comparativo de economia |
| `crazy8-joao.jpg` | Crazy 8's do João (US03): desconto, Cemig x Bulbe, balão do chat | Crazy 8's do João com o balão "Reenvie sua fatura" |
| `crazy8-miguel.jpg` | Crazy 8's do Miguel (US04): etapas, progresso circular, contagem | Crazy 8's do Miguel com progresso circular e contagem de dias |
| `scamper.jpg` | As 17 notas adesivas do SCAMPER | Notas adesivas do SCAMPER escritas à mão pelo grupo |
| `us01-primeira-versao.png` | 1ª versão da US01: simulador com "duas faturas" | Primeira versão da US01 com simulador e duas faturas |
| `us03-rascunho-stitch.jpg` | Rascunho de 7 telas da US03 gerado no Stitch | Rascunho da US03 com sete telas e agendamento de ligação |
| `us03-final-stitch.jpg` | Versão final da US03 no Stitch, 5 telas | Cinco telas finais da US03 na identidade da Bulbe |
| `us04-primeira-versao-tela1.png` | 1ª versão da tela "Vai se mudar?" | Primeira versão da US04 com cabeçalho "Solicitar Serviço" |
| `us04-primeira-versao-fluxo.jpg` | As 7 telas da 1ª versão da US04 | Primeira versão do fluxo de mudança de endereço |

Logos oficiais já estão no repositório: `pages/templates/assets/logo-bulbe.svg` (azul), `logo-bulbe-branca.svg` (branca) e `logo-completa.png` (com a assinatura "sua próxima energia"). Ícones de contorno em `pages/templates/assets/Icon-*.svg`.

Telas finais também estão reunidas no Figma do squad: https://www.figma.com/design/6ruqxEURW9tMveAf7caSpO
