db.Createcollection("Usuarios", {validator: { $and:
        [
            {User_ID: {$type: "Object ID"}},
            {Nombres: {$type: "String"}},
            {Apellidos: {$type: "String"}},
            {FechaNacimiento: {$type: "Date"}},
            {User: {$type: "String"}},
            {Pass: {$type: "String"}},
            {FechaCreacion: {$type: "Titestamp"}}
        ]
    }
});

db.Createcollection("Documentos", {validator: { $and:
        [
            {Documentos_ID: {$type: "Object ID"}},
            {Album: {$type: "Integer", default: 0}},
            {Document: {$type: "String"}},
            {FechaCreacion: {$type: "Timestamp"}},
            {UltimaFecha: {$type: "Timestamp"}}
        ]
    }
});


function getNextSequenceValue(sequenceName){

    var sequenceDocument = db.counters.findAndModify({
       query:{_id: sequenceName },
       update: {$inc:{sequence_value:1}},
       new:true
    });
     
    return sequenceDocument.sequence_value;
 }
