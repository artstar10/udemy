# Início do projeto - instalando depêndencias do projeto
```
> npm i express --save
> npm i ejs --save
> npm i socket.io --save

```

# Fontes:
cdn socket.io
```
https://cdnjs.com/libraries/socket.io/2.3.0?msclkid=f46c9b35cfa711ecbef634f49b57189c

```
# erros:
# para corrigir o erro 400 (Bad Request) do navegador utilizar a versão 3.0.5 abaixo:
```
https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.0.5/socket.io.js

```
# caso você deseja manter a versão 2.3.0 insira o parâmetro {allowEIO3: true} em index.js:
```
var io = require('socket.io')(http, {allowEIO3: true});

```