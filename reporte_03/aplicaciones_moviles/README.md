# Aplicaciones Móviles - AntenaPod y Loop Habit Tracker

Se han realizado las siguientes pruebas.

# Monkey Testing con Monkop.com

[Monkop.com] es un servicio que permite probar hasta seis dispositivos en modo Monkey Testing, 
la elección de estos es aleatoria. Al finalizar la prueba se genera un reporte mostrando el proceso realizado.

![Monkop](https://github.com/jhrubiano10/pruebas_automaticas/blob/master/reporte_03/aplicaciones_moviles/img/ejemplo_mokop_report.png?raw=true)

## AntenaPod

### Dispositivos probados.

* Samsung Galaxy Note 3
* Samsung Galaxy S III
* Moto G (XT1031)	5.1
* Moto X 2014
* Acer Iconia A1-810
* Droid Turbo 2

#### Ejecución

* Url vídeo ejecución: https://youtu.be/Zju0VteLRSM
* Url reporte Monkop: https://goo.gl/C6Vsis

## Loop Habit Tracker

### Dispositivos probados.

* Samsung Galaxy S III
* HTC One (M7)
* Moto G
* Moto X 2014
* Acer Iconia
* Droid Turbo 2

#### Ejecución

* Url vídeo ejecución: https://youtu.be/6nCo6ICfJio
* Url reporte Monkop: https://goo.gl/8DeopG

# Monkey Testing con AWS Device Farm

[AWS Device Farm] permite ejecutar pruebas sobre aplicaciones móviles (tanto nativas como híbridas).
Para las pruebas se ha hecho uso de las opciones de tipo Monkey (Built-in: Fuzz) y pruebas con Calabash ***(sólo para AntennaPod)***

![AWSDF](https://github.com/jhrubiano10/pruebas_automaticas/blob/master/reporte_03/aplicaciones_moviles/img_aws/08_aws_farm.png?raw=true)

### Dispositivos probados.

Para la prueba se ha hecho uso de los mismos dispositivos para las dos aplicaciones y para los dos tipos de prueba.

* ASUS Nexus 7 - 2nd Gen (WiFi)
* Google Pixel
* Google Pixel XL
* HTC Desire 526G+
* HTC One M8 (Sprint)
* HTC One M9
* Samsung Galaxy A3-6
* Samsung Galaxy Grand Neo Plus
* Samsung Galaxy Light (MetroPCS)
* Samsung Galaxy S8+ (T-Mobile)
* Sony Xperia Z2
* Sony Xperia Z3 Compact
* Sony Xperia Z5

## AntenaPod Monkey Testing AWS Device Farm

#### Ejecución

* Url vídeo ejecución: https://youtu.be/swk0rpgl7mM

## AntenaPod BDD Calabash AWS Device Farm

### Dispositivos probados.

Se ha probado los casos de uso como son:

* Agregar un Podcast
* Buscar un Podcast.
* Reproducir un Podcast

Estas casos se pueden evidenciar en el archivo de [features de la prueba]

![calabashtest](https://github.com/jhrubiano10/pruebas_automaticas/blob/master/reporte_03/aplicaciones_moviles/antennaPod/img/calabash/01_Dispositivos_test.png?raw=true)

La prueba falló en varios dispositivos, es posible ver los errores en la carpeta de [imágenes calabash de AntennaPod]

#### Ejecución

* Url vídeo ejecución: https://youtu.be/h2rAMCS_iR8

## Loop Habit Tracker Testing AWS Device Farm

![habit](https://github.com/jhrubiano10/pruebas_automaticas/blob/master/reporte_03/aplicaciones_moviles/habits/Dispositivos_test.png?raw=true)

#### Ejecución

* Url vídeo ejecución: https://youtu.be/Nv-iaKq4cuQ


### Autor.

* Jorge Rubiano.
* E-mail:jh.rubiano10@unianades.edu.co
* Código: 201510711

License
----
MIT

[Monkop.com]:https://www.monkop.com/
[AWS Device Farm]:https://aws.amazon.com/es/device-farm/
[features de la prueba]:https://github.com/jhrubiano10/pruebas_automaticas/blob/master/reporte_03/aplicaciones_moviles/antennaPod/features/features_AntenaPod.feature
[imágenes calabash de AntennaPod]:https://github.com/jhrubiano10/pruebas_automaticas/tree/master/reporte_03/aplicaciones_moviles/antennaPod/img/calabash
