class DaoMensajes {
  constructor() {}
  create(dtoMensajes){
    var db=new model.Db();
    db.createMensajes(dtoMensajes).then();
  }
  read(id_org,id_dest){
    var db=new model.Db();
    return new Promise(resolve => {
      db.readMensajes(id_org,id_dest).then(dtoMensajes => {
        resolve(dtoMensajes);
      });
    });
  }
}
