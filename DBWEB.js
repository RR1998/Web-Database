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



db.Usuarios.insertOne({
    User_ID: 0,
    Nombres: "Nombres",
    Apellidos: "Apellidos",
    FechaNacimiento: "dd/mm/yyyy",
    User: "Username",
    Pass: "Password",
    TipoUsuario: 0,
})

db.Createcollection("Archivos");

db.Createcollection("Documentos", {validator: { $and:
        [
            {User_ID: {$type: "Object ID"}},
            {Document: {$type: "String"}},
            {FechaCreacion: {$type: "Titestamp"}}
        ]
    }
});