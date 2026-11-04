# Wireframe 01 — Bulbe Energia

Esta versão foi preparada para a estrutura **real** do repositório mostrada na captura de tela:

```text
repositorio/
  data/                        # dados já existentes
  pages/
    templates/
      assets/                  # logos e ícones originais da equipe
      template1.html
      template1.css
    Wireframe 01/              # copie esta pasta aqui
      index.html
      visao-geral.html
      css/
      js/
      img/
      pages/
```

**Execução:** abra a pasta raiz do repositório no VS Code; depois clique em `pages/Wireframe 01/index.html` → **Open with Live Server**. A URL deve terminar em `/pages/Wireframe%2001/index.html`. A página de visualização conjunta está em `pages/Wireframe 01/visao-geral.html`.

Os HTMLs referenciam a pasta `pages/templates/assets/` e têm fallback para `assets/` na raiz, caso os ícones estejam lá. Os dados são lidos em `data/` da raiz. Não há pastas compartilhadas duplicadas. O header e footer mantêm os assets originais e as três abas Faturas, Consumo e Indicações. Pix é demonstrativo.

**Importante:** esta pasta deve ser colocada em `pages/`, no mesmo nível de `templates/`, preservando o nome exato `Wireframe 01`.
