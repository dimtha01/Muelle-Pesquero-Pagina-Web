import pool from "../config/db.js";

export const createPescadoTable = async () => {
    const queryText = `Create table if not exists Pescados(
    id serial primary key,
    codigo_pescado varchar(100) unique not null,
    pescado varchar(100)  not null,
    peso_pescado float not null default 0
)`;
try{
    pool.query(queryText);
    //console.log("Tabla Creada si no existe");
}catch(e){
    console.log("Error al crear la tabla: ",e);
};
};

export const createHerramientaTable = async () => {
    const queryText = `Create table if not exists Herramientas(
    id serial primary key,
    codigo_herramienta varchar(100) unique not null,
    herramienta varchar(100)  not null,
    cantidad_herramienta int not null default 0
)`;
try{
    pool.query(queryText);
    //console.log("Tabla Creada si no existe");
}catch(e){
    console.log("Error al crear la tabla: ",e);
};
};
