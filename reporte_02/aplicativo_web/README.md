# Aplicativo Web Ghost

Para esta segunda entrega se seguirá realizando las pruebas sobre la aplicación [Ghost]

Se han realizado los tipos de prueba:

## E2E Testing.

Diferentes navegadores y diferentes sistemas operativos, tanto móviles como de escritorio, haciendo uso del servicio https://crossbrowsertesting.com/ y 
el módulo [selenium-webdriver] se han automatizado el caso de uso de [autenticación de la aplicación]

![service](https://github.com/jhrubiano10/pruebas_automaticas/blob/master/reporte_02/aplicativo_web/img/Imagen_servicio_crossbrowser.png?raw=true)

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

### Pruebas en Navegadores Móviles (9).

#### Pruebas exitosas:

* Android Galaxy S4 4.2 Chrome 33
* Android Galaxy Note 3 Chrome 58
* Andoid Nexus 9 Chrome 59
* Android Galaxy S5 4.4 [Sleipnir Mobile] 3.5
* iPad 3 iOS 6.1 Safari 6.0
* iPhone 5s Safari 7.1

Url vídeo: https://youtu.be/8LbzoYfY5Cc

#### Pruebas Fallidas:

* Android Galaxy S5 Opera Mini 28
* iPad Pro Safari 9.3
* iPhone 7.0 Safari 10

***Problemas de css y problemas con encontrar elementos en el DoM***

Url vídeo: https://youtu.be/pqP_TTjaPpk

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

#### Ejemplo prueba navegador móvil.

```js
var caps = {
    name : 'Login Form Galaxy Note 3 Chrome Mobile 58',
    build :  '1.0',
    record_video : 'true',
    record_network : 'true',
    browserName : 'Chrome',
    deviceName : 'Galaxy Note 3',
    platformVersion : '4.4',
    platformName: 'Android',
    deviceOrientation: 'portrait',
    username : username,
    password : authkey
};
```

***Se deberá establecer los valores de [usuario y authkey] del servicio***

#### Instalación de paquetes.

```
npm install
```

#### Ejecución del script.

```
node app.js
```

### Reportes de la prueba.

El servicio [Cross Browser Testing] dependiendo de la configuración de la prueba, entregará una serie de información, como vídeo de la prueba, capturas de pantalla, entre otras opciones

![report](https://github.com/jhrubiano10/pruebas_automaticas/blob/master/reporte_02/aplicativo_web/img/Ejemplo_reporte.png?raw=true)


## Pruebas exploratorias en diferentes navegadores.

Se ha realizado pruebas exploratorias de estilos de la aplicación en diferentes navegadores, se ha evidenciado que:

* Desde la versión 9.0 de Internet explorer la aplicación despliegue de la forma correcta.
* En las versiones 5 y 6 la aplicación con certificado de seguridad no carga.
* En antiguos navegadores la aplicación no se despliega de forma correcta como:
  * Internet Explorer 6,7,8
  * [SeaMonkey] 2.0 (Debian)
  * [Konqueror] 4.4 (Debian)

Las capturas de pantalla de la aplicación en diferentes navegadores se puede eviedenciar en la carpeta [browsershots] se hizo uso de los servicios:

* http://browsershots.org/
* http://netrenderer.com/

### Ejemplo Internet Explorer 7.0

![IE7](https://github.com/jhrubiano10/pruebas_automaticas/blob/master/reporte_02/aplicativo_web/browsershots/08_Internet_Explorer_07.png?raw=true)

### Ejemplo Internet SeaMonkey

![SeaMonkey](https://github.com/jhrubiano10/pruebas_automaticas/blob/master/reporte_02/aplicativo_web/browsershots/03_SeaMonkey%202.0.14_Debian.png?raw=true)


### Autores

* Olga Lucero Vega Marquez (ol.vegam@uniandes.edu.co) 198714305
* Jorge Rubiano (jh.rubiano10@unianades.edu.co) 201510711


License
----
MIT

[Ghost]:https://ghost.org/es/
[selenium-webdriver]:https://www.npmjs.com/package/selenium-webdriver
[este enlace]:https://github.com/jhrubiano10/pruebas_automaticas/blob/master/reporte_02/aplicativo_web/crossbrowser/app.js
[Sleipnir Mobile]:https://play.google.com/store/apps/details?id=jp.co.fenrir.android.sleipnir&hl=es
[Cross Browser Testing]:https://crossbrowsertesting.com/
[autenticación de la aplicación]:https://github.com/jhrubiano10/pruebas_automaticas/blob/master/reporte_02/aplicativo_web/crossbrowser/app.js#L48
[usuario y authkey]:https://github.com/jhrubiano10/pruebas_automaticas/blob/master/reporte_02/aplicativo_web/crossbrowser/app.js#L7
[SeaMonkey]:https://www.seamonkey-project.org/
[Konqueror]:https://konqueror.org/features/browser.php
[browsershots]:https://github.com/jhrubiano10/pruebas_automaticas/tree/master/reporte_02/aplicativo_web/browsershots
