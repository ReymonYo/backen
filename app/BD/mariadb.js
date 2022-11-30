const sequelize = require('./conexion');
const Registros = require('./Tablas/Registros');

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
Registros.findAll().then(registro => callback(registro));

}
//Get export
module.exports.getUsuarios = getUsuarios;

module.exports.init = init;