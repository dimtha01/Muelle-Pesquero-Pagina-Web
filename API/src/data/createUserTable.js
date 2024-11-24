import pool from "../config/db.js";

const createUserTable = async () => {
    const queryText = `
    Create table if not exists users(
    id serial primary key,
    name varchar(100) not null,
    email varchar(100) unique not null,
    creado_a_las timestamp default now()
)`;
try{
    pool.query(queryText);
    //console.log("Tabla Creada si no existe");
}catch(e){
    console.log("Error al crear la tabla: ",e);
};
};
export default createUserTable