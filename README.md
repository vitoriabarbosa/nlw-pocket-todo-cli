# 📌 Sistema de Metas
Um simples sistema de gerenciamento de metas e tarefas usando `Node.js` e `Inquirer.js`.

---
## 🚀 Funcionalidades

- ✅ Cadastrar metas
- ✅ Listar metas
- ✅ Marcar/desmarcar metas como concluídas
- ✅ Visualizar metas realizadas
- ✅ Visualizar metas abertas
- ✅ Deletar metas

---
## 📦 Requisitos

- Node.js instalado (versão 14+ recomendada)
- npm instalado (vem junto com o Node.js)<br><br>


## 🔧 Instalação

1. Clone o repositório:
```bash
  git clone https://github.com/vitoriabarbosa/nlw-pocket-todo-cli.git
```

2. Acesse a pasta do projeto:
```bash
  cd nlw-pocket-todo-cli
```

3. Instale as dependências:
```bash
  npm install
```
<br><br>


## ▶️ Como Usar

Execute o projeto com:
```bash
  node index.js
```
Navegue pelo menu interativo para cadastrar, listar e gerenciar suas metas. As metas serão salvas no arquivo `todos.json` automaticamente.

---
## 🛠 Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Inquirer.js** - Biblioteca para interface interativa no terminal
- **FS (File System)** - Módulo para manipulação de arquivos

---
## 📜 Estrutura do Projeto
```
  📂 nlw-pocket-todo-cli
  ├── 📄 index.js        # Arquivo principal do sistema
  ├── 📄 todos.json      # Armazena as metas cadastradas
  ├── 📄 package.json    # Configuração do projeto Node.js
  ├── 📄 todo.md         # Lista de funcionalidades implementadas e pendentes
  ├── 📄 class.md        # Anotações sobre conceitos de programação
  └── 📄 README.md       # Documentação do projeto
```

---
## 🎯 Exemplo de Uso
```
  Bem-vindo ao sistema de metas!

  Menu >
    Cadastrar meta
  > Listar metas
    Metas realizadas
    Metas abertas
    Deletar metas
    Sair
```

---
## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
