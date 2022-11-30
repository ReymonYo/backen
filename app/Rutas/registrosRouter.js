module.exports = function(app, mariadb){
    app.get('/get/registros', (req, res)=>{
mariadb.getUsuarios(function(result){
    res.send(result);
})
    })
}