const sequelize = require('./conexion');

init = function(){
    sequelize.authenticate().then(() => {
        console.log("Conexion establecida con la base de datos");

    }).catch(err =>{
        console.error("Conexion no establecida",err);
    });
}

module.exports.init = init;