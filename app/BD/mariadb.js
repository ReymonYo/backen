const sequelize = require('./conexion');
const registros = require('./Tablas/Registros');

init = function(){
    sequelize.authenticate().then(() => {
        console.log("Conexion establecida con la base de datos");

    }).catch(err =>{
        console.error("Conexion no establecida",err);
    });
}

//Get
getUsuarios = function(callback){

//select * from registros
registros.findAll().then(registros => callback(registros));

}
//Get export
module.export.getUsuarios = getUsuarios;

module.exports.init = init;