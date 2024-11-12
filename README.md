# Projeto de Automação de Imagens Docker com GitHub Actions

Este projeto tem como objetivo automatizar a construção, teste e deploy de uma aplicação web composta por três componentes principais:
- **Front-end**: Construído com React.
- **Back-end**: Construído com Node.js e Express.
- **Banco de Dados**: Utilizando PostgreSQL.

### Estrutura de Dockerfiles
Cada componente possui um `Dockerfile` próprio, localizado na respectiva pasta (`/frontend`, `/backend` e `/database`). Esses arquivos definem as etapas de instalação de dependências, build e exposição de portas para os serviços.

### Workflows Automatizados
Dois workflows foram configurados no GitHub Actions:
1. **Build and Test**: Este workflow é acionado a cada push ou pull request na branch `main` e realiza o build e teste de cada imagem Docker.
2. **Deploy**: Este workflow é acionado ao criar uma nova tag de versão, realizando o push das imagens para o Docker Hub.

Esse processo garante que a aplicação está sempre pronta para ser testada e implantada de forma automatizada e contínua.
