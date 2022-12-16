## Todas em Tech(TeT) do curso de Desenvolvedora Backend | Turma On19 da [{Reprograma}](https://www.reprograma.com.br/) 
<br>
<br>
<p align="center">
  <img src="https://github.com/liliatatyany/SafeSpace-projeto-livre-on19/blob/main/assets/logo1.png?raw=true";/>
</p>

Este projeto é uma API com CRUD completo que contém um banco de dados, Autenticação e Login.

<br>

<!--ts-->

- [Todas em Tech(TeT) do curso de Desenvolvedora Backend | Turma On19 da {Reprograma}](#todas-em-techtet-do-curso-de-desenvolvedora-backend--turma-on19-da-reprograma)
- [:rocket:Apresentação](https://github.com/liliatatyany/SafeSpace-projeto-livre-on19/edit/main/README.md#rocket-apresenta%C3%A7%C3%A3o)
- [:deciduous_tree: Preparando o Ambiente](https://github.com/liliatatyany/SafeSpace-projeto-livre-on19/edit/main/README.md#deciduous_tree-preparando-o-ambiente)
- [:bricks: Arquitetura](https://github.com/liliatatyany/SafeSpace-projeto-livre-on19/edit/main/README.md#bricks-arquitetura)
- [:red_car: Rotas - Swagger](https://github.com/liliatatyany/SafeSpace-projeto-livre-on19/edit/main/README.md#red_car-rotas---swagger)
- [:bookmark_tabs: Documentação](https://github.com/liliatatyany/SafeSpace-projeto-livre-on19/edit/main/README.md#bookmark_tabs-documenta%C3%A7%C3%A3o)
- [:woman_technologist: Tecnologias Utilizadas](https://github.com/liliatatyany/SafeSpace-projeto-livre-on19/edit/main/README.md#woman_technologist-tecnologias-utilizadas)
- [:clinking_glasses: Agradecimentos](https://github.com/liliatatyany/SafeSpace-projeto-livre-on19/edit/main/README.md#clinking_glasses-agradecimentos)
- [:mage_woman: Autora](https://github.com/liliatatyany/SafeSpace-projeto-livre-on19/edit/main/README.md#mage_woman-autora)

<!--ts-->

<br>
<br>

## :rocket: Apresentação



O SafeSpace é uma API que pretende listar lugares avaliados como seguros e inclusivos para mulheres, pessoas com crianças, PCD, LGBTQIAPN+ e obesas na cidade de Maceió. A API é projeto final da turma de backend On19 da Reprograma e foi criada baseda em experiências da minha vida e que com certeza podem ser na vida de outras pessoas. Eu sempre andei muito sozinha, em diversos tipos de eventos, e me sentir segura em um local sempre fazia com que eu retornasse. O fato também de ter sido obesa até os meus 21 anos, me fez perceber que muitos locais podem ser excluir pessoas de diversas maneiras. Cadeiras e banheiros pequenos, falta de rampas e lugares apertados, falta de estrura para crianças (como espaço kids, fraldarios em banheiros femininos e masculinos). 

O meu intuito com isso é dar visibilidade a receber todas os tipos de pessoas, oferencendo a elas um lugar agradável e seguro para viverem bons momentos sozinhos, com amigos, amores e família. 


## :woman_technologist: Tecnologias Utilizadas

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação. |
| `node.js`    | Ambiente de execução do javascript.|
| `express`    | Framework NodeJS. |
| `mongoose`   | Dependência que interage com o MongoDB para a conexão da database, criação do model e das collections.|
| `nodemon`    | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente.|
| `npm ou yarn`| Gerenciador de pacotes.|
| `MongoDb`    | Banco de dados não relacional orietado a documentos.|
| `Mongo Atlas`| Interface gráfica para verificar se os dados foram persistidos.|
| `Postman` | Interface gráfica para realizar os testes.|
| `jsonwebtoken `| Dependência que implementa o protocolo JSON Web Token.|
| `bcrypt`| Bcryptjs é uma biblioteca para encriptação de dados. Neste caso, o dado a ser criptografado é o password.|
| `dotenv`| Dependência  para gerenciar facilmente variáveis de ambiente, não é obrigatório para JWT, mas uma boa prática para configurações em geral.|
| `swagger`| Gera a documentação.|
| `render`| hospeda a documentação.|



## :deciduous_tree: Preparando o Ambiente 
:love_you_gesture: Para executar este projeto, você deverá ter instalado o Node.js e as dependências do npm. Seguiremos a ordem de instalações no terminal:
```
 Clone o projeto através do comando: $git clone https://github.com/liliatatyany/SafeSpace-projeto-livre-on19
 npm init -y
 npm install
 npm install express
 npm install nodemon
 npm install mongoose
 npm i --save-dev dotenv
 npm install jsonwebtoken --save
 npm install bcrypt --save
 npm install --save-exact jest@28.1.0 --save-dev
 Inicialize com o comando npm start para que você possa executar.
```


## :bricks: Arquitetura 
```
 📁Projeto-Final
   |--📁 Assets
   |--📁 material
   |--📁node_modules
   |
   |--📁 src
   |  |
   |  ||--📁 controllers
   |  |    |- 📄 estabelecimentosControllers.js
   |  |     
   |  ||--📁 database
   |  |    |- 📄 dbconnect.js
   |  |
   |  ||--📁 models
   |  |    |- 📄 estabelecimentosModel.js
   |  |
   |  ||--📁 routes
   |  |    |- 📄 estabelecimentosRoutes.js
   |  |
   |  ||-📄 app.js
   |  |
   |  |--📁 swagger
   |  |   |- 📄 swagger_output.json
   |  |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 README.md
   |- 📄 server.js
   |- 📄 swagger.js

```
## :red_car: Rotas - Swagger 

<p align="center">
<img src="https://github.com/liliatatyany/SafeSpace-projeto-livre-on19/blob/main/assets/swagger.png"/>
</p>

## :bookmark_tabs: Documentação 

- [Swagger](http://localhost:1313/rota-de-documentacao/safespace/)
- Render- https://safespace.onrender.com

## :clinking_glasses: Agradecimentos
Agradeço a todas as professoras que me permitiram chegar onde eu cheguei, ao Reprograma pela iniciatiava não somente inspiradora como acolhedora também. As minhas irmãs [Shirlene Teles](https://www.linkedin.com/in/shirleneteles/), [Cibelle Sena](https://www.linkedin.com/in/cibellesena/) e [Judy Santos](https://www.linkedin.com/in/judy-santos/) que me ajudaram em muitos momentos e são a melhor parte desse projeto. Não foi fácil mas eu consegui e eu estou muito orgulhosa do meu trabalho. 

## :mage_woman: Autora

<p align="center">
<a>
 <img align="center" alt="Rafa-pic" height="150" style="border-radius: 10%;" src="https://media.licdn.com/dms/image/C4E03AQH3fPMS69Tmww/profile-displayphoto-shrink_800_800/0/1656534411509?e=1676505600&v=beta&t=aYDykgZ3jnMKzZmTmH0kv96k0i75dGn9m65S3fHNww4" alt="Foto de Perfil de Lilia Oliveira"/>
 <br/>
</a>
</p>
<p>
<p align="center">Eu sou Lília, sou alagoana, tenho 29 anos,atualmente sou estudante de Desenvolvimento de sistema back-end e estou me arriscando no mundo da tecnologia pois eu acredito que a mesma tem um fator social importante, potendo impactar milhares de vidas, inclusive a minha. :heart_on_fire:.</p>

<p align="center"> Desenvolvido por <a href="https://www.linkedin.com/in/liliaferreira/" target="_blank"><img src="https://img.shields.io/badge/-Lilia_Ferreira-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/liliaferreira/" target="_blank"></a> </p>

<p align="center">
 <a href = "mailto:liliatatyany@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>
</p>

## Obrigada!!!
<p align="center">
<img src="https://github.com/liliatatyany/SafeSpace-projeto-livre-on19/blob/main/assets/unnamed%20(1).gif?raw=true"/>
</p>
