function UsuariosCompartidos(User_ID){//saber con que usuarios se ha compartido un archivo
    const Documentos = db.collection('Documentos');
    const Usuarios = db.collection('Usuarios');
    var User_Access = [];
    var Users = [];
    User_Access = Documentos.find({}, {Documentos_ID: 0,User_Access:1, 
        User_Creator: 0, Album: 0, Document: 0, FechaCreacion: 0, UltimaFecha: 0, Shared: 0});
    User_Access.forEach(element => {
        Users.push(Usuarios.find({element}, 
            {User_ID: 0, Nombres: 0, Apellidos: 0, FechaNacimiento: 0,
                User: 1, Pass: 0, Rol: 0, FechaCreacion: 0}));
    });
    return Users;
}

function getNextSequenceValue(sequenceName){

    var sequenceDocument = db.counters.findAndModify({
       query:{_id: sequenceName },
       update: {$inc:{sequence_value:1}},
       new:true
    });
     
    return sequenceDocument.sequence_value;
 }
