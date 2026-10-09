# Persona 1 — Marlene Aparecida | Caso Bulbe Energia

> **Persona fictícia com dores fundamentadas em dados internos da Bulbe e em fontes públicas.** Dados internos informados pela Bulbe ao time; fontes públicas consultadas em **08 e 09/10/2026** (site da Bulbe e reclamações do Reclame Aqui levantadas na pesquisa da Persona 6). Os dados não permitem inferir idade, renda ou profissão dos consumidores reais. [Pesquisa da Persona 6 e fontes](persona-6-tatiane-validada.md).

## Persona

| Campo | Descrição |
| --- | --- |
| **Nome e idade** | **Marlene Aparecida, 58 anos** *(fictícios)*. |
| **Contexto** | Costureira autônoma de Contagem (MG), mora com o marido aposentado e paga cerca de R$ 250 por mês de luz, que pesa no orçamento da família *(cenário hipotético)*. |
| **Objetivo** | Pagar menos na conta de luz todo mês, sem dor de cabeça e sem correr o risco de ter a energia cortada. |
| **Como conheceu a Bulbe** | Por um anúncio de mídia paga no Facebook; aderiu sozinha pelo celular, em poucos minutos, sem ler os termos *(hipótese de jornada)*. |
| **Medos e dúvidas** | “Isso não é golpe? Nunca ouvi falar dessa empresa.”; “Vou pagar duas vezes pela mesma energia?”; “Se eu deixar de pagar a Cemig, cortam minha luz?”; “O que são esses créditos de energia?”; “Quando o desconto aparece? O anúncio disse que era já.” |
| **Canais** | WhatsApp (inclusive áudio), Facebook e Instagram, telefone para atendimento e app do banco para PIX e boleto; usa pouco aplicativos novos e pede ajuda à filha para instalar *(hipótese)*. |
| **Principal necessidade** | **Entender o produto antes da primeira cobrança**: as duas contas, o prazo do desconto e como reconhecer uma cobrança legítima da Bulbe. |

**Frase representativa (inventada):** “Eu só quero pagar menos de luz. Se tivessem me explicado que vinham duas contas e que o desconto demorava, eu não ia achar que era golpe.”

## Mapa de jornada

![Mapa de jornada](wireframes/jornada.png)

