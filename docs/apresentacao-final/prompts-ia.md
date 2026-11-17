# Prompts de IA usados nas telas · Squad 10

Textos copiados do Figma do squad (US01, US02 e US04) e da conversa de criação da US03 no Google Stitch. São a fonte para a seção "Como usamos IA" do site. Os prompts da US01 e da US04 ainda usam cores antigas (#1A0D87); as telas finais seguem o azul oficial #08068D.

A US05 (MariB) não tem prompt registrado no Figma.

## US01 · Prévia da 1ª fatura · Samuel Pascini

Resultado: as telas Faturas, Notificação, Antes x agora, Fatura unificada, Sua economia e Pagamento. A regra central (fatura unificada) corrigiu a 1ª versão, que mostrava "Seu total vem em duas faturas".

```text
Crie um fluxo UX/UI mobile para a Bulbe Energia, inspirado nas telas do aplicativo e na referência visual anexada. Entregue 6 TELAS MOBILE (390x844), lado a lado, conectadas por setas, como um storyboard profissional. NÃO crie landing page. Preserve o cabeçalho, a navegação inferior e a aparência do app Bulbe. US01 — Prévia Didática da Primeira Fatura. Objetivo: reduzir inadimplência e cancelamentos por falta de compreensão da primeira cobrança, após 60 a 90 dias da adesão. REGRA CENTRAL: a Bulbe apresenta uma FATURA UNIFICADA, com valor total consolidado e detalhamento interno dos componentes. NÃO apresente duas faturas independentes nem descreva isso como mudança no modelo de cobrança. Crie as telas: Faturas: tela inicial do app com alerta proativo "Sua primeira fatura está chegando. Veja como funciona sua economia". Notificação: aviso antecipado à emissão, explicando a cobrança e botão "Entender minha fatura". Antes x Agora: comparação visual do custo sem e com Bulbe. Exemplo fictício: R$ 300 → R$ 255. Economia de R$ 45 (15%). Fatura unificada: cartão com valor total R$ 255, detalhamento expansível de energia, encargos e descontos. Explicar a composição sem apresentar cobranças separadas. Sua economia: cálculo transparente mostrando R$ 300 - R$ 255 = R$ 45. Incluir gráfico e dados de consumo. Na versão real, usar cálculos do sistema e períodos comparáveis. Pagamento: explicar por que a cobrança é legítima, mostrar vencimento, botão "Ver minha fatura", opção "Pagar com Pix" e acesso ao suporte. IDENTIDADE VISUAL: Logo oficial anexo. Azul #1A0D87; textos #2B3240 e #5B6472; fundos branco e #F4F5FB; bordas #E4E5E9. Sucesso #1E8A50 sobre #E9F8F0; avisos #B4530E sobre #FFF6EC. Fonte Poppins. Botões de 52px, raio 10px; cartões raio 16px. Ícones lineares. Sem emojis, neon ou sombras fortes. Crie navegação interativa, notificações e detalhes expansíveis. Valores ilustrativos. Priorize transparência, confiança e acessibilidade WCAG AA.
```

## US02 · Correção do canal de contato · André Coelho

Resultado: cinco alternativas comparadas (A a E). A versão final segue a alternativa B, central de dados de contato, com status por canal e confirmação por código.

```text
US02: Correção de Canal de Contato | Bulbe Energia 1. Contexto e objetivo Atue como um **Product Designer Sênior especializado em UX/UI Design para aplicativos mobile**, com experiência em arquitetura da informação, usabilidade, design systems, acessibilidade e otimização de fluxos digitais. Estou desenvolvendo soluções de interface para o aplicativo da **Bulbe Energia**, com base na seguinte User Story: **US02 — Correção de Canal de Contato** **Descrição:** Como usuário, quero corrigir meu canal de contato (telefone/WhatsApp ou e-mail) quando necessário, para garantir que as comunicações e faturas cheguem corretamente ao meu dispositivo atual. **Contexto do problema:** A análise de reclamações no Reclame Aqui identificou dificuldades relacionadas à atualização cadastral como possíveis causas de problemas de cobrança e comunicação. Também foi mapeada no projeto a dor de que aproximadamente 20% das mensagens de WhatsApp da empresa não chegam ao destino. **Objetivo da solução:** Facilitar a identificação, a edição e a confirmação dos dados de contato do cliente, reduzindo erros cadastrais, dificuldades de comunicação e problemas no recebimento de faturas e notificações. 2. Materiais de referência Vou anexar imagens de telas reais e protótipos do aplicativo da Bulbe, além do ícone/logo da marca. Antes de criar as interfaces: Analise todas as imagens anexadas para compreender a identidade visual, a estrutura de navegação e os componentes já existentes no aplicativo. Utilize as telas de referência como base para manter a coerência com o produto atual, principalmente em elementos como cabeçalho, logotipo, navegação inferior, botões, cartões, campos de formulário e ícones. Observe cuidadosamente as telas de **Minha conta**, especialmente os campos de e-mail e telefone, que já apresentam informações cadastrais e ícones de edição. Considere essa interface como um possível ponto de partida para algumas das propostas. Utilize o logo ou ícone da Bulbe que será anexado. Não redesenhe, distorça ou substitua o símbolo por uma versão inventada. Identifique, pelas referências, as cores, a tipografia, os espaçamentos, os estilos de borda e os padrões visuais predominantes. Reproduza-os com a maior fidelidade possível. A interface precisa parecer uma funcionalidade legítima do aplicativo existente, e não um aplicativo novo criado do zero. 3. Direção visual Mantenha a identidade visual da Bulbe, priorizando: O azul-escuro/índigo predominante nas áreas principais e nos elementos de ação, conforme as referências. O fundo branco e as superfícies claras utilizadas no aplicativo. Os tons de verde e os detalhes coloridos da marca para elementos de destaque, estados e ações secundárias, respeitando os usos observados nas referências. A tipografia identificada nas imagens, com hierarquia clara entre títulos, descrições, informações cadastrais e ações. Botões, campos, cartões, ícones e componentes com proporções compatíveis com o aplicativo original. Uma aparência moderna, organizada, confiável e funcional, sem excesso de elementos decorativos. Não invente uma nova paleta de cores nem utilize uma identidade genérica de fintech. A prioridade é preservar a personalidade visual da Bulbe. 4. O que você deve produzir Crie **5 alternativas de interface para solucionar a mesma User Story**, apresentadas lado a lado em uma página de exploração de design no Figma. Cada alternativa deve representar uma abordagem de UX/UI diferente para permitir uma comparação real entre as propostas. **Importante: não quero uma jornada do usuário, um fluxo de navegação ou uma sequência de telas.** Não conecte as propostas com setas, não numere as interfaces como etapas de um processo e não desenvolva um mapa de jornada. Cada alternativa deve ser uma solução independente para o mesmo problema, que eu possa avaliar e escolher. Explore estas cinco abordagens: Alternativa A — Edição diretamente em Minha conta Aproveite a estrutura de Minha conta já existente no aplicativo. Explore como tornar a edição de telefone/WhatsApp e e-mail mais evidente, intuitiva e acessível, sem sobrecarregar a tela atual. Avalie a hierarquia das informações, a visibilidade das ações de edição e a maneira de informar se os dados estão atualizados, pendentes de confirmação ou precisam de correção. Alternativa B — Central de dados de contato. Crie uma interface dedicada à gestão dos canais de contato do cliente. Explore uma organização visual na qual telefone/WhatsApp e e-mail tenham áreas bem definidas, com informações sobre a situação de cada canal e ações claras para corrigir os dados. A tela deve facilitar a identificação do dado que precisa ser atualizado, sem exigir que o usuário procure essa informação entre diversas configurações da conta. Alternativa C — Edição simplificada em contexto. Explore uma abordagem com edição rápida por meio de um modal, painel ou formulário contextual, acionado a partir dos dados cadastrais. Priorize uma intervenção curta, com poucos elementos, sem retirar desnecessariamente o usuário do contexto da tela original. O formulário deve deixar evidente qual informação está sendo alterada, oferecer uma ação principal clara e apresentar mensagens de validação úteis. Alternativa D — Contato e recebimento de comunicações. Explore uma solução orientada à finalidade dos dados de contato: garantir que faturas, notificações e comunicações da Bulbe cheguem ao cliente. A interface pode destacar os canais cadastrados e suas respectivas situações, deixando claro quando uma informação precisa de atualização ou confirmação. Não utilize avisos alarmistas ou estados negativos sem justificativa. A proposta deve transmitir controle e segurança ao usuário, sem criar preocupação desnecessária. Alternativa E — Formulário unificado de atualização cadastral. Explore uma interface na qual o cliente consiga revisar e corrigir telefone/WhatsApp e e-mail em um único local. Avalie como organizar os campos, indicar quais são obrigatórios, orientar o preenchimento correto e permitir que o usuário identifique exatamente o que será atualizado. Busque um equilíbrio entre conveniência e simplicidade, sem transformar uma correção cadastral em um formulário longo ou burocrático.

5. Requisitos funcionais e de UX Todas as alternativas devem atender à necessidade central da US02 e considerar os seguintes aspectos. **Identificação do dado:** o usuário precisa identificar facilmente seu telefone e seu e-mail cadastrados. **Edição intuitiva:** a ação para corrigir os dados deve ser visível, compreensível e fácil de acessar. **Preenchimento adequado:** utilize máscaras e exemplos de preenchimento quando apropriados, especialmente para números de telefone brasileiros e endereços de e-mail. **Validação:** considere como informar erros de formato, campos incompletos e dados inválidos sem depender exclusivamente de cores para transmitir a mensagem. **Confirmação da alteração:** deixe claro quando a informação foi salva e, quando necessário, quando ainda precisa ser confirmada. Não apresente como verificado um contato que ainda não passou pela confirmação correspondente. **Prevenção de erros:** evite alterações acidentais, mensagens ambíguas e situações em que o usuário não saiba se a mudança foi concluída. **Privacidade:** apresente apenas as informações pessoais necessárias à tarefa e evite expor dados excessivamente. **Acessibilidade:** considere legibilidade, contraste adequado, áreas de toque confortáveis, textos objetivos e rótulos explícitos nas ações. **Consistência:** preserve os padrões de navegação e os componentes existentes da Bulbe sempre que fizer sentido. Não é obrigatório incorporar todos esses elementos em todas as telas. Aplique-os conforme a abordagem de cada alternativa, sem comprometer a simplicidade da interface. 6. Critérios de qualidade visual Quero propostas com qualidade de um produto digital real, e não apenas wireframes ou telas genéricas. Cada alternativa deve: Apresentar uma hierarquia visual bem definida. Ter alinhamento, espaçamento e proporções consistentes. Utilizar componentes de interface plausíveis e compatíveis com as referências anexadas. Ter textos em português brasileiro, com linguagem simples e adequada ao público do aplicativo. Conter dados fictícios realistas quando necessários para demonstrar o layout, sem inserir informações pessoais reais das referências sem necessidade. Ter dimensões e proporções de smartphone compatíveis com as telas de referência. Apresentar uma solução visual suficientemente desenvolvida para permitir uma comparação entre as alternativas. Evite excesso de cartões, sombras, gradientes, ilustrações decorativas, cores aleatórias, emojis ou elementos visuais que não façam parte da identidade da marca. Não faça as cinco telas parecerem variações superficiais do mesmo layout: explore diferenças reais na organização da informação e na interação, mantendo a identidade visual da Bulbe. 7. Organização no Figma Organize as cinco propostas em uma página chamada **“US02 — Exploração de soluções”**. Crie cinco frames independentes, identificados como: A — Edição em Minha conta B — Central de dados de contato C — Edição contextual D — Recebimento de comunicações E — Atualização unificada Apresente os frames lado a lado, com títulos discretos e espaço suficiente para inspecionar cada interface. Utilize componentes reutilizáveis quando isso contribuir para a consistência. Se possível, mantenha campos, botões, cartões e estados visuais organizados de maneira que possam ser refinados posteriormente. Inclua uma breve anotação fora de cada tela explicando a principal decisão de UX daquela proposta e qual problema ela pretende resolver. Essas anotações não devem aparecer dentro da interface do aplicativo. 8. Como avaliar o resultado Priorize, nesta ordem: Facilidade para encontrar e corrigir um canal de contato. Clareza sobre o que está cadastrado e o que precisa ser atualizado. Segurança e compreensão na confirmação da alteração. Coerência com o aplicativo e a identidade visual da Bulbe. Simplicidade, acessibilidade e qualidade visual. Não presuma que a alternativa mais sofisticada é necessariamente a melhor. Explore soluções simples e eficientes, além de opções com organização mais estruturada. **Entregável esperado:** cinco alternativas visuais independentes, de alta fidelidade, prontas para serem comparadas em uma revisão de produto. O objetivo é explorar diferentes soluções para a US02 antes de escolher qual será aprofundada, e não definir antecipadamente uma única solução ou construir uma jornada completa.
```

## US03 · Reenvio da fatura pelo Assistente Bulbe · João Victor

Cinco prompts em sequência no Google Stitch. O 2b é uma versão em um prompt só dos prompts 1 e 2, e foi ela que gerou o rascunho de 7 telas.

| Passo | Pedido | Resultado |
| --- | --- | --- |
| 1 | Registrar a identidade e uma página de referência | Azul #1A0D87, que não é o oficial |
| 2 | Criar o fluxo de 7 telas | Logo quebrado, selos em pílula e agendamento de ligação |
| 3 | Aplicar o design system anexo e tirar a ligação | Cores certas e 5 telas, mas visual ainda diferente do app |
| 4 | Copiar o app oficial a partir de imagens e dos logos em PNG | Telas iguais ao app; o botão Ajuda sumiu |
| 5 | Recolocar só o botão Ajuda e manter o resto | Corrigido sem mexer nas outras telas |

Lição: hex, px e imagens de referência funcionam; "deixe parecido com a Bulbe" não. O Stitch não aceitou PDF como anexo, só imagens.

### 1. Identidade e página de referência
```text
Anexei o logo da Bulbe (branco e azul) e telas do app. Registre esta identidade e crie uma página de referência com cores, tipos, botões, campos, cartões e cabeçalhos para as próximas telas.

MARCA: Bulbe Energia, energia limpa em MG, com desconto na conta de luz da Cemig. Assinatura "sua próxima energia". Tom confiável, próximo e simples.

LOGO: "bulbe" em minúsculas arredondadas, com três traços (verde, azul e laranja) à direita. Branco sobre azul; azul-marinho sobre fundo claro. Use o arquivo: não redesenhe nem recolora.

CORES
- Principal #1A0D87 (botões, títulos, links)
- Gradiente #3D5FBE → #1B1089 (só em heros)
- Texto #2B3240; secundário #5B6472
- Bordas #8A93A3 (campos) e #E4E5E9 (divisórias)
- Fundo #F4F5FB; cartões brancos
- Verde #24CF7E, azul #0363C9 e laranja #FD9F20: só no logo e em detalhes pequenos
- Sucesso #1E8A50 sobre #E9F8F0; erro #B42318; WhatsApp #315C54; promoção #B4530E sobre #FFF6EC

TIPOGRAFIA: Poppins. Destaque 30/38 e título 24/32 em 600; corpo 15/22; apoio 13/18; botões 16 em 600. Só a primeira letra maiúscula.

FORMA: 360×812, margens 24, grade 8. Raio 10 em botões e campos, 16 em cartões, 24 em painéis. Botões de 52 px: principal cheio em azul-marinho, secundário contornado. Cartões planos, sem sombra pesada. Ícones de contorno, 2 px.

COMPONENTES DO APP
- Home: cabeçalho azul-marinho com menu, logo, notificações e avatar; seletor de instalação; barra inferior Faturas, Consumo e Indicações.
- Fluxos: cabeçalho branco com voltar, logo no centro e "Ajuda"; barra "Etapa X de 3".
- Cartão de fatura: mês, vencimento, selo de status (em aberto, paga, em atraso), valor, "Desconto Bulbe", "Pagar com PIX" e "Ver detalhes".

VOZ: português do Brasil, "você", frases curtas, verbos nos botões, sem jargão do setor elétrico.

ACESSIBILIDADE: contraste AA, toque ≥44 px, label visível, status nunca só pela cor.

EVITE: neon, efeito de vidro, emojis, sombras fortes, barra colorida lateral em cartões, botão cinza desabilitado.
```

### 2. Fluxo de 7 telas
```text
Com essa identidade, crie o fluxo "US03 · Reenvio da fatura e agendamento": um assistente virtual no app para o cliente recuperar a fatura sozinho ou agendar uma ligação, sem fila e sem prazo incerto. Seções numeradas, com título, frase curta e rótulos de estado.

01 FATURAS: home com o cartão "Outubro/26 · Venceu dia 15/10/26 · em atraso · R$ 252,06", "Pagar com PIX", "Ver detalhes" e o link "Não recebi minha fatura". Botão flutuante "Ajuda" com ícone de chat. Esses dois e "Precisa de ajuda?" no menu lateral abrem o chat; pelo link, ele já começa no reenvio.

02 CHAT · INÍCIO: cabeçalho com voltar, "Assistente Bulbe", "Responde na hora" e ícone de Meus atendimentos. "Oi, Ana! Como posso ajudar?" e o aviso "Sou um assistente automático". Atalhos: Reenviar minha fatura, Agendar uma ligação, Pagar fatura em atraso, Outro assunto. Campo de mensagem. Estado extra: "Não entendi" com os atalhos de novo.

03 REENVIO: o assistente mostra a fatura em cartão e pergunta "Para onde envio?": WhatsApp (31) •••••-0000, e-mail a•••@email.com ou "Baixar PDF aqui". Link "Atualizar meus contatos".

04 REENVIO FEITO: "Pronto! Enviei a fatura de outubro para seu WhatsApp às 14:32." Cartão com "Copiar código PIX" (principal), "Ver PDF" e o protocolo 20261021-0042. Depois: "Não chegou em 10 minutos?", com Reenviar e Agendar ligação.

05 AGENDAR LIGAÇÃO: painel inferior sobre o chat com o motivo já preenchido ("Reenvio da fatura de outubro"), dias (Hoje, Amanhã, Qui 23/10), horários de 30 min (o indisponível escrito, não só cinza), telefone com "Alterar" e "Confirmar horário".

06 LIGAÇÃO AGENDADA: cartão no chat com dia, horário, telefone, motivo e protocolo; "Avisamos 30 min antes pelo WhatsApp"; ações Adicionar à agenda, Reagendar e Cancelar.

07 MEUS ATENDIMENTOS: lista com status escrito (Concluído, Agendado), data e protocolo.

Mensagens do assistente à esquerda em branco; do cliente à direita em azul-marinho; atalhos em pílulas contornadas; toque ≥44 px.
```

### 2b. Versão em um prompt só (a que gerou o rascunho)
```text
Crie 7 telas mobile (360×812) para o app Bulbe Energia. Dor: a fatura não chegou e o suporte demora 8 dias. Solução: assistente virtual que reenvia a fatura na hora ou agenda uma ligação.

IDENTIDADE
- Logo: use os anexos sem redesenhar; branco sobre azul-marinho, azul sobre fundo claro.
- Cores: azul-marinho #1A0D87 (cabeçalho e botões), texto #2B3240, secundário #5B6472, borda #8A93A3, fundo #F4F5FB, sucesso #1E8A50 sobre #E9F8F0.
- Poppins. Raio 10 nos botões e 16 nos cartões; botões de 52 px; ícones de contorno; sem gradiente, sombra forte ou emoji.
- Siga a estrutura das telas anexas.

TELAS
1. Faturas: cabeçalho azul-marinho (menu, logo, sino, avatar); seletor de instalação; cartão "Outubro/26 · Vence 25/10/26 · em aberto · R$ 252,06" com Pagar com PIX e Ver detalhes; link "Não recebi minha fatura"; botão flutuante "Ajuda"; barra inferior Faturas, Consumo, Indicações.
2. Chat: cabeçalho com voltar, "Assistente Bulbe" e "Responde na hora". "Oi, Ana! Como posso ajudar?", aviso "Sou um assistente automático", atalhos (Reenviar minha fatura, Agendar uma ligação, Outro assunto) e campo de mensagem.
3. Reenvio: cartão da fatura e "Para onde envio?": WhatsApp (31) •••••-0000, e-mail a•••@email.com ou Baixar PDF.
4. Enviado: "Pronto! Enviei a fatura de outubro para seu WhatsApp às 14:32." Copiar código PIX, Ver PDF, protocolo 20261021-0042 e "Não chegou em 10 minutos?" com Reenviar e Agendar ligação.
5. Agendar: painel inferior com motivo "Reenvio da fatura", dias (Hoje, Amanhã, Qui 23/10), horários (09:00, 09:30 indisponível, 10:00, 14:00), telefone com "Alterar" e "Confirmar horário".
6. Agendado: cartão "Ligação agendada · Qui 23/10, 10:00 · protocolo 20261021-0043", lembrete 30 min antes, Reagendar e Cancelar.
7. Meus atendimentos: Fatura reenviada (Concluído, 21/10) e Ligação agendada (Agendado, 23/10).

Balões: assistente à esquerda em branco, cliente à direita em azul-marinho. Contraste AA, toque ≥44 px, status sempre escrito. Textos exatamente como acima.
```

### 3. Design system e fim do agendamento de ligação (anexo: design-system.md)
```text
Atualize as telas deste projeto do app Bulbe Energia seguindo o arquivo design-system.md anexo. Ele define cores, fontes, cantos e componentes: não use nenhum valor fora dele. Mantenha a estrutura, os textos e o fluxo atuais, exceto o que está abaixo.

1. CORES E FONTES
Troque as cores antigas pelas do arquivo:
- Azul-marinho #1A0D87 → #08068D (cabeçalho da home, botões principais, títulos, balão do cliente). Pressionado: #060462.
- Texto #2B3240 → #3E4D5B; valores e destaques em #29333D.
- Secundário #5B6472 → #536679.
- Borda de campo #8A93A3 → #678098; divisórias e contorno de cartões em #D1D9E0.
- Fundo #F4F5FB → #F6F9F9; cartões e campos em #FFFFFF.
- Sucesso #1E8A50 sobre #E9F8F0 → #027A48 sobre #ECFDF3.
- Selo "em aberto": #08068D sobre #E7E7FE. Foco: anel de 4 px #CFCEFD.
Poppins em tudo: título de tela 24/32 Semibold #08068D; corpo 16/24 Regular; label 14/20 Medium; apoio 14/20 #536679; botões 16/24 Semibold; legendas 12/18.
Cantos: 8 px em botões e campos, 12 px em cartões, 24 px no topo de painéis inferiores. Botões com altura mínima de 44 px.

2. REMOVA O AGENDAMENTO DE LIGAÇÃO
Apague as telas "Agendar" e "Agendado" e toda menção a ligação:
- Chat: tire o atalho "Agendar uma ligação"; ficam "Reenviar minha fatura" e "Outro assunto".
- Enviado: em "Não chegou em 10 minutos?", troque "Agendar ligação" por "Enviar por e-mail" e mantenha "Reenviar".
- Meus atendimentos: tire o item "Ligação agendada"; fica só "Fatura reenviada · Concluído · 21/10".
O fluxo final tem 5 telas: Faturas, Chat, Reenvio, Enviado e Meus atendimentos.

Mantenha o logo dos anexos sem redesenhar, ícones de contorno, nada de gradiente, sombra forte ou emoji, contraste AA, toque ≥ 44 px e status sempre escrito.
```

### 4. Visual igual ao app oficial (anexos: 4 imagens PNG)
```text
Refaça o visual das 5 telas deste projeto para ficar igual ao app oficial da Bulbe mostrado nas imagens anexas (bulbe-referencia-telas e bulbe-referencia-componentes). Copie delas o cabeçalho, os cartões, os selos, os botões, as listas e a barra inferior. Mantenha o fluxo e os textos; mude só o visual.

LOGO
Use as imagens anexas, nunca texto: bulbe-logo-branco.png no cabeçalho azul e bulbe-logo-azul.png em fundo branco. Corrija as telas de reenvio e de fatura enviada, onde o logo aparece quebrado.

ESTILO
- Poppins. Azul #08068D no cabeçalho da home, botões, títulos e valores; texto #3E4D5B; apoio #536679; divisórias #D1D9E0; fundo branco; faixas destacadas em #F6F9F9.
- Cantos pequenos: botões e campos 6 px, cartões 8 px, selos 4 px. Nada de pílulas nem sombras.
- Botão principal: #08068D, 44 px de altura, texto branco Semibold e ícone à direita. Secundário: branco, borda 1 px #D1D9E0, texto #536679. Link: #08068D sublinhado.
- Selos retangulares: em aberto #054894 sobre #E6F1FE; paga e concluído com ✓ #18814D sobre #E9FBF2; em atraso com relógio #B42318 sobre #FEF3F2; em análise #B54708 sobre #FFFAEB.
- Cartão de fatura: branco, borda de 4 px #E6F1FE; "De R$ 306,73 por" com o valor riscado; "R$" pequeno e valor grande em #08068D Semibold; "Desconto Bulbe: R$ 46,01" em #08068D.
- Histórico e atendimentos em lista com divisórias, não em cartões soltos.

TELA FATURAS
Cabeçalho igual à referência: fundo #08068D com menu, logo branco no centro, sino e avatar; faixa "Indique e ganhe · R$ 50 na próxima fatura ›"; "Instalação:" com seletor de borda em gradiente #0762C7 → #26D07C; folha branca com topo arredondado de 16 px. Barra inferior só com Faturas, Consumo e Indicações: aba ativa #08068D com traço de 2 px acima, inativas #C2CCD6. Tire a aba Perfil e o botão flutuante Ajuda; "Não recebi minha fatura" vira uma linha com ícone de ajuda logo abaixo do cartão.

DEMAIS TELAS
Cabeçalho branco igual ao de Ver detalhes: seta de voltar curva #536679 à esquerda e logo azul à direita. Abaixo, o título da tela em 20 px Semibold #29333D, só com a primeira letra maiúscula ("Assistente Bulbe", "Meus atendimentos"). Sem barra inferior.
- Chat: balão do assistente #F6F9F9 com texto #3E4D5B; do cliente #08068D com texto branco; cantos de 8 px; atalhos como botões secundários.
- Meus atendimentos: abas sublinhadas como em Notificações (Todos, Em andamento, Concluídos), com contador em #E7E7FE.
- Fatura enviada: aviso de sucesso em #E9FBF2 com texto #18814D.
```

### 5. Botão Ajuda de volta (só a tela Faturas selecionada)
```text
Edite somente a tela Faturas. Não mude mais nada nela nem nas outras telas: cabeçalho, cartão da fatura, histórico, barra inferior, cores, fontes e textos ficam exatamente como estão.

Adicione de volta o botão flutuante "Ajuda", como na versão anterior desta tela:
- Posição: fixo no canto inferior direito, 16 px da borda direita e 16 px acima da barra inferior. Fica parado quando a tela rola.
- Visual: fundo #08068D, ícone de fone de ouvido em contorno branco à esquerda e o texto "Ajuda" em branco, Poppins Semibold 16 px.
- Formato: 48 px de altura, cantos totalmente arredondados (formato de pílula) e sombra suave para destacar do conteúdo. Esta é a única exceção à regra de cantos pequenos e sem sombra.
- Ao tocar, abre a tela do chat "Assistente Bulbe".
- Aumente o espaço no fim da lista do histórico de faturas, para que o botão não cubra o último mês (Junho).
```

## US04 · Mudança de endereço · Miguel Fernando Rocha

Resultado: 8 telas, de "Vai se mudar?" ao motivo da desistência (cenário A, endereço atendido, e B, não atendido). Depois foram adaptadas ao template do squad: saiu o cabeçalho "Solicitar Serviço" e entrou o padrão com voltar e logo.

```text
Crie um fluxo completo para o aplicativo da Bulbe referente à User Story "[US04] Mudança de Endereço e Continuidade do Serviço". CONTEXTO A mudança de endereço foi identificada como a terceira maior causa de churn da Bulbe. As hipóteses levantadas indicam que os cancelamentos ocorrem principalmente por dois fatores: 1. Falta de valor percebido para continuar utilizando a Bulbe na nova residência. 2. Fricção operacional durante o processo de mudança de endereço. O objetivo do fluxo é facilitar a continuidade do serviço, reduzir cancelamentos evitáveis e reforçar os benefícios de permanecer com a Bulbe após a mudança. IDENTIDADE VISUAL IMPORTANTE: Utilize como referência principal todas as telas, componentes, fluxos, estilos, design system e materiais visuais anexados ao contexto. A interface deve manter total consistência com o aplicativo atual da Bulbe, respeitando: - Hierarquia visual existente - Componentes já utilizados pela plataforma - Estilo dos botões - Campos de formulário - Espaçamentos - Tipografia - Navegação - Cards - Mensagens de feedback - Ícones e ilustrações Utilizar a cor principal da marca #08068D para CTAs, destaques e elementos de navegação. Não criar uma nova identidade visual. O resultado deve parecer uma funcionalidade nativa já existente dentro do aplicativo da Bulbe. OBJETIVO DO FLUXO Permitir que o cliente: - Informe seu novo endereço. - Verifique a disponibilidade do serviço. - Entenda os benefícios da continuidade. - Visualize estimativas de economia quando disponíveis. - Solicite a transferência do serviço. - Receba orientações claras sobre os próximos passos. - Informe os motivos caso desista da continuidade. TELA 1 – MUDANÇA DE ENDEREÇO Título: "Vai se mudar?" Descrição: "Verifique se a Bulbe está disponível no seu novo endereço e continue aproveitando seus benefícios." Elementos: - Ilustração seguindo o padrão visual do aplicativo. - CTA principal: "Verificar disponibilidade" TELA 2 – INFORMAR NOVO ENDEREÇO Campos: - CEP - Rua - Número - Complemento - Bairro - Cidade Com preenchimento automático sempre que possível. CTA: "Verificar disponibilidade" TELA 3 – CONSULTA DE DISPONIBILIDADE Estado de carregamento. Mensagem: "Estamos verificando a disponibilidade da Bulbe para seu novo endereço." Utilizar componentes de loading compatíveis com o padrão já utilizado no produto. CENÁRIO A – SERVIÇO DISPONÍVEL TELA 4A – CONTINUIDADE DISPONÍVEL Título: "Ótima notícia! Você pode continuar com a Bulbe." Exibir: - Disponibilidade confirmada. - Benefícios da continuidade. - Informações que reforcem conveniência e economia. Caso haja dados suficientes, apresentar estimativa personalizada de economia. Exemplo: "Você pode continuar economizando aproximadamente R$ XX por mês." Benefícios em cards: - Sem necessidade de novo cadastro. - Continuidade da experiência. - Histórico preservado. - Economia mantida. CTA: "Solicitar transferência" TELA 5A – CONFIRMAR TRANSFERÊNCIA Exibir resumo: - Endereço atual - Novo endereço - Dados já existentes no cadastro - Data prevista para transferência Evitar solicitar informações que já existam no sistema. CTA: "Confirmar solicitação" TELA 6A – SOLICITAÇÃO REALIZADA Mensagem de sucesso. Título: "Transferência solicitada com sucesso" Exibir próximos passos: 1. Validação do endereço. 2. Processamento da transferência. 3. Confirmação da continuidade do serviço. Botão: "Voltar para início" CENÁRIO B – SERVIÇO INDISPONÍVEL TELA 4B – INDISPONIBILIDADE Título: "Infelizmente ainda não atendemos esse endereço." Apresentar a informação de forma clara e empática. Elementos: - Explicação simples. - Possibilidade de demonstrar interesse futuro. CTA principal: "Entrar na lista de interesse" CTA secundário: "Falar com atendimento" TELA 5B – MOTIVO DA DESISTÊNCIA Pergunta: "Você poderia nos ajudar a entender o motivo?" Opções: - Serviço indisponível no novo endereço. - Processo muito complexo. - Não vejo vantagens em continuar. - Vou contratar outra solução. - Outro. Campo opcional para comentário. CTA: "Enviar" EXPERIÊNCIA DE USUÁRIO - Reduzir o número de etapas. - Priorizar reutilização de dados já cadastrados. - Reforçar continuamente o valor da permanência. - Comunicar benefícios de forma clara. - Dar transparência ao processo. - Reduzir qualquer sensação de burocracia. - Priorizar retenção sem gerar pressão excessiva ao usuário. RESULTADO ESPERADO Gerar telas de alta fidelidade totalmente alinhadas ao padrão visual dos anexos e ao design atual da Bulbe, criando uma experiência simples, confiável e orientada à continuidade do serviço durante a mudança de endereço.
```
