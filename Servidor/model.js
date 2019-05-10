var model = require('./Db.js');

class DaoContactos {
  constructor() {}
  read(id) {
    var db = new model.Db();
    return new Promise(resolve => {
      db.readContactos(id).then(dtoContactos => {
        resolve(dtoContactos);
      });
    });
  }
}

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


module.exports.DaoContactos = DaoContactos;
module.exports.DaoMensajes = DaoMensajes;
