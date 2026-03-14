# 🛒 Shopee Cart Simulation

Uma simulação lógica de um sistema de carrinho de compras inspirado na Shopee, desenvolvida em **Node.js**. Este projeto demonstra conceitos fundamentais de programação como manipulação de arrays, funções assíncronas, *factory functions* e lógica de negócio para e-commerce.

## 🚀 Funcionalidades

- **Criação Dinâmica de Itens**: Sistema que gera objetos de produtos com cálculo automático de subtotal.
- **Gestão de Inventário no Carrinho**:
    - Adição inteligente: se o item já existe, apenas a quantidade é incrementada.
    - Remoção unitária: diminui a quantidade ou remove o item se chegar a zero.
    - Eliminação total: remove um produto do carrinho independentemente da quantidade.
- **Sistema de Cupões**: Aplicação de descontos percentuais (ex: 10% ou 20%).
- **Resumo Financeiro**: Exibição detalhada no terminal com Total Bruto, Desconto e Total Líquido.
- **Interface Visual**: Listagem organizada de itens com formatação de colunas.

---

## 🛠️ Estrutura do Projeto

O projeto está dividido em módulos para garantir a separação de responsabilidades:



- `index.js`: O ponto de entrada que simula a experiência do utilizador.
- `services/item.js`: Responsável pela estrutura e criação dos objetos de produto.
- `services/cart.js`: Contém toda a lógica de manipulação e cálculo do carrinho.

---

## 📖 Passo a Passo da Implementação

1.  **Configuração de Ambiente**: Preparação do VS Code com a fonte **Fira Code** para melhor visualização de ligaduras lógicas.
2.  **Modelagem de Dados**: Criação da *Factory Function* para itens, garantindo que o `subtotal` seja sempre recalculado dinamicamente usando `this`.
3.  **Lógica do Carrinho**: Implementação de métodos como `.findIndex()`, `.splice()` e `.reduce()` para gerir o estado do carrinho de forma eficiente.
4.  **Motor de Descontos**: Desenvolvimento de uma lógica que valida códigos de cupão e aplica cálculos matemáticos sobre o total bruto.

---

## 📦 Como Executar

1.  **Pré-requisitos**: Ter o [Node.js](https://nodejs.org/) instalado.
2.  **Configuração**:
    ```bash
    # Inicie o projeto (se ainda não o fez)
    npm init -y
    ```
    *Certifique-se de que o seu `package.json` contém `"type": "module"`.
3.  **Execução**:
    ```bash
    node index.js
    ```

---

## 🔗 Links Úteis

- [Documentação Node.js](https://nodejs.org/pt-br/docs/)
- [Guia sobre Array Methods (MDN)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Repositório Fira Code](https://github.com/tonsky/FiraCode)
- [Cheat Sheet de Markdown](https://www.markdownguide.org/cheat-sheet/)

---
*Projeto desenvolvido para fins didaticos para desafio de nodejs da DIO.*