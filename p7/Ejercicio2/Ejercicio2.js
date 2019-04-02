
window.onload = function () {
    var meteo = new Object();
    meteo.apikey = "d307a57cbe751709269280ea4f1b5527";
    meteo.ciudad = "Oviedo";
    meteo.unidades = "&units=metric";
    meteo.idioma = "&lang=es";
    meteo.urlIconBase = "http://openweathermap.org/img/w/";
    meteo.url = "http://api.openweathermap.org/data/2.5/weather?q=" + meteo.ciudad + meteo.unidades + meteo.idioma + "&APPID=" + meteo.apikey;
    meteo.error = "<h2>¡problemas! No puedo obtener información de <a href='http://openweathermap.org'>OpenWeatherMap</a></h2>";
    meteo.cargarDatos = function () {
        $.ajax({
            dataType: "json",
            url: meteo.url,
            method: 'GET',
            success: function (data) {
                meteo.datos = data;
                meteo.verDatos();
            },
            error: function () {
                document.write(meteo.error);
            }
        });
    }
    meteo.verDatos = function () {
        document.write('<meta charset = "utf-8">');
        document.write('<title>El tiempo.</title>');
        document.write('<link rel="stylesheet" href="Ejercicio2.css">');
        document.write("<h1>El tiempo</h1>");
        document.write("<div id = 'divWeather'>");
        document.write("<img src='" + meteo.urlIconBase + meteo.datos.weather[0].icon + ".png'>");
        document.write("<p>Nubosidad: " + meteo.datos.clouds.all + " %</p>");
        document.write("<p>Descripción: " + meteo.datos.weather[0].description + "</p>");
        document.write("</div>");
        document.write("<h2>Ubicacion</h2>")
        document.write("<div id = 'divUbicacion'>");
        document.write("<p>Ciudad: " + meteo.datos.name + "</p>");
        document.write("<p>País: " + meteo.datos.sys.country + "</p>");
        document.write("<p>Latitud: " + meteo.datos.coord.lat + " grados</p>");
        document.write("<p>Longitud: " + meteo.datos.coord.lon + " grados</p>");
        document.write("</div>");
        document.write("<h2>Medicion de datos</h2>");
        document.write("<div id = 'divParametrosTiempo'>");
        document.write("<p>Temperatura: " + meteo.datos.main.temp + " grados Celsius</p>");
        document.write("<p>Temperatura máxima: " + meteo.datos.main.temp_max + " grados Celsius</p>");
        document.write("<p>Temperatura mínima: " + meteo.datos.main.temp_min + " grados Celsius</p>");
        document.write("<p>Presión: " + meteo.datos.main.pressure + " milímetros</p>");
        document.write("<p>Humedad: " + meteo.datos.main.humidity + "%</p>");
        document.write("<p>Dirección del viento: " + meteo.datos.wind.deg + "  grados</p>");
        document.write("<p>Velocidad del viento: " + meteo.datos.wind.speed + " metros/segundo</p>");
        document.write("</div>");
        document.write("<h2>Otros parametros</h2>");
        document.write("<div id = 'divOtros'>");
        document.write("<p>Amanece a las: " + new Date(meteo.datos.sys.sunrise * 1000).toLocaleTimeString() + "</p>");
        document.write("<p>Oscurece a las: " + new Date(meteo.datos.sys.sunset * 1000).toLocaleTimeString() + "</p>");
        document.write("<p>Hora de la medida: " + new Date(meteo.datos.dt * 1000).toLocaleTimeString() + "</p>");
        document.write("<p>Fecha de la medida: " + new Date(meteo.datos.dt * 1000).toLocaleDateString() + "</p>");
        document.write("<p>Visibilidad: " + meteo.datos.visibility + " metros</p>");
        document.write("</div>");
        document.write('<button id = "loadJson" >Actualizar</button>')
    };

    meteo.cargarDatos();
}
