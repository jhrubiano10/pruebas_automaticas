//Ejemplo tomado de: https://help.crossbrowsertesting.com/selenium-testing/getting-started/javascript/
var webdriver = require('selenium-webdriver');
var SeleniumServer = require('selenium-webdriver/remote').SeleniumServer;
var request = require('request');
var remoteHub = 'http://hub.crossbrowsertesting.com:80/wd/hub';

var username = 'Reemplazar con el correo electrónico establecido en crossbrowsertesting';
var authkey = 'Reemplzar con el authkey del servicio crossbrowsertesting';

/*
    Configuración de la prueba:
    * Sistema operativo.
    * Navegador.
    * Resolución.
*/
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

var sessionId = null;
webdriver.promise.controlFlow().on('uncaughtException', webdriverErrorHandler);

console.log('Connection to the CrossBrowserTesting remote server');

var driver = new webdriver.Builder()
            .usingServer(remoteHub)
            .withCapabilities(caps)
            .build();

console.log('Waiting on the browser to be launched and the session to start');

driver.getSession().then(function(session){
    sessionId = session.id_;
    console.log('Session ID: ', sessionId); 
    console.log('See your test run at: https://app.crossbrowsertesting.com/selenium/' + sessionId)
});

//Es la url de Ghost que se utilizó, se hizo uso de ngrok para servir el localhost...
driver.get('https://33fea142.ngrok.io/ghost/');

driver.call(takeSnapshot);

//Busca el campo de identificación de la página...
driver.findElement(webdriver.By.name("identification")).sendKeys("jh.rubiano10@uniandes.edu.co");

//Busca el campo de password y establece la contraseña...
driver.findElement(webdriver.By.xpath("//*[@type=\"password\"]")).sendKeys("12345678");

//Hace una captura de pantalla...
driver.call(takeSnapshot);

//Click en el botón de enviar del formulario de registro...
driver.findElement(webdriver.By.css("button[type=submit]")).click();

//Espera hasta que el elemento con nombre de clase "gh-nav" exista...
driver.wait(webdriver.until.elementLocated(webdriver.By.className("gh-nav")), 10000);

//Hace una captura de pantalla...
driver.call(takeSnapshot);

//Salir del driver...
driver.quit()

//Establecer si se ha pasado la prueba..
driver.call(setScore, null, 'pass').then(function(result){
    console.log('set score to pass')
});


//Call API to set the score
function setScore(score) {

    //webdriver has built-in promise to use
    var deferred = webdriver.promise.defer();
    var result = { error: false, message: null }

    if (sessionId){
        
        request({
            method: 'PUT',
            uri: 'https://crossbrowsertesting.com/api/v3/selenium/' + sessionId,
            body: {'action': 'set_score', 'score': score },
            json: true
        },
        function(error, response, body) {
            if (error) {
                result.error = true;
                result.message = error;
            }
            else if (response.statusCode !== 200){
                result.error = true;
                result.message = body;
            }
            else{
                result.error = false;
                result.message = 'success';
            }

            deferred.fulfill(result);
        })
        .auth(username, authkey);
    }
    else{
        result.error = true;
        result.message = 'Session Id was not defined';
        deferred.fulfill(result);
    }

    return deferred.promise;
}

//Call API to get a snapshot 
function takeSnapshot() {

    //webdriver has built-in promise to use
    var deferred = webdriver.promise.defer();
    var result = { error: false, message: null }
    
    if (sessionId){

       
        request.post(
            'https://crossbrowsertesting.com/api/v3/selenium/' + sessionId + '/snapshots', 
            function(error, response, body) {
                if (error) {
                    result.error = true;
                    result.message = error;
                }
                else if (response.statusCode !== 200){
                    result.error = true;
                    result.message = body;
                }
                else{
                    result.error = false;
                    result.message = 'success';
                }
                //console.log('fulfilling promise in takeSnapshot')
                deferred.fulfill(result);
            }
        )
        .auth(username,authkey);
        
    }
    else{
        result.error = true;
        result.message = 'Session Id was not defined';
        deferred.fulfill(result); //never call reject as we don't need this to actually stop the test
    }

    return deferred.promise;
}

//general error catching function
function webdriverErrorHandler(err){

    console.error('There was an unhandled exception! ' + err);

    //if we had a session, end it and mark failed
    if (driver && sessionId){
        driver.quit();
        setScore('fail').then(function(result){
            console.log('set score to fail')
        })
    }
}