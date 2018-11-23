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
            {UltimaFecha: {$type: "Timestamp"}},//ULTIMA FECHA DE APERTURA 
            {Shared: {$type: "Boolean"}}//si es true es un archivo compartido
        ]
    }
});

