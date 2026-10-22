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

# [US05] Fatura leve com PIX copia e cola
ID: US05 · Persona: Rogério (Persona 5) · Issues de origem: OP25 (parte de OP24) · Slides [APP]: 12 a 16

User story: Como usuário, quero abrir por um link curto uma página leve com valor, vencimento e PIX copia e cola em texto, para pagar em dia sem baixar PDF nem instalar o app, mesmo com pouca memória e pouco plano de dados.

Problema identificado
·       Evidenciado: a fatura vai por WhatsApp, que falha (cerca de 20% de falha na entrega, segundo a Bulbe) [PPT 17]. Em 260543199, o cliente precisou abrir chamado para a 2ª via no 3º mês [RA-REL]. O app tem fatura, mas exige instalar e entrar [APP 12 a 16].
·       Hipótese: que o PDF não abra por falta de memória ou internet (premissa da persona).

Evidências: [PPT 17, 19]; [RA-REL] (260543199); [APP 12 a 16] (PIX já existe dentro do app); [P5] fases 3 e 4.

Solução proposta: Página fatura.html (celular primeiro) que lê faturas.json: mês, "de/por", vencimento, status, botão grande "Copiar PIX" e o código visível em texto, sem PDF e sem imagens pesadas (só ícones SVG). Em atraso, o PIX continua disponível. Rodapé com o link de "Canais oficiais" (US07). No protótipo a página abre sem login; em produção o link precisaria ser individual e expirar (ver limitações).

Critérios de aceitação
1.      Dado uma fatura em aberto, quando abre a página em 360×640, então vê valor, vencimento e "Copiar PIX" sem rolar.
2.      Dado que toca em "Copiar PIX", então o código vai para a área de transferência e aparece a confirmação "Código copiado"; se o navegador bloquear, o código está selecionável.
3.      Dado uma fatura vencida, então o status "em atraso" aparece e o PIX continua disponível.
4.      Dado que o JSON não carrega, então aparece uma mensagem com o canal de atendimento, nunca uma tela em branco.
5.      Dado a página carregada, então não há PDF nem imagem raster além do logotipo.

Prioridade: Alta. Demonstra de forma concreta a ponte entre "mensagem falhou" e "cliente consegue pagar", e é totalmente prototipável.

Complexidade: baixa a média no protótipo; alta em produção (gerar PIX atualizado por fatura, link seguro por cliente e o gatilho automático de reenvio por SMS quando o WhatsApp falha, que é backend).

Dependências e limitações
·       Uma página de fatura sem login expõe dados pessoais; produção exige link individual e com validade ou verificação de identidade.
·       Não sabemos se hoje há reenvio automático por SMS ou RCS: pergunta para a Bulbe.
·       Se a falha estiver na emissão (fatura não gerada), a página não ajuda; isso é problema de faturamento.

Resultado esperado e como avaliar: Rogério paga em poucos toques sem app nem PDF. Avaliação por teste de tarefa ("pague esta fatura", registrando toques e erros) e critérios acima. Para a Bulbe, o acompanhamento seria "fatura paga por canal de entrega" em coorte; não afirmamos que isso reduza a inadimplência.

Indicador que pretende mover: entregabilidade das comunicações.

Wireframe: us05-fatura-leve.png
