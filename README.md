# Da dor do cliente ao app da Bulbe

> Projeto em Ciência de Dados I · Ibmec BH · 2º semestre de 2026
> Cliente: **Bulbe Energia** · Turma **A** · Squad **10**

App de celular em HTML e CSS que resolve cinco dores medidas do cliente novo da Bulbe, da prévia da 1ª fatura ao comprovante de pagamento, reunido num site de apresentação.

---

## 1. Problema

A Bulbe dá desconto na conta de luz com energia solar, mas a comunicação de fatura e pagamento falha nos primeiros meses, e o cliente desiste ou deixa de pagar.

| Dor | Evidência | Fonte |
| --- | --- | --- |
| A 1ª fatura não é reconhecida e parece golpe | 32,4% de inadimplência na 1ª fatura, de set/2025 a jul/2026 | Dado da Bulbe |
| As mensagens vão para o número errado | ~20% das mensagens de WhatsApp não chegam ao destino | Dado da Bulbe |
| A fatura não chega e o suporte demora | 8 dias e 16 horas de tempo médio de resposta do suporte | Reclame Aqui |
| Quem muda de casa cancela o serviço | A mudança de endereço é a 3ª maior causa de churn | Dado da Bulbe |
| O cliente paga e não sabe se o pagamento entrou | Até 3 dias úteis de compensação sem confirmação | Reclame Aqui |

## 2. Personas e jornada

Nome e idade são ilustrativos; as dores vêm de reclamações públicas e de dados da Bulbe.

| Persona | Contexto | User story |
| --- | --- | --- |
| Marlene Aparecida, 58 | Costureira em Contagem | US01 |
| Rogério Alves, 52 | Motorista de aplicativo em BH, dois chips | US02 e US03 |
| Lucas Mendes, 31 | Analista de suporte em BH, de mudança | US04 |
| Ricardo Nogueira, 45 | Ex-cliente cobrado após cancelar | US05 |
| Tatiane Ferreira, 37 | Diarista em Betim | Pesquisa base |

- **Personas:** [docs/personas/](docs/personas/)
- **Mapas de jornada:** [docs/jornada.md](docs/jornada.md)

## 3. Solução

Cada tela entra onde o cliente já toca e termina com uma prova do que foi resolvido. Da tela inicial, o cliente chega a todos os fluxos em até dois toques.

| User story | O que faz | Entrada | Tela inicial |
| --- | --- | --- | --- |
| US01 · Prévia da 1ª fatura | Explica a cobrança antes de ela chegar, com fatura unificada | Sino e aviso da tela inicial | [pages/Wireframe 01/](pages/Wireframe%2001/index.html) |
| US02 · Correção do canal de contato | Corrige o número e confirma por código de 6 dígitos | Foto de perfil | [contato.html](pages/Wireframe02/contato.html) |
| US03 · Reenvio da fatura | Assistente que reenvia a fatura na hora, com protocolo e PIX | Botão Ajuda | [us03-assistente.html](pages/Wireframe03/us03-assistente.html) |
| US04 · Mudança de endereço | Verifica o CEP e transfere o serviço em vez de cancelar | Menu lateral | [Wireframe04/](pages/Wireframe04/index.html) |
| US05 · Confirmação de pagamento e comprovante | Mostra o status do pagamento e o comprovante | Menu lateral | [pagamentos.html](pages/pagamentos.html) |

- **App completo:** [pages/index.html](pages/index.html)
- **Histórias de usuário:** [docs/historias.md](docs/historias.md)
- **Wireframes:** [docs/wireframes/](docs/wireframes/)
- **Design system (Figma da Bulbe):** [docs/apresentacao-final/design-system.md](docs/apresentacao-final/design-system.md)

## 4. Tecnologias

- HTML, CSS e JavaScript puro (vanilla)
- Fonte Poppins, cores e logos oficiais da Bulbe
- Dados fictícios em JSON (pasta [`data/`](data/))
- Git e GitHub (Issues e Pull Requests)

## 5. Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/joaocandd/202602-projeto1-a-10.git
   ```
2. Abra a pasta no VS Code.
3. Instale a extensão **Live Server** (o VS Code vai sugerir automaticamente).
4. Clique com o botão direito em `index.html` e escolha **Open with Live Server**.

> Abrir o `index.html` direto no navegador (duplo clique) pode não funcionar: o `fetch` dos arquivos JSON exige um servidor.

No computador, as setas do teclado mudam de seção da apresentação e a tecla F liga a tela cheia.

## 6. Estrutura do repositório

```
├── index.html            # Apresentação final (site de rolagem)
├── pages/                # Telas do app
│   ├── index.html        # Porta de entrada do app completo
│   ├── Wireframe 01/     # US01 · Prévia da 1ª fatura (e tela inicial)
│   ├── Wireframe02/      # US02 · Canal de contato
│   ├── Wireframe03/      # US03 · Reenvio da fatura
│   ├── Wireframe04/      # US04 · Mudança de endereço
│   ├── pagamentos*.html  # US05 · Pagamentos e comprovante
│   └── templates/        # Templates e app.css comuns
├── assets/
│   ├── css/              # Estilos do site e das telas
│   ├── js/               # Lógica do site e leitura dos dados (fetch)
│   └── img/              # Imagens
├── data/                 # Dados fictícios em JSON
├── docs/                 # Jornada, histórias, personas, wireframes e apresentação
└── .github/              # Modelos de Issue e de Pull Request
```

## 7. Equipe

| Integrante | GitHub | User story | Telas |
| --- | --- | --- | --- |
| Samuel Pascini | [@samuelpascini](https://github.com/samuelpascini) | US01 · Prévia da 1ª fatura | 7 |
| André Coelho | [@andrecoelh](https://github.com/andrecoelh) | US02 · Correção do canal de contato | 2 telas, com 4 estados |
| João Victor Cândido Lopes Silva | [@joaocandd](https://github.com/joaocandd) | US03 · Reenvio da fatura pelo Assistente Bulbe | 5 |
| Miguel Fernando Rocha | [@Chokokito](https://github.com/Chokokito) | US04 · Mudança de endereço | 9 |
| Mariana Vieira Barreto | [@Nightmeari](https://github.com/Nightmeari) | US05 · Confirmação de pagamento e comprovante | 8, 3 delas estados de demonstração |

## 8. Entregas

| Marco | Aula | Status |
| --- | --- | --- |
| Mapa de jornada | 19 | Feito |
| Histórias de usuário | 20 | Feito |
| Wireframes | 21–23 | Feito |
| Sprint Review I | 24 | Feito |
| Implementação | 25–28 | Feito |
| Sprint Review II | 29 | Feito |
| Versão final | 30 | Feito |

---

> Todos os dados de telas deste repositório são fictícios. Nenhum dado real de cliente da Bulbe Energia é utilizado.
