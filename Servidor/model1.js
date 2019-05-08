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

  create(dtoMensajes) {
  }

  read(id_org,id_dest) {
  }
}

module.exports.DaoContactos = DaoContactos;
module.exports.DaoMensajes = DaoMensajes;
