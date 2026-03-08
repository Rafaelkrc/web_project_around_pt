# Tripleten web_project_around_pt

# 🌎 Around The U.S.

Projeto desenvolvido para praticar **manipulação do DOM com JavaScript**, criação dinâmica de componentes e interações de interface.

A aplicação permite que o usuário edite o perfil, adicione novos cartões com imagens, curta ou exclua cartões e visualize imagens ampliadas em um modal.

Este projeto faz parte da prática de desenvolvimento **Front-End com JavaScript**.

---

# ✨ Funcionalidades

✔️ Editar nome e descrição do perfil
✔️ Criar novos cartões com título e imagem
✔️ Remover cartões da página
✔️ Curtir cartões
✔️ Visualizar imagem ampliada em modal
✔️ Fechar modais
✔️ Renderizar cartões dinamicamente via JavaScript

---

# 🧠 Conceitos praticados

Este projeto foi desenvolvido para consolidar conhecimentos fundamentais de JavaScript:

- Manipulação do **DOM**
- Uso de **HTML Templates (`<template>`)**
- **Event Listeners**
- Criação dinâmica de elementos
- Manipulação de formulários
- Estruturação de funções reutilizáveis
- Organização de código JavaScript

---

# 🛠 Tecnologias utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**

---

# 📂 Estrutura do projeto

```
.
├── images
│
├── pages
│   └── index.css
│
├── scripts
│   └── index.js
│
├── index.html
└── README.md
```

---

# 📸 Interface da aplicação

## Perfil

O usuário pode editar as informações de perfil através de um modal.

Campos editáveis:

- Nome
- Descrição

---

## Cartões de locais

Os cartões são gerados dinamicamente a partir de um array inicial no JavaScript:

```javascript
initialCards = [
  {
    name: "Vale de Yosemite",
    link: "...",
  },
];
```

Cada cartão possui:

- imagem
- título
- botão de curtir
- botão de excluir

---

## Popup de imagem

Ao clicar na imagem de um cartão:

- a imagem é ampliada
- a legenda aparece
- um modal é aberto

O usuário pode fechar o modal através do botão de fechar.

---

# 📚 Aprendizados

Durante o desenvolvimento deste projeto foram praticados conceitos importantes de desenvolvimento front-end, principalmente:

- manipulação dinâmica de elementos
- estruturação de código JavaScript
- interação do usuário com a interface
- organização de eventos e funções reutilizáveis

---

# 👨‍💻 Autor

Desenvolvido por **Rafael Coelho**
Como parte dos estudos em **Desenvolvimento Web no Bootcamp da TripleTen**.
