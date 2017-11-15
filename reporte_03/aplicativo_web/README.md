# Aplicativo Web Ghost

Para esta tercera entrega se seguirá realizando las pruebas sobre la aplicación [Ghost]

Se han realizado los tipos de prueba:

## E2E Testing Diferentes navegadores, diferentes sistemas operativos.

Diferentes navegadores y diferentes sistemas operativos, haciendo uso del servicio https://crossbrowsertesting.com/ y 
el módulo [selenium-webdriver] se han automatizado el caso de uso de [autenticación de la aplicación]

El script de la prueba se puede encontrar en [este enlace]

### Pruebas en Navegadores de escritorio (13):

#### Pruebas exitosas:

* Windows Vista Chrome 36
* Windows 7 IE10
* Windows 10 Edge 14
* Windows 10 Firefox 49
* Mac OSX 10.8 Safari 6.2
* Mac OSX 10.10 Chrome 50

Url vídeo: https://youtu.be/96Ld0fRUWFw


#### Pruebas Fallidas:

* Windows XP IE06 HTTPS
* Windows XP IE06 HTTP
* Windows 8 Firefox 3.6
* Windows 8 Chrome 25
* Mac OSX 10.8 Firefox 9.0
* Mac OSX 10.9 Opera 12
* Windows Vista Chrome 18

**Razones:**

* Incompatibilidad Javascript.
* Problemas de CSS

Url vídeo: https://youtu.be/BzxA8uNeSBM


### Ejecución de la prueba.

Para realizar el proceso es necesario establecer los parámetros del tipo de prueba que se hará, indicando:

* Navegador y su versión.
* Sistema operativo: su versión y el tipo de sistema operativo (móvil/escritorio)
* Opciones de la prueba (generación de vídeo, captura de pantalla)

#### Ejemplo prueba navegador de escritorio.

```js
var caps = {
    name : 'Login Form Windows 8 Firefox 3.6',
    build :  '1.0',
    version : '3.6', 
    platform : 'Windows 8', 
    screenResolution : '1366x768',
    record_video : 'true',
    record_network : 'true',
    browserName : 'Firefox',
    username : username,
    password : authkey
};
```

## E2E Testing TagUI

Se ha hecho uso de [TagUI] para la ejecución de la de tipo E2E, TagUI ofrece una [extensión que permite la grabación] de la prueba, entregando los pasos que se ejecutarán de la misma a través del cli.

### Grabación de la prueba.

![tagui](https://github.com/jhrubiano10/pruebas_automaticas/blob/master/reporte_03/aplicativo_web/tagui/ejemplo_tagui.gif?raw=true)

### Archivo resultante.

```
http://localhost:2368/ghost/#/subscribers
click .gh-btn-green span
click .email
enter .email as nuevosusbcriber@gmail.com
click .modal-footer .gh-btn-green span
wait 3.5 seconds
```

### Ejecución de la prueba.

![taguicli](https://github.com/jhrubiano10/pruebas_automaticas/blob/master/reporte_03/aplicativo_web/tagui/nuevo_suscriptor.gif?raw=true)

```
./tagui [archivo de la prueba] [chrome|firefox|PhantomJS]
```

```
./tagui new_subscriber chrome
```

### Casos de uso probados.

* [Autenticación al sistema]
* [Creación de una entrada]
* [Eliminar una entrada]
* [Crear un usuario team]
* [Crear un suscriptor]
* [Crear un tag]

Url vídeo: https://youtu.be/neEPhoYkpIM


# Pruebas de seguridad con Snyk.io

Haciendo uso del paquete [snyk] se ha revisado el proyecto Ghost, encontrando 14 vulnerabilidades.

* 5 Severas
* 5 de media severidad.
* 4 de baja severidad.

**[Reporte Snyk Ghost]**

# Pruebas de accesibilidad/vulenaribilidad con Sonarwhal

Se ha hecho uso de de [Sonarwhal] para escanear la aplicación web, el enfoque de está es buscar vulnerabilidades a nivel de front, problemas de accesibilidad e interoperabilidad.

**[Reporte SonarWhal Ghost]**

# Pruebas Monkey Testing con monkeytest.it

[monkeytest.it]:https://monkeytest.it/ analiza los problemas más comunes que tienen la mayoría de los sitios web haciendo uso de monkeys.

**[Reporte monkeytest Ghost]**

# Pruebas velocidad de carga con webpagetest.org

[webpagetest.org] revisa la velocidad de carga de una aplicación web. Está herramienta ayuda a detectar aquellos scripts/imágenes/css que causan que la página tenga una descarga lenta.

**[Reporte webpagetest Ghost]**


### Autor.

* Jorge Rubiano.
* E-mail:jh.rubiano10@unianades.edu.co
* Código: 201510711


License
----
MIT

[Ghost]:https://ghost.org/es/
[selenium-webdriver]:https://www.npmjs.com/package/selenium-webdriver
[este enlace]:https://github.com/jhrubiano10/pruebas_automaticas/blob/master/reporte_03/aplicativo_web/crossbrowser/app.js#L48
[TagUI]:https://github.com/tebelorg/TagUI
[extensión que permite la grabación]:https://chrome.google.com/webstore/detail/tagui-web-automation/egdllmehgfgjebhlkjmcnhiocfcidnjk?hl=en-GB
[Autenticación al sistema]:https://github.com/jhrubiano10/pruebas_automaticas/blob/master/reporte_03/aplicativo_web/tagui/login
[Creación de una entrada]:https://github.com/jhrubiano10/pruebas_automaticas/blob/master/reporte_03/aplicativo_web/tagui/new_history
[Eliminar una entrada]:https://github.com/jhrubiano10/pruebas_automaticas/blob/master/reporte_03/aplicativo_web/tagui/delete_post
[Crear un usuario team]:https://github.com/jhrubiano10/pruebas_automaticas/blob/master/reporte_03/aplicativo_web/tagui/new_team
[Crear un suscriptor]:https://github.com/jhrubiano10/pruebas_automaticas/blob/master/reporte_03/aplicativo_web/tagui/new_subscriber
[Crear un tag]:https://github.com/jhrubiano10/pruebas_automaticas/blob/master/reporte_03/aplicativo_web/tagui/new_tag
[snyk]:https://www.npmjs.com/package/snyk
[Reporte Snyk Ghost]:https://github.com/jhrubiano10/pruebas_automaticas/blob/master/reporte_03/aplicativo_web/reportes/Reporte_ghost_snyk.pdf
[Sonarwhal]:https://sonarwhal.com/
[Reporte SonarWhal Ghost]:https://goo.gl/jMwvJE
[monkeytest.it]:https://monkeytest.it/
[Reporte monkeytest Ghost]:https://goo.gl/FXpwNo
[webpagetest.org]:https://www.webpagetest.org/
[Reporte webpagetest Ghost]:https://goo.gl/vEbyNu
