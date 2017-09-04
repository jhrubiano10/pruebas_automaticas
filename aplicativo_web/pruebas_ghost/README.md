# Pruebas vía Cypress.

Inicialmente se han hecho algunas pruebas haciendo uso de Cypress, tales como:

* Visitar un Blog.
* Suscribirse a un Blog.
* Mostrar entradas de un usuario.
* Autenticación fallida - Correo no existe.
* Autenticación fallida - Contraseña inválida.
* Autenticar usuario.
* Crear una nueva entrada del Blog.

![cy01](https://github.com/jhrubiano10/pruebas_automaticas/blob/master/images/cypress_test_Ghost_01.gif?raw=true)

## Actualización 04/09/2017

Se adicionan nuevas pruebas como son:

* Publicar una entrada.
* Despublicar una entrada.
* Eliminar una entrada.


![cy01](https://github.com/jhrubiano10/pruebas_automaticas/blob/master/images/cypress_test_Ghost_02.gif?raw=true)


* **Ha fallado una prueba ya que el sistema tiene un límite de intentos de autenticación**
* Se intentó que la sesión persistería, pero el sistema maneja un sistema de autenticación basado en tokens (jwt), en este caso guardando el token en localStorage, cada vez que se iniciaba la prueba se limpiaba éste, se intentó hacer uso del comando ```Cypress.Cookies.preserveOnce("connect.sid", "remember_token");``` pero este sólo funciona si hace uso de cookies.

# Autores.

* Olga Lucero Vega Marquez (ol.vegam@uniandes.edu.co) 198714305
* Jorge Rubiano (jh.rubiano10@unianades.edu.co) 201510711
