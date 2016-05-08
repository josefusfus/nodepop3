
Insertamos anuncios

../mongodb-osx-x86_64-3.2.5/bin/mongoimport --db nodepop --collection anuncios --type json --file ../nodePop3/anuncios.json --jsonArray


Insertamos usuarios

../mongodb-osx-x86_64-3.2.5/bin/mongoimport --db nodepop --collection usuarios --type json --file ../nodePop3/usuarios.json --jsonArray



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

Por ejemplo así

http://localhost:3000/api/v1/anuncios?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU3MmNlNjI0MjQ3ZDdlNzVhMmMwYmMwMyIsImlhdCI6MTQ2MjY2NjkxOSwiZXhwIjoxNDYyODM5NzE5fQ.AzQhuqAw1KSnjVpFRxabXSD4n9qevXM64HOiM2Dd5gk



