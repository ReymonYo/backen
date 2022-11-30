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
//Post
postRegistro = function(request, callback){
    Registros.create({
        Nombre: request.Nombre,
        ApellidoP: request.ApellidoP,
        ApellidoM: request.ApellidoM,
        Correo: request.Correo,
        Telefono: request.Telefono,
        Matricula: request.Matricula,
        AreaDeTrabajo: request.AreaDeTrabajo,
        FechaDeIngreso: request.FechaDeIngreso

    }).then(registro => callback(registro));
}
//Post export
module.exports.postRegistro = postRegistro;
//Get export
module.exports.getUsuarios = getUsuarios;

module.exports.init = init;
