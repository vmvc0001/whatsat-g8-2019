var mysql = require('mysql');

class Db {
  constructor() {
    this.config = mysql.createPool({
      host: "localhost",
      user: "root",
      password: "",
      database: "whatsat2019",
    });
  }

  readContactos(id) {
    var conn = this.config;
    return new Promise(function(resolve, reject) {
      conn.query('SELECT id,surName,name,profileImageUrl FROM contactos WHERE EXISTS (SELECT 1 FROM contactos WHERE id = \''+id+'\')', function(err, result) {
        resolve(result);
      });
    });
  }

  readMensajes(id_org,id_dest) {
    var conn = this.config;
    return new Promise(function(resolve, reject) {
      conn.query('SELECT tipo,contenido FROM mensajes WHERE origen=\''+id_org+'\' and destino=\''+id_dest+'\' and leido=false order by id', function(err, result) {
      conn.query('UPDATE mensajes SET leido=true WHERE origen=\''+id_org+'\' and destino=\''+id_dest+'\' and leido=false');
      resolve(result);
      });
    });
  }

  createMensajes(dtoMensajes) {
    var conn = this.config;
    return new Promise(function(resolve, reject) {
      var sql = 'INSERT INTO mensajes (origen,destino,tipo,contenido,leido) values (?,?,?,?,?)';
      var inserts = [dtoMensajes.id_org, dtoMensajes.id_dest, dtoMensajes.tipo,dtoMensajes.contenido,0];
      sql = mysql.format(sql, inserts);
      conn.query(sql, function(err, result) {
        resolve(result);
      });
    });
  }
}
module.exports.Db = Db;
