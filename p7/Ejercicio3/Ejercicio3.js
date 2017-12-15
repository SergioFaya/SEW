window.onload = function () {
    var meteo = new Object();
    meteo.apikey = "d307a57cbe751709269280ea4f1b5527";
    meteo.ciudad = "Oviedo";
    meteo.unidades = "&units=metric";
    meteo.idioma = "&lang=es";
    meteo.tipo = "&mode=xml";
    meteo.urlIconBase = "http://openweathermap.org/img/w/";
    meteo.url = "http://api.openweathermap.org/data/2.5/weather?q=" + meteo.ciudad + meteo.tipo + meteo.unidades + meteo.idioma + "&APPID=" + meteo.apikey;
    meteo.error = "<h2>¡problemas! No puedo obtener información de <a href='http://openweathermap.org'>OpenWeatherMap</a></h2>";
    meteo.cargarDatos = function () {
        $.ajax({
            dataType: "xml",
            url: this.url,
            method: 'GET',
            success: function (datos) {

                //PresentaciÃ³n del archivo XML en modo texto
                $("h5").text((new XMLSerializer()).serializeToString(datos));

                var totalNodos = $('*', datos).length;
                var ciudad = $('city', datos).attr("name");
                var longitud = $('coord', datos).attr("lon");
                var latitud = $('coord', datos).attr("lat");
                var pais = $('country', datos).text();
                var amanecer = $('sun', datos).attr("rise");
                var minutosZonaHoraria = new Date().getTimezoneOffset();
                var amanecerMiliSeg1970 = Date.parse(amanecer);
                amanecerMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
                var amanecerLocal = (new Date(amanecerMiliSeg1970)).toLocaleTimeString("es-ES");
                var oscurecer = $('sun', datos).attr("set");
                var oscurecerMiliSeg1970 = Date.parse(oscurecer);
                oscurecerMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
                var oscurecerLocal = (new Date(oscurecerMiliSeg1970)).toLocaleTimeString("es-ES");
                var temperatura = $('temperature', datos).attr("value");
                var temperaturaMin = $('temperature', datos).attr("min");
                var temperaturaMax = $('temperature', datos).attr("max");
                var temperaturaUnit = $('temperature', datos).attr("unit");
                var humedad = $('humidity', datos).attr("value");
                var humedadUnit = $('humidity', datos).attr("unit");
                var presion = $('pressure', datos).attr("value");
                var presionUnit = $('pressure', datos).attr("unit");
                var velocidadViento = $('speed', datos).attr("value");
                var nombreViento = $('speed', datos).attr("name");
                var direccionViento = $('direction', datos).attr("value");
                var codigoViento = $('direction', datos).attr("code");
                var nombreDireccionViento = $('direction', datos).attr("name");
                var nubosidad = $('clouds', datos).attr("value");
                var nombreNubosidad = $('clouds', datos).attr("name");
                var visibilidad = $('visibility', datos).attr("value");
                var precipitacionValue = $('precipitation', datos).attr("value");
                var precipitacionMode = $('precipitation', datos).attr("mode");
                var descripcion = $('weather', datos).attr("value");
                var horaMedida = $('lastupdate', datos).attr("value");
                var horaMedidaMiliSeg1970 = Date.parse(horaMedida);
                horaMedidaMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
                var horaMedidaLocal = (new Date(horaMedidaMiliSeg1970)).toLocaleTimeString("es-ES");
                var fechaMedidaLocal = (new Date(horaMedidaMiliSeg1970)).toLocaleDateString("es-ES");
                
                var icon = meteo.urlIconBase + $('weather', datos).attr("icon") + ".png";
                var pNubosidad = "<p>Nubosidad: " + nubosidad + "</p>";
                var pNombreNubosidad = "<p>Nombre nubosidad: " + nombreNubosidad + "</p>";
                var pDescripcion = "<p>Descripción: " + descripcion + "</p>";
                var pPrecipitacion = "<p>Precipitación valor: " + precipitacionValue + "</p>"
                var pModePrecipitacion = "<p>Precipitación modo: " + precipitacionMode + "</p>";
                $("img").attr("src", icon);
                $("#divWeather").append(pNubosidad);
                $("#divWeather").append(pNombreNubosidad);
                $("#divWeather").append(pDescripcion);
                $("#divWeather").append(pPrecipitacion);
                $("#divWeather").append(pModePrecipitacion);
                var pCiudad = "<p>Ciudad: " + ciudad + "</p>"
                var pLong = "<p>Longitud: " + longitud + " grados</p>";
                var pLat = "<p>Latitud: " + latitud + " grados</p>";
                var pPais = "<p>País: " + pais + "</p>";
                $("#divUbicacion").append(pCiudad);
                $("#divUbicacion").append(pPais);
                $("#divUbicacion").append(pLat);
                $("#divUbicacion").append(pLong);
                var pTemperatura = "<p>Temperatura: " + temperatura + " grados Celsius</p>";
                var pTemperaturaMin = "<p>Temperatura mí­nima: " + temperaturaMin + " grados Celsius</p>";
                var pTemperaturaMax = "<p>Temperatura máxima: " + temperaturaMax + " grados Celsius</p>";
                var pTemperaturaUnit = "<p>Temperatura (unidades): " + temperaturaUnit + "</p>";
                var pHumedad = "<p>Humedad: " + humedad + " " + humedadUnit + "</p>";
                var pPresion = "<p>Presión: " + presion + " " + presionUnit + "</p>";
                var pVelocidadViento = "<p>Velocidad del viento: " + velocidadViento + " metros/segundo</p>";
                var pNombreViento = "<p>Nombre del viento: " + nombreViento + "</p>";
                var pDireccionViento = "<p>Dirección del viento: " + direccionViento + " grados</p>";
                var pCodeViento = "<p>Código del viento: " + codigoViento + "</p>";
                var pNombreDireccionViento = "<p>Nombre del viento: " + nombreDireccionViento + "</p>";
                $("#divParametrosTiempo").append(pTemperatura);
                $("#divParametrosTiempo").append(pTemperaturaMin);
                $("#divParametrosTiempo").append(pTemperaturaMax);
                $("#divParametrosTiempo").append(pTemperaturaUnit);
                $("#divParametrosTiempo").append(pHumedad);
                $("#divParametrosTiempo").append(pPresion);
                $("#divParametrosTiempo").append(pVelocidadViento);
                $("#divParametrosTiempo").append(pNombreViento);
                $("#divParametrosTiempo").append(pDireccionViento);
                $("#divParametrosTiempo").append(pCodeViento);
                $("#divParametrosTiempo").append(pNombreDireccionViento);
                var pAmanece = "<p>Amanece a las: " + amanecerLocal + "</p>";
                var pOscurece = "<p>Oscurece a las: " + oscurecerLocal + "</p>";
                var pVisibilidad = "<p>Visibilidad: " + visibilidad + " metros</p>";
                var pHora = "<p>Hora de la medida: " + horaMedidaLocal + "</p>";
                var pFecha = "<p>Fecha de la medida: " + fechaMedidaLocal + "</p>";
                $("#divOtros").append(pAmanece);
                $("#divOtros").append(pOscurece);
                $("#divOtros").append(pVisibilidad);
                $("#divOtros").append(pHora);
                $("#divOtros").append(pFecha);
            },
            error: function () {
                $("h3").html("Â¡Tenemos problemas! No puedo obtener XML de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
                $("h4").remove();
                $("h5").remove();
                $("p").remove();
            }
        });
    }

    meteo.cargarDatos();
}
    /* Ejemplo de XML recibido de http://openweathermap.org
    <?xml version="1.0" encoding="UTF-8"?>
    <current>
        <city id="3114711" name="Oviedo">
            <coord lon="-5.84" lat="43.36"/>
            <country>ES</country>
            <sun rise="2017-11-19T07:23:01" set="2017-11-19T16:54:35"/>
        </city>
        <temperature value="10" min="10" max="10" unit="metric"/>
        <humidity value="81" unit="%"/>
        <pressure value="1023" unit="hPa"/>
        <wind>
            <speed value="2.6" name="Light breeze"/>
            <gusts/>
            <direction value="160" code="SSE" name="South-southeast"/>
        </wind>
        <clouds value="0" name="clear sky"/>
        <visibility value="10000"/>
        <precipitation mode="no"/>
        <weather number="800" value="cielo claro" icon="01n"/>
        <lastupdate value="2017-11-19T22:30:00"/>
    </current>
    */