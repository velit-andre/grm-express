# GRM Express

GRM Express é um projeto Node.js que visa facilitar e automatizar o desenvolvimento de APIs e aplicações back-end, acelerando o desenvolvimento, eliminando tarefas repetitivas e código complexo e extenso.

# Sumary

- [Features](#features)
- [Instalação](#instalação)
- [O projeto](#o-projeto)
- [Ambiente](#ambiente)
- [Recomendações](#recomendações)
- [Contato](#contato)
- [Licence](#licence)


# Features

- Criação automática de Routes
- Criação automática de Controllers
- Criação automática de Models
- Integração automática com banco MongoDB
- Código organizado por módulos e classes
- Controle de validação dos parâmetros da API
- Controle de sessão
- Controle de usuários
- Interface de Linha de Comandos (CLI)

# Instalação
 
 Baixe o projeto:
 
```sh
$ git clone https://github.com/geilsonrm/grm-express nomeDoProjeto
```

Acesse o projeto e instale as dependências:
```sh
$ npm install
```

Inicie o MongoDB:
```sh
$ mongod
```

Inicie o Projeto:
```sh
$ nodemon
```

# O projeto

A utilização é muito simples, basta baixar e rodar, com isso você terá:
- Um servidor rodando na porta pré-definida
- Uma collection para usuários criada automaticamente no MongoDB
- Uma API pronta para autenticação de usuário (login).
- Controle de sessão
- E muito mais...
 
Novas APIs poderão ser facilmente adicionadas através de comandos:

```sh
$ grm api financeiro
```

Ao executar o comando para criação de nova API, irá ocorrer automaticamente:

- Criação de nova API organizada e estruturada por módulos
- Criação de rotas para a API (GET, POST, PUT, DELETE...)
- Criação de modelo de schema para o banco
- Criação da collection no banco
- Inserção de dados pré-definidos na collection
- Criação de modelo de agendamento de tarefas

(Todas ações acima poderão ser facilmente editadas e customizadas)

Quando uma nova API é criada, imediatamente estará pronta para testes.

A rota será o nome da API criada, mas poderá ser facilmente alterada, para acessar basta inserir a url no navegador:

localhost:3000/api/financeiro

[**saiba mais**](doc/projeto.md).

# Ambiente!

Para rodar o projeto certifique-se de ter o ambiente preparado [[**detalhes**](doc/ambiente.md)].

# Recomendações

Recomendação de alguns aplicativos e plugins [[**detalhes**](doc/recomendacao.md)].

# Implemente seu código

Veja [**aqui**](doc/implemente.md) como adicionar o seu código ao projeto.

# Contato

Em caso de problemas, erros, críticas ou sugestão, clique [**aqui**](https://github.com/geilsonrm/grm-express/issues), mas lembre-se de ser claro e informar o máximo de detalhes possíveis.

> Caso precise de algum módulo customizado e tenha interesse em trabalho freelancer, escreva para: geilsonrm@hotmail.com

# License

[Leia-me](doc/licence.md)

# Contribuidores

(...)

# Autor

| [<img src="https://avatars1.githubusercontent.com/u/10155481?s=460&v=4"><br><sub>@geilsonrm</sub>](https://github.com/geilsonrm) |
| :---: |



[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [cmder]: <http://cmder.net/>
   [Swagger]: <https://swagger.io/>
   [Postman]: <https://www.getpostman.com/apps>
   [Visual Studio Code]: <https://code.visualstudio.com/download>
   [MongoDB]: <https://www.mongodb.com/download-center?jmp=nav#atlas>
   [node.js]: <https://nodejs.org/en/download/>
   [Git]: <https://git-scm.com/downloads>
   