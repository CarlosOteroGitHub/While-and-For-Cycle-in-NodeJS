var express = require("express");
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'jade');

class Mainclass {

	MainMethod(valor){
		var guardar=""

		if(valor == 1){
			guardar+="Números de 7 en 7 al 100 con For";
			for(var i=7; i <= 100; i+=7){
				guardar+="<br>" + i;
			}
		} else if(valor == 2) {
			guardar+="Números de 7 en 7 al 100 con While";
			var i = 7;
			while(i<=100){
				guardar+= "<br>" + i;
				i+=7;
			}
		} else {
			guardar+="Opción fuera de Rango.";
		}

		return guardar;
	}
}

app.get("/", function(req, res){
	res.render("index");
})

app.post('/pagina', function(req, res){
 	var objeto = new Mainclass()
 	res.send(objeto.MainMethod(req.body.opcion))
})

app.listen(8080);

//Programa de ExpressJS del lado del servidor con javascript que pide una opción para iterar un bucle de 7 en 7 hasta el número 100.