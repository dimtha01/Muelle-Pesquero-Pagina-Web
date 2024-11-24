import pool from "../config/db.js";

export const getAllPescadosService = async () => {
    const result = await pool.query("SELECT * FROM pescados");
    return result.rows;
};

export const getAllHerramientasService = async () => {
    const result = await pool.query("SELECT * FROM herramientas");
    return result.rows;
};

export const getPescadosServiceByid = async (id) => {
    const result = await pool.query("SELECT * FROM pescados where id = $1", [id])
    return result.rows[0];
}

export const getHerramientasServiceByid = async (id) => {
    const result = await pool.query("SELECT * FROM herramientas where id = $1", [id])
    return result.rows[0];
}

export const createPescadoService = async (codigo_pescado, pescado,peso_pescado) => {
    const result = await pool.query("INSERT INTO pescados (codigo_pescado, pescado,peso_pescado) VALUES ($1,$2,$3) RETURNING *", [codigo_pescado, pescado,peso_pescado]);
    return result.rows[0];
};

export const createHerramientaService = async (codigo_herramienta,herramienta,cantidad_herramienta) => {
    const result = await pool.query("INSERT INTO herramientas (codigo_herramienta,herramienta,cantidad_herramienta) VALUES ($1,$2,$3) RETURNING *", [codigo_herramienta,herramienta,cantidad_herramienta]);
    return result.rows[0];
};

export const updatePescadoServiceByid = async (codigo_pescado, pescado,peso_pescado,id) => {
    const result = await pool.query("UPDATE pescados SET codigo_pescado = $1, pescado = $2 , peso_pescado = $3 WHERE id=$4 RETURNING *", [codigo_pescado, pescado,peso_pescado,id]);
    return result.rows[0];
};

export const updateHerramientaServiceByid = async (codigo_herramienta,herramienta,cantidad_herramienta,id) => {
    const result = await pool.query("UPDATE herramientas SET codigo_herramienta = $1, herramienta = $2 , cantidad_herramienta = $3 WHERE id=$4 RETURNING *", [codigo_herramienta,herramienta,cantidad_herramienta,id]);
    return result.rows[0];
};

export const deletePescadoServiceByid = async (id) => {
    const result = await pool.query("DELETE FROM pescados WHERE id=$1 RETURNING *", [id]);
    return result.rows[0];
};

export const deleteHerramientaServiceByid = async (id) => {
    const result = await pool.query("DELETE FROM herramientas WHERE id=$1 RETURNING *", [id]);
    return result.rows[0];
};