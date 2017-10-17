# Aplicaciones Móviles - AntenaPod y Loop Habit Tracker

Se han realizado las siguientes pruebas.

## Prueba Robo<sup id="a1">[1](#f1)</sup> Firebase Test Labs

Haciendo uso del servicio [firebase test lab] se han probado las dos aplicaciones móviles (AntenaPod y Loop Habit Tracker)

### AntenaPod

![AntenaPod](https://github.com/jhrubiano10/pruebas_automaticas/blob/master/reporte_02/aplicaciones_moviles/firebase/AntennaPod/sitemap_10_API_19_AntenaPod.png?raw=true)

**Dispositivos:**

* Nexus 10 API 19
* Nexus 7 (2012) API 19
* Moto G Segunda Generación API 19
* Nexus 6 (Virtual) API 21
* Xperia Z3 API 21 - Minuto

Url vídeo: https://youtu.be/k0TMTHNlYB4

### Loop Habit Tracker

![Loop](https://github.com/jhrubiano10/pruebas_automaticas/blob/master/reporte_02/aplicaciones_moviles/firebase/Loop%20Habit%20Tracker/sitemap.png?raw=true)

**Dispositivos:**

* HTC ONE M8 API 19
* Nexus 5 API 23
* Pixel API 26

Url vídeo: https://youtu.be/yGEgJjKEV5w

###### El servicio tiene un límite de equipos de uso en la cuenta gratuita.

## Prueba BDD Calabash.

### AntenaPod

Se han probado los siguientes casos de uso:

![calabash](https://github.com/jhrubiano10/pruebas_automaticas/blob/master/reporte_02/aplicaciones_moviles/Calabash/Calabash_AntennaPod.gif?raw=true)


* Agregar un Podcast
* Buscar un Podcast.
* Reproducir un Podcast
* Marcar como favorito un Podcast.
* Eliminar un Podcast

Estas pasos se pueden evidenciar en el archivo de [features de la prueba] se han utilizado los [Steps Predefinidos] de Calabash.

Url vídeo:https://youtu.be/2REi758YzrM

### Autores

* Olga Lucero Vega Marquez (ol.vegam@uniandes.edu.co) 198714305
* Jorge Rubiano (jh.rubiano10@unianades.edu.co) 201510711


License
----
MIT


<b id="f1">1</b> La prueba Robo analiza la estructura de la IU de tu app. A diferencia de la prueba Exerciser Monkey para IU/aplicaciones, la prueba Robo siempre simula las mismas actividades del usuario en el mismo orden cuando la usas para probar una app en una configuración del dispositivo específica con la misma configuración de tiempo de espera y profundidad máxima. https://firebase.google.com/docs/test-lab/robo-ux-test?hl=es-419 

[firebase test lab]:https://firebase.google.com/docs/test-lab/?hl=es-419
[features de la prueba]:https://github.com/jhrubiano10/pruebas_automaticas/blob/master/reporte_02/aplicaciones_moviles/Calabash/AntennaPod/features/features_AntenaPod.feature
[Steps Predefinidos]:https://github.com/calabash/calabash-android/blob/master/ruby-gem/lib/calabash-android/canned_steps.md
