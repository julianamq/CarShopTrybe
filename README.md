<h1>Concessionária de Veículos API </h1>
Este projeto foi desenvolvido com o objetivo de criar uma API para gerenciar uma concessionária de veículos. A API foi construída utilizando os princípios da Programação Orientada a Objetos (POO) e a linguagem de programação JavaScript, juntamente com o framework do Mongoose para trabalhar com o banco de dados MongoDB.

<h2>Endpoints da API</h2>
A seguir, apresentamos a lista de endpoints disponíveis na API:

/cars
GET /cars: retorna uma lista de todos os carros cadastrados na concessionária.
POST /cars: cadastra um novo carro na concessionária.
/cars/:id
PUT /cars/:id: atualiza as informações de um carro cadastrado na concessionária.
/motorcycles
GET /motorcycles: retorna uma lista de todas as motos cadastradas na concessionária.
POST /motorcycles: cadastra uma nova moto na concessionária.
/motorcycles/:id
PUT /motorcycles/:id: atualiza as informações de uma moto cadastrada na concessionária.

<h2>Testes</h2>
Foram implementados testes para as camadas de Service, utilizando as bibliotecas chai, sinon e mongoose. A cobertura de testes para a camada de Service deve ser de no mínimo 60%.
