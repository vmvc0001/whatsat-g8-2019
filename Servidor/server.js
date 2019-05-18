var bodyParser=require("body-parser");
var model=require("./model.js");
var express=require("express");
var http=require("http");
var app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname +'/views')); //permite acceder a los recursos estaticos del directorio views como las imagenes y el css
app.set("view engine","ejs");

app.get("/",function(req,res){
   res.render("index");
 });

app.get("/contactos/:id",function(req,res){
  console.log("id=",req.params.id);
  var dao=new model.DaoContactos();
  dao.read(req.params.id).then(dtoContactos => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Content-Type','application/json');
    res.render("contactos",{"listaContactos":dtoContactos});
  });
});

app.post("/envia",function(req,res){
  var dao=new model.DaoMensajes();
  var dtoMensajes=req.body;
  //var dtoMensajes={"id_org":req.body.id_org,"id_dest":req.body.id_dest,"tipo":req.body.tipo,"contenido":req.body.contenido};
  console.log(dtoMensajes);
  dao.create(dtoMensajes);
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Content-Type', 'application/json');
    res.render("envia",{"status":"enviado"});
});

app.get("/recibe/:id_org/:id_dest",function (req,res) {
  var dao=new model.DaoMensajes();
  dao.read(req.params.id_org,req.params.id_dest).then(dtoMensajes => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Content-Type', 'application/json');
    res.render("recibe",{"mensaje":dtoMensajes});
  });
});

app.get("/test",function(req,res){
	res.render("test");
});

http.createServer(app).listen(6969);
