function UsuariosCompartidos(User_ID){//saber con que usuarios se ha compartido un archivo
    const Usuario = db.collection('Documentos');
    var User_Access = [];
    for (var i = 0; i < Usuario.length; i++){
        for(var j = 0; j < Usuario[i][1].length; j++){
            
        }
    }
    
}

function getNextSequenceValue(sequenceName){

    var sequenceDocument = db.counters.findAndModify({
       query:{_id: sequenceName },
       update: {$inc:{sequence_value:1}},
       new:true
    });
     
    return sequenceDocument.sequence_value;
 }
