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

# [US04] Mudança de endereço e continuidade do serviço

Descrição: Como cliente da Bulbe que está mudando de endereço, quero verificar se posso continuar utilizando o serviço na minha nova residência e realizar a transferência de forma simples, entendendo os benefícios disponíveis, para não precisar cancelar o serviço por dificuldades no processo ou por não perceber valor na continuidade.

Validação da oportunidade: O levantamento realizado identificou a mudança de endereço como a terceira maior causa de churn da Bulbe. A análise sugere que parte dos cancelamentos ocorre porque o cliente não percebe vantagens em continuar utilizando o serviço na nova residência ou encontra dificuldades durante o processo de alteração cadastral. Disponibilizar um fluxo digital para consulta de disponibilidade e transferência reduz a dependência de atendimento manual, diminui a fricção operacional e aumenta a percepção de valor ao evidenciar os benefícios e a economia que podem ser mantidos após a mudança. Além disso, o registro estruturado dos motivos de desistência permitirá validar as hipóteses de indisponibilidade do serviço, complexidade do processo e falta de valor percebido, gerando insumos para futuras ações de retenção.



# [US05] Confirmação Ativa de Contato Telefônico
Épico: Onboarding e Prevenção de Falhas | Prioridade: Alta
Descrição: Como trabalhador móvel com cadastro feito às pressas, quero confirmar meu número de WhatsApp digitando um código verificador na adesão, para garantir que não digitei errado e que minhas faturas chegarão com segurança.
Critérios de Aceitação:
·       Dado que o usuário insere seu telefone de contato na adesão, Quando ele prosseguir com o fluxo, então o app deve disparar e requerer um código OTP (One-Time Password) via SMS ou WhatsApp.
·       O cadastro só deve ser finalizado e registrado no banco de dados se a validação for concluída, impedindo telefones inválidos.
