# Choose!

Este repositório contém o projeto da aplicação Web `Choose!`, que
consiste em um jogo simples onde o usuário deve escolher uma das opções
que aparecem nos botões. <br>
🟥Café ou 🟦Chá ?

# Como utilizar

Basta abrir o arquivo `index.html` em um navegador web ou mobile compatível.

# Sobre

A aplicação gerencia uma lista de questões que são sorteadas aleatoriamente e exibidas para o usuário como duas opções que ele pode escolher. Ao escolher uma opção, outra é sorteada e exibida nos botões.<br>
No canto superior direito, o botão [ <img style="width: 20px" src="./src/assets/language-icon.png"> ] permite alterar a linguagem do site, onde o cotrolador da aplicação altera os textos exibidos de acordo com o idioma atual. Por exemplo, se a linguagem for definida como `"br"`, os textos do app serão traduzidos para o português, se for definida como `"en"`, serão traduzidos para o inglês. <br>
Os textos e as questões para sorteio são organizados em um objeto e filtrados pelo idioma para exibição de acordo com a linguagem do site. Os dados de textos e as questões são armazenados no `Storage` da aplicação.<br>
Também é possível adicionar novas opções que serão sorteadas junto às demais existentes.

# Pontos Avaliados

- [X] A aplicação é original e não uma cópia da aplicação de um colega ou de uma aplicação já existente
- [X] A aplicação tem pelo menos duas interfaces (telas) independentes
- [X] A aplicação armazena e usa de forma relevante dados complexos do usuário
- [X] A aplicação tem pelo menos dois componentes além do componente principal
- [ ] A aplicação tem um componente com rolagem
    - Não foi implementado, pois não se aplica no contexto da aplicação.
- [X] A aplicação tem um campo de formulário que é devidamente tratado
- [X] A aplicação foi desenvolvida com o React Native
- [X] O código da minha aplicação possui comentários explicando cada operação
- [X] A aplicação está funcionando corretamente
- [X] A aplicação está completa