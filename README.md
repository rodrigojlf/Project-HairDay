# ✂️ Hair Day - Agendamento de Cortes

O **Hair Day** é uma aplicação web desenvolvida para a gestão de agendamentos de cortes de cabelo em estabelecimentos como barbearias ou salões de beleza. O projeto permite que os utilizadores escolham uma data, selecionem horários disponíveis e visualizem a lista de agendamentos em tempo real.

Este projeto é um estudo de caso integrante da **Formação Fullstack da Rocketseat**.

## 🚀 Tecnologias e Ferramentas

A aplicação foi construída com as seguintes tecnologias:

* **Frontend**: HTML5, CSS3 e JavaScript (ES6+).
* **Day.js**: Biblioteca utilizada para a manipulação, validação e formatação de datas.
* **Webpack**: Bundler responsável pela compilação de módulos e automação de tarefas.
* **Babel**: Transpilador utilizado para garantir a compatibilidade do JavaScript com diversos navegadores.
* **JSON Server**: Utilizado para simular uma API REST e persistir os dados de agendamento num ficheiro local.

## 📦 Funcionalidades Principal

* **Agendamento Intuitivo**: Formulário para inserção do nome do cliente e seleção da data pretendida.
* **Gestão de Horários**: Listagem dinâmica de horários disponíveis, organizados por períodos: Manhã (09h-12h), Tarde (13h-18h) e Noite (19h-21h).
* **Visualização de Agenda**: Painel lateral para visualização rápida de todos os agendamentos do dia selecionado.
* **Cancelamento**: Funcionalidade para remover agendamentos diretamente da lista.
* **Persistência**: Armazenamento dos dados de agendamento (ID, nome e data/hora) num servidor simulado.

## 🛠️ Como Executar o Projeto

1.  **Instalar as dependências**:
    ```bash
    npm install
    ```

2.  **Iniciar o servidor da API (JSON Server)**:
    O servidor será iniciado na porta `3333` e monitorizará o ficheiro `server.json`.
    ```bash
    npm run server
    ```

3.  **Iniciar o ambiente de desenvolvimento**:
    Executa o Webpack Dev Server para visualização em tempo real.
    ```bash
    npm run dev
    ```

4.  **Gerar a build final**:
    ```bash
    npm run build
    ```

## 📂 Estrutura de Pastas

* `src/main.js`: Ponto de entrada que centraliza a importação de estilos, bibliotecas e módulos de lógica.
* `src/modules/`: Contém a lógica de interação com o formulário, carregamento da página e gestão da interface de agendamentos.
* `src/services/`: Configuração da API e funções de comunicação com o backend (buscar, criar e cancelar agendamentos).
* `src/styles/`: Ficheiros CSS organizados por responsabilidade (global, formulário e listagem).
* `server.json`: Ficheiro que atua como base de dados para os agendamentos.

---
Desenvolvido por **Rodrigo Lima** como parte da Formação Fullstack da Rocketseat.
