# Nota:
App de consola interactiva: Tablas de multiplicar


# Comandos:
```
npm install ó npm i; para instalar o reconstruir los módulos de Node
node app ó node app.js; para correr la aplicacion
```

```
Opciones:
      --help     Muestra ayuda                                        [booleano]
      --version  Muestra número de versión                            [booleano]
  -b, --base     Es la base de la tabla de multiplicar      [número] [requerido]
  -l, --listar   Muestra la tabla en consola         [booleano] [defecto: false]
  -h, --hasta    Este es el numero hasta donde quieres la tabla    [defecto: 10]
```


# Ejemplo para crear una tabla de multiplicar
```
node app -b 1 -l -h 10  ó  node app.js -b 1 -l -h 10
node app --base 1 --listar --hasta 10  ó  node app.js --base 1 --listar --hasta 10
```

```
Resultado:
======================
  Tabla del: 1  
======================
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
1 x 4 = 4
1 x 5 = 5
1 x 6 = 6
1 x 7 = 7
1 x 8 = 8
1 x 9 = 9
1 x 10 = 10

tabla del 1.txt creada
```