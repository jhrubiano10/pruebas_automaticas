# Pruebas cruzadas grupo 10.

## Aplicaciones web

1. [MantisDB]
2. [OpenSourceBilling]

### Tipos de pruebas.

1. E2E con [TagUI web Automation]
2. Monkey Testing con [gremlinsJS]

#### Uso de TagUI

Se ha hecho uso de TagUI para la creación de pruebas de tipo E2E para las aplicaciones Móviles, TagUI ofrece una extensión que permite la grabación de la prueba, entregando los pasos que se ejecutarán de la misma a través del cli.

![tagui](https://github.com/jhrubiano10/pruebas_automaticas/blob/master/Pruebas_Cruzadas/Pruebas_cruzadas_grupo_10/tagui.gif?raw=true)

**Ejemplo pasos de ejeución - Creación de un cliente opensourcebilling (creacion_usuario)**

```
http://demo.opensourcebilling.org/users/sign_in
click .btn_large.submit
click .nav_container
click //a[text()="Clients Listing" or contains("http://demo.opensourcebilling.org/en/clients",@href)]
click .primary_btn span
click client_organization_name
enter client_organization_name as jsjshasjsahjsajsajhsajksahjsa asjksabdakjdakjdsbakjsdbakjdbkjasbdkasbd
click client_email
enter client_email as asdjadsasdasdas@dsdadasdad.com
enter client_business_phone as 123456791112345678890000000
enter client_first_name as shshshasdasjdgashdgahsjdgajhdgajdsgajsdgjahsdgajdshgdjagdj
enter client_last_name as sdashdgajdgajhdsgajhdsgjahsgdjhagsdjahsgdjasgdjashgdaj
enter client_mobile_number as 323452342342
click available_credit
enter available_credit as 20000
click .fields_content:nth-child(1) .options_content_row:nth-child(1) label
click account_association
click .content_bottom .btn_large.submit
wait 3.5 seconds
```

**Comando de ejeución de la prueba***

```
./tagui [archivo de la prueba] [chrome|firefox|PhantomJS]
```

```
./tagui creacion_usuario chrome
```


## Aplicaciones Móviles:

1. [CarReport]
2. [Glucosio]

### Tipos de pruebas.

1. [Monkey Testing con adb]


# Integrantes
* Olga Lucero Vega Marquez (ol.vegam@uniandes.edu.co) 198714305
* Jorge Rubiano (jh.rubiano10@unianades.edu.co) 201510711

[MantisDB]:https://www.mantisbt.org/
[OpenSourceBilling]:http://opensourcebilling.org/
[CarReport]:https://play.google.com/store/apps/details?id=com.carreport.mobile&hl=es
[Glucosio]:https://play.google.com/store/apps/details?id=org.glucosio.android&hl=es
[gremlinsJS]:https://github.com/marmelab/gremlins.js
[TagUI web Automation]:https://github.com/tebelorg/TagUI
[Monkey Testing con adb]:https://developer.android.com/studio/test/monkey.html
