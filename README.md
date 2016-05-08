

Apartados realizados.

Javier no he terminado todos los apartados porque me atasqué en un tema que me costo salir y no he tenido tiempo para investigar como hacer los que me quedan.
La verdad es que llevaba tiempo sin programar nada hasta que empecé con el Master y aun estoy haciendome a Javascript y a los callbacks.

Aun asi la api si que hace cosas como pediste, devuelve resultados y podemos crear anuncios y usuarios con un post desde postman y rellenando los campos de la coleccion para crear el registro.
Asimismo he implementado los filtros de las peticiones de anuncios y la autenticación para peticion  de anuncios y creacion de anuncios a traves de postman, aunque no he sabido como crear el metodo para que automaticamente cuando se cree el token se guarde
en la colección correspondiente asociado al usuario.

En definitiva, de las notas para el desarrollador que adjuntabas en la practica,no he podido hacer ni la 4 que era la del script de vaciado de base de datos y rellenado de nuevo de registros,
y el numero 7 que es la gestión de errores en un módulo.

De los otros apartado no he hecho ni la internacionalización ni todas las opciones de de listar anunción, se me han resistido las de rangos de precios, pero tengo claro que ha sido
porque aun no domino la progrmación y menos aún Javasript.

INDICACIONES PARA USO DE LA APP.

No he sabido hacer el script de borrado y carga de la base de datos, pero teniendo los ficheros que lleva el proyecto , y MONGO arrancado e instalado en una
carpeta con el mismo nombre quq aparace en la linea de comandos abajo indicada, se pueden cargar y ejecutamos el comando abajo indicado en la linea de comandos.

Insertamos anuncios

../mongodb-osx-x86_64-3.2.5/bin/mongoimport --db nodepop --collection anuncios --type json --file ../nodePop3/anuncios.json --jsonArray

Del mismo modo insertamos usuarios.

Insertamos usuarios (Todos los campos de esta coleccion los he puesto requeridos)

../mongodb-osx-x86_64-3.2.5/bin/mongoimport --db nodepop --collection usuarios --type json --file ../nodePop3/usuarios.json --jsonArray

Para arrancar la api entramos en su directrio y ponemos en la linea de comandos "nodemon" y seguimos con mo


Creamos Token para usuario, para que pueda autenticarse y pedir lista de anuncios

En postman ponemos la ruta siguiente haciento un POST

http://localhost:3000/api/v1/usuarios/authenticate

en la pestaña body, marcamos x-ww-for-urlencoded y debajo metemos el email y la clave del usuario, ejecutamos y nos apareceta un
token de autenticacion, tal que asi:

{
  "success": true,
  "toke": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3MmNlNjI0MjQ3ZDdlNzVhMmMwYmMwMyIsImlhdCI6MTQ2MjY2NjkxOSwiZXhwIjoxNDYyODM5NzE5fQ.AzQhuqAw1KSnjVpFRxabXSD4n9qevXM64HOiM2Dd5gk"
}


si copiamos el "toke" y lo metemos en la petición de lista de anuncios nos dará acceso, sino no nos mostrara la
lista de anuncios solicitada.

Si el token no es correcto dirá qie eñ token no es valido.

Por ejemplo así

http://localhost:3000/api/v1/anuncios?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3MmNlNjI0MjQ3ZDdlNzVhMmMwYmMwMyIsImlhdCI6MTQ2MjY2NjkxOSwiZXhwIjoxNDYyODM5NzE5fQ.AzQhuqAw1KSnjVpFRxabXSD4n9qevXM64HOiM2Dd5gk


La api esta preparada para filtrar resultados segun nuestra conveniencia, sí , podemos buscar por tag, por nombre, podemos limitar los resultados para paginarlos
o que empiecen a mostrarse a partir del registro que queramos,asi como pedir si es un articulo que se busca o se vende.

Filtros;
Nombre:Buscamos por nombre;
Tags:Buscamos por las estiquetas de los articulos
Venta:True si esta en venta o false si esta en busqueda por otro usuario.
Sort: Limita en el numero de registros que se muestran.
Start: Comienza a mostrar de los registros obtenidos a partir del que nosotros digamos,con esto hay que llevar cuidado porque si decimos que nos muestre a
partir del tercero por ejemplo, y solo tenemos 1 o 2 registros que coincidan con la busqueda, no se mostrará ninguno.

Estos son algunos ejemplos.

Devuelve anuncios que el articulo se llame Iphone 3gs-

http://localhost:3000/api/v1/anuncios?nombre=iphone 3GS&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3MmNlNjI0MjQ3ZDdlNzVhMmMwYmMwMyIsImlhdCI6MTQ2MjY2NjkxOSwiZXhwIjoxNDYyODM5NzE5fQ.AzQhuqAw1KSnjVpFRxabXSD4n9qevXM64HOiM2Dd5gk

Devuelve anuncios que el articulo de llame bicicleta y una de las etiquetas sea "lifestyle"

http://localhost:3000/api/v1/anuncios?nombre=Bicicleta&tags=lifestyle&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3MmNlNjI0MjQ3ZDdlNzVhMmMwYmMwMyIsImlhdCI6MTQ2MjY2NjkxOSwiZXhwIjoxNDYyODM5NzE5fQ.AzQhuqAw1KSnjVpFRxabXSD4n9qevXM64HOiM2Dd5gk

Creamos anuncios con un POST y rellenando en postman los valores de la coleccion

http://localhost:3000/api/v1/anuncios?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3MmNlNjI0MjQ3ZDdlNzVhMmMwYmMwMyIsImlhdCI6MTQ2MjY2NjkxOSwiZXhwIjoxNDYyODM5NzE5fQ.AzQhuqAw1KSnjVpFRxabXSD4n9qevXM64HOiM2Dd5gk