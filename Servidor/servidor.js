var model=require("./model.js");
var express=require("express");
var http=require("http");
var app=express();
app.set("view engine","ejs");

var router=express.Router();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

router.get("/",function(res,req){
  res.render("index");
});

router.get("/contactos/:id",function(res,req){
  var dao=new model.DaoContactos();
  dao.read(req.params.id).then(dtoContactos => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Content-Type', 'application/json');
    res.render("contactos",{"listaContactos":dtoContactos});
});

router.post("/envia",function(res,req){
  //var dao=new model.DaoMensajes();
  var dtoMensajes=req.body;
  dao.read(req.params.id).then(dtoContactos => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Content-Type', 'application/json');
    resolve(dtoMensajes);
    res.render("envia");
});

router.get("/recibe/:id_org/:id_dest",function (req,res) {

  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Content-Type', 'application/json');

})

app.use("/whatsat",router);
http.createServer(app).listen(80);
