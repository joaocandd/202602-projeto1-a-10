# [US01] Prévia Didática da Primeira Fatura
Épico: Cobrança e Faturamento | Prioridade: Alta
Descrição: Como cliente prestes a pagar o primeiro mês, quero receber uma explicação prévia e didática sobre os valores antes da emissão, para reconhecer a legitimidade da cobrança da conta residual e não cancelar o serviço por achar indevido.
Critérios de Aceitação:
·       Dado que a cliente completou os 60 a 90 dias, Quando a primeira fatura estiver prestes a ser enviada, então um alerta proativo deve ser disparado apresentando um comparativo "Antes x Agora".
·       A comunicação deve instruir claramente a usuária a pagar  a fatura e validar tecnicamente que o somatório demonstra a economia prometida, baseando-se em dados calculados do sistema.

# [US02] Correção de Canal de Contato 
Descrição: Como usuário, quero corrigir o meu canal de contato (telefone/WhatsApp ou e-mail) quando necessário, para garantir que as comunicações e faturas cheguem corretamente no meu dispositivo atual.
Validação no Reclame Aqui: O relatório de análise de reclamações destaca falhas de atualização cadastral (como mudança de endereço/contato) como uma das causas-raiz dos problemas de cobrança. Além disso, a lista de reclamações mostra consumidores que mudaram seus dados e pararam de receber o suporte ou as faturas no canal correto. A funcionalidade também ataca diretamente a dor mapeada no projeto de que cerca de 20% das mensagens de WhatsApp da empresa não chegam ao destino

# [US03] Reenvio da fatura e agendamento
Descrição: Como usuário, quero solicitar o reenvio da fatura de forma automatizada ou pedir uma ligação em um período disponível, para recuperar o recebimento sem abrir um chamado genérico nem ficar esperando atendimento sem previsão.
Validação no Reclame Aqui: Essa história é amplamente justificada pelo alto tempo de resposta da Bulbe no suporte humano. O relatório do Reclame Aqui aponta um tempo médio de resposta de 8 dias e 16 horas, o que é muito prejudicial quando se trata de cobrança ativa. Há relatos diretos de clientes que tiveram a fatura vencida e ficaram sem resposta da empresa. Criar um fluxo de reenvio autônomo ou agendamento preciso resolve a dor de ficar preso em filas de suporte sem prazo de resolução. 29,7  9.6

# [US04] Status da fatura do mês e pagamento sem PDF
Épico: Entregabilidade das comunicações | Prioridade: Alta
Origem: Persona 5 (Rogério Alves), fases 3 a 5 da jornada ("A fatura do mês não chega", "O vencimento se aproxima" e "O vencimento passa"); oportunidades OP24, OP25, OP26 e OP29.
Descrição: Como cliente que recebe a fatura pelo WhatsApp, quero ver em que etapa está a fatura do mês (emitida, enviada ou entregue) e pagar com o PIX copia e cola mesmo sem baixar o PDF, para não perder o vencimento quando a mensagem não chegar.
Validação nos dados da Bulbe e no Reclame Aqui: A apresentação da Bulbe aponta cerca de 20% de falha na entrega de mensagens por WhatsApp e 32,4% de inadimplência na 1ª fatura (set/2025 a jul/2026). Em 15/10/2026, o Reclame Aqui tinha 10 reclamações ativas em "Atraso na entrega" e 5 em "Forma de pagamento indisponível", com relatos como "Fatura de Maio não recebida e receio de corte de energia", "Fatura não foi gerada" e "Conta do aplicativo BULBE indisponível para pagamento". Os relatos mostram que o cliente só descobre a falha perto do vencimento e, muitas vezes, também não encontra a fatura no app.
Critérios de Aceitação:
·       Dado que existe uma fatura do mês, quando o cliente abre a tela, então vê uma linha do tempo com as etapas Emitida, Enviada e Entregue, com a data de cada etapa, lidas dos dados fictícios em JSON.
·       Dado que o envio pelo WhatsApp falhou, quando o cliente abre a tela, então aparece o aviso "Não conseguimos entregar sua fatura no WhatsApp" com os botões "Reenviar fatura" (leva à tela da US03) e "Corrigir número" (leva à tela da US02).
·       Dado que a fatura não foi emitida na data prevista, quando o cliente abre a tela, então aparece o aviso "Sua fatura está atrasada" com a nova data prevista.
·       Dado qualquer status da fatura, inclusive vencida, então o valor, o vencimento e o código PIX copia e cola aparecem em texto na tela, e o botão "Copiar código" mostra a confirmação "Código copiado", sem precisar abrir o PDF.
·       A tela funciona em celular (largura de 360 px) sem rolagem horizontal.
Indicador que pretende mover: entregabilidade das comunicações (secundário: pagamento da 1ª fatura).
Wireframe: us04-status-fatura.png
