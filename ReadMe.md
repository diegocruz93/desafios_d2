Esta é a continuação do desafio_01.

Passo 2:
5 - Alterar a requisição no "/" que devolve hello world para receber a rota "/health" e devolver o texto "API Online V1.0".
6 - Criar uma nova rota para receber o caminho "/users". Essa rota deve devolver um array com 3 usuários no seguinte formato:
{
    nome: "Nome1",
    email: "e1@app.com"
}

7 - Mover essa lista de usuários para fora da rota, de maneira que seja acessível em mais de uma rota.
8 - Criar uma nova rota "/users/1" que deve devolver apenas a primeira posição de array de usuários.