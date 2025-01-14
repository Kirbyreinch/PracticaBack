const mongoose = require('mongoose');



//////////////Modelo Peliculas/////////////////////
const pelisSchema = new mongoose.Schema(
    {
        Titulo:{
            type:String,
            required: true,
        },
        Director:{
            type: String,
            required: true
        },
        Productor:{
            type:String,
            required:true,
        }

    },
    {
        timestamps: true,
        versionKey: false,
    }
)


//////////////Modelo Planetas/////////////////////
const planetSchema = new mongoose.Schema(
    {
        Nombre:{
            type:String,
            required: true,
        },
        Diametro:{
            type: String,
            
        },
        Periodo_Rotacion:{
            type:String,
            
        },
        Periodo_Orbital:{
            type:String,
            
        },
        Gravedad:{
            type:String,
            
        },
        Poblacion:{
            type:String,
            
        },
        Clima:{
            type:String,
            
        },
        Terreno:{
            type:String,
            
        },
        Superficie_Agua:{
            type:String,
            
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)


//////////////Modelo Especies/////////////////////
const especiesSchemas = new mongoose.Schema(
    {
        Nombre:{
            type:String,
            required: true,
        },
        Clasificacion:{
            type: String,
            
        },
        Designacion:{
            type:String,
            
        },
        Estatura:{
            type:String,
            
        },
        Promedio_Vida:{
            type:String,
            
        },
        Color_Ojos:{
            type:String,
            
        },
        Color_Cabello:{
            type:String,
            
        },
        Color_Piel:{
            type:String,
            
        },
        Lenguaje:{
            type:String,
            
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)



//////////////Modelo Naves/////////////////////
const NavesSchemas = new mongoose.Schema(
    {
        Nombre:{
            type:String,
            required: true,
        },
        Modelo:{
            type: String,
            required: true,
            
        },
        Clase:{
            type:String,
            
        },
        Tamaño:{
            type:String,
            
        },
        Numero_Pasajeros:{
            type:String,
            
        },
        Maxima_Velocidad_atmosferica:{
            type:String,
            
        },
        Hiperimpulsor:{
            type:String,
            
        },
        MGLT:{
            type:String,
            
        },
        Capacidad_carga:{
            type:String,
            
        },
        Tiempo_Max_Consumibles:{
            type:String,
            
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)




//////////////Modelo Vehiculos/////////////////////
const VehiculoSchemas = new mongoose.Schema(
    {
        Nombre:{
            type:String,
            required: true,
        },
        Modelo:{
            type: String,
            required: true,
        },
        Clase:{
            type:String,
            
        },
        Tamaño:{
            type:String,
            
        },
        Numero_Pasajeros:{
            type:String,
            
        },
        Maxima_Velocidad_atmosferica:{
            type:String,
            
        },
        Capacidad_Maxima:{
            type:String,
            
        },

        Tiempo_Max_Cosumibles:{
            type:String,
            
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)


//////////////Modelo Personajes/////////////////////
const PersonajeSchemas = new mongoose.Schema(
    {
        Nombre:{
            type:String,
            required: true,
        },
        Fecha_Nacimiento:{
            type: String,
            required: true,
        },
        Color_Ojos:{
            type:String,
            
        },
        Genero:{
            type:String,
            
        },
        Color_Cabello:{
            type:String,
            
        },
        Altura:{
            type:String,
            
        },
        Masa:{
            type:String,
            
        },
        Color_de_Piel:{
            type:String,
            
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)









// Crear los modelos
const PersonajesModel = mongoose.model("Personajes", PersonajeSchemas);
const VehiculosModel = mongoose.model("Vehiculos", VehiculoSchemas);
const NavesModel = mongoose.model("Naves", NavesSchemas);
const especiesModel = mongoose.model("Especies", especiesSchemas);
const PelisModel = mongoose.model("Peliculas", pelisSchema);
const PlanetasModel = mongoose.model("Planetas", planetSchema);

// Exportar ambos modelos
module.exports = {
    VehiculosModel,
    PersonajesModel,
    NavesModel,
    especiesModel,
    PelisModel,
    PlanetasModel
};