| Fase | Ações do usuário | Pontos de contato | Pensamentos | Emoção | Dor / evidência | Oportunidade |
| --- | --- | --- | --- | --- | --- | --- |
| **1. Descoberta** | Vê o anúncio no Facebook e clica no link. | Anúncio de mídia paga, landing page. | “Conta mais barata sem obra? Parece bom demais pra ser verdade.” | 🙂 Curiosa | O anúncio vende o benefício e não explica como o produto funciona; a falta de entendimento é o principal motivo de churn, com **27,7%** (acumulado desde 2022). Relato de “propaganda enganosa na oferta” em [RA 256931273](https://www.reclameaqui.com.br/bulbe-energia/propaganda-enganosa-na-oferta-demora-de-4-meses-para-ativacao-e-recusa-de-cancelamento-imediato_Ae8K1Sz0vd4fmCXX/). | **Landing alinhada ao anúncio**, com vídeo curto explicando como a Bulbe funciona e de onde vem o desconto. |
| **2. Adesão** | Preenche os dados, envia a foto da conta e assina pelo celular. | Formulário do site, assinatura eletrônica. | “Foi rápido. Mês que vem já pago menos.” | 😊 Esperançosa | O [site da Bulbe](https://bulbeenergia.com.br/) promete economia “já na primeira fatura” e diz que o cliente não paga duas contas, mas o desconto leva de **60 a 90 dias** para aparecer. | **Simulador com o total das duas contas**, telas sobre as duas contas e o prazo, tela de confiabilidade e quiz de entendimento antes da assinatura. |
| **3. Boas-vindas** | Recebe a confirmação, conta para a filha e não baixa o app. | E-mail, WhatsApp. | “E agora, o que eu tenho que fazer?” | 😀 Animada | Depois da assinatura não há uma explicação estruturada; o atendimento resolve as dúvidas caso a caso. | **Guia de boas-vindas no WhatsApp** e ligação para clientes do perfil de risco. |
| **4. Espera** | Recebe a conta da Cemig cheia e paga normalmente. | Conta da Cemig, app do banco. | “Cadê o desconto? Será que deu certo?” | 😟 Ansiosa | A Cemig leva cerca de 30 dias para processar a mudança; clientes chegaram a ficar **20 dias sem nenhuma comunicação**. | **Rastreio “Minha jornada”** com o status do pedido na Cemig. |
| **5. Janela crítica** | Procura o atendimento no WhatsApp e comenta com a vizinha. | WhatsApp do atendimento. | “Acho que caí num golpe.” | 🤨 Desconfiada | O desconto ainda não apareceu: ele só chega entre **60 e 90 dias** após a adesão. Relato de demora de 4 meses para ativação em [RA 256931273](https://www.reclameaqui.com.br/bulbe-energia/propaganda-enganosa-na-oferta-demora-de-4-meses-para-ativacao-e-recusa-de-cancelamento-imediato_Ae8K1Sz0vd4fmCXX/). | **Prévia da primeira conta Bulbe** enviada antes da emissão. |
| **6. Primeira fatura** | Recebe a conta Bulbe e a conta residual da Cemig; paga só a da Cemig. | Conta Bulbe, conta da Cemig, app do banco. | “Duas contas? A da Cemig ficou menor, essa eu pago. A outra eu não reconheço.” | 😠 Irritada e com medo | A inadimplência da 1ª fatura é de **32,4%** e chega a cerca de **50%** entre clientes de mídia paga. A página [Como funciona](https://bulbeenergia.com.br/como-funciona/) admite que a conta da Cemig pode continuar chegando; dúvidas sobre cobrança duplicada em [RA 237401393](https://www.reclameaqui.com.br/bulbe-energia/cobranca-duplicada-e-indevida-na-fatura-de-energia-eletrica_Q1gkPNQwxewVI-Du/). | **Explicação da conta residual da Cemig**, lembrete de vencimento com PIX em destaque (+50% de adoção) e ligação de cuidado em caso de atraso. |
| **7. Economia** | Paga a conta Bulbe, soma as duas contas e conta para a irmã. | App, WhatsApp, Indique e Ganhe. | “Somando as duas, paguei menos mesmo. Podiam ter explicado antes.” | 😌 Aliviada | Sem ver a economia, parte dos clientes desiste (churn pós 1ª fatura de **2,14% ao mês** em 2026); expectativa de desconto questionada em [RA 259008543](https://www.reclameaqui.com.br/bulbe-energia/contratei-economia-de-15-e-recebi-desconto-de-centavos_lWlbhOwqyy-IsGes/). O canal de indicação está em baixa. | **Conquista “Primeira economia”** com comparativo antes x agora e convite para indicar com kit pronto. |

### Evidências e limites

- Os números internos (**32,4%** de inadimplência na 1ª fatura, cerca de **50%** entre clientes de mídia paga, **27,7%** de churn por falta de entendimento desde 2022, **2,14% ao mês** de churn pós 1ª fatura em 2026, **20 dias** sem comunicação, **+50%** de adoção do PIX e prazo de **60 a 90 dias** até o desconto) foram informados pela Bulbe ao time e não foram verificados de forma independente. Os 32,4% se referem à base e os ~50% à mídia paga; confirmar período e critério de cálculo.
- Em 08/10/2026, a [página inicial da Bulbe](https://bulbeenergia.com.br/) dizia que o cliente começa a economizar “já na primeira fatura” e que não paga duas contas, enquanto a página [Como funciona](https://bulbeenergia.com.br/como-funciona/) reconhece que a conta da Cemig pode continuar chegando com iluminação pública e impostos. Essa diferença entre promessa e experiência sustenta as fases 2, 5 e 6.
- As reclamações citadas vêm do levantamento da Persona 6 no Reclame Aqui em 09/10/2026, que registrava **450** reclamações ativas em “Cobrança indevida” e **38** em “Cobrança duplicada”. São **classificações de reclamações**, não falhas comprovadas nem taxas da base de clientes.
- Idade, renda, profissão e canal de aquisição são hipóteses. A persona precisa ser validada com entrevistas e testes com clientes reais de mídia paga.

### Issues sugeridas no GitHub Projects (`oportunidade`)

1. `OP01 Alinhar a landing ao anúncio e explicar como a Bulbe funciona`.
2. `OP02 Simular o total das duas contas antes da adesão`.
3. `OP03 Explicar as duas contas e o prazo do desconto na adesão`.
4. `OP04 Exibir tela de confiabilidade da marca`.
5. `OP05 Validar o entendimento com quiz antes da assinatura`.
6. `OP06 Enviar guia de boas-vindas no WhatsApp e ligar para o perfil de risco`.
7. `OP07 Mostrar o status da conexão em "Minha jornada"`.
8. `OP08 Enviar prévia da 1ª conta Bulbe`.
9. `OP09 Explicar a conta residual da Cemig`.
10. `OP10 Lembrar o vencimento com PIX em destaque e ligar em caso de atraso`.
11. `OP11 Exibir economia acumulada e conquista "Primeira economia"`.
12. `OP12 Convidar para indicar após a primeira economia`.

---



Também reforça as issues `OP01`, `OP07`, `OP10` e `OP11` da Persona 1.
