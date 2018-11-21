db.Createcollection("Usuarios", {validator: { $and:
        [
            {User_ID: {$type: "Integer"}},
            {Nombres: {$type: "String"}},
            {Apellidos: {$type: "String"}},
            {FechaNacimiento: {$type: "Date"}},
            {User: {$type: "String"}},
            {Pass: {$type: "String"}},
            {Rol: {$type: "String"}},
            {FechaCreacion: {$type: "Titestamp"}}
        ]
    }
});

db.Createcollection("Documentos", {validator: { $and:
        [
            {Documentos_ID: {$type: "Integer"}},
            {User_Access: {$type: "Array"}},
            {User_Creador: {$type: "Integer"}},
            {Album: {$type: "Integer", default: 0}},
            {Document: {$type: "String"}},
            {FechaCreacion: {$type: "Timestamp"}},
            {UltimaFecha: {$type: "Timestamp"}}//ULTIMA FECHA DE APERTURA 
        ]
    }
});

db.createView('User_Documents')

function getNextSequenceValue(sequenceName){

    var sequenceDocument = db.counters.findAndModify({
       query:{_id: sequenceName },
       update: {$inc:{sequence_value:1}},
       new:true
    });
     
    return sequenceDocument.sequence_value;
 }
