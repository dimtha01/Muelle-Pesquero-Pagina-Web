// Respuesta Estandarizadas de las funciones
import { 
    createHerramientaService, 
    createPescadoService, 
    deleteHerramientaServiceByid, 
    deletePescadoServiceByid, 
    getAllHerramientasService, 
    getAllPescadosService, 
    getHerramientasServiceByid, 
    getPescadosServiceByid, 
    updateHerramientaServiceByid, 
    updatePescadoServiceByid } from "../models/userModel.js";

const handleResponse = (res,status,message,data = null) => {
    res.status(status).json({
        status,
        message,
        data,
    });
};

export const createpescado = async (req, res, next) => {
    const { codigo_pescado, pescado, peso_pescado } = req.body;

    // Convertir peso_pescado a un número entero
    const pesoPescadoInt = parseFloat(peso_pescado);

    // Verificar si la conversión fue exitosa
    if (isNaN(pesoPescadoInt)) {
        return res.status(400).json({ message: "El peso del pescado debe ser un número entero válido." });
    }

    try {
        const newPescado = await createPescadoService(codigo_pescado, pescado, pesoPescadoInt);
        handleResponse(res, 201, "Pescado Creado Con Éxito", newPescado);
    } catch (e) {
        next(e);
    }
};


export const createherramienta = async (req, res, next) => {
    const { codigo_herramienta, herramienta, cantidad_herramienta } = req.body;

    // Convertir cantidad_herramienta a un número entero
    const cantidadHerramientaInt = parseInt(cantidad_herramienta, 10);

    // Verificar si la conversión fue exitosa
    if (isNaN(cantidadHerramientaInt)) {
        return res.status(400).json({ message: "La cantidad de la herramienta debe ser un número entero válido." });
    }

    try {
        const newHerramienta = await createHerramientaService(codigo_herramienta, herramienta, cantidadHerramientaInt);
        handleResponse(res, 201, "Herramienta Creada Con Éxito", newHerramienta);
    } catch (e) {
        next(e);
    }
};


export const getAllPescados = async (req,res,next) => {
    try{
        const Pescados = await getAllPescadosService();
        handleResponse(res,200,"Pescados Mostrados con Exito", Pescados);
    }
    catch(e){
        next(e);
    };
};


export const getAllHerramientas = async (req,res,next) => {
    try{
        const herramientas = await getAllHerramientasService();
        handleResponse(res,200,"Herramientas Mostrados con Exito", herramientas);
    }
    catch(e){
        next(e);
    };
};

export const getPescadoById = async (req,res,next) => {
    try{
        const Pescado = await getPescadosServiceByid(req.params.id);
        if(!Pescado) return handleResponse(res,404,"Pescado no encontrado");
        handleResponse(res,200,"Pescado Encontrado Con exito",Pescado);
    }
    catch(e){
        next(e);
    };
};

export const getHerramientaById = async (req,res,next) => {
    try{
        const herramienta = await getHerramientasServiceByid(req.params.id);
        if(!herramienta) return handleResponse(res,404,"Herramienta no encontrado");
        handleResponse(res,200,"Herramienta Encontrado Con exito",herramienta);
    }
    catch(e){
        next(e);
    };
};


export const updatePescado = async (req,res,next) => {
    const {codigo_pescado,pescado,peso_pescado} = req.body
    try{
        const updatePescado = await updatePescadoServiceByid(codigo_pescado,pescado,peso_pescado,req.params.id);
        if(!updatePescado) return handleResponse(res,404,"Pescado no encontrado");
        handleResponse(res,200,"Pescado Actualizado Con exito",updatePescado)
    }
    catch(e){
        next(e);
    };
};

export const updateherramienta = async (req,res,next) => {
    const {codigo_herramienta,herramienta,cantidad_herramienta} = req.body
    try{
        const updateherramienta = await updateHerramientaServiceByid(codigo_herramienta,herramienta,cantidad_herramienta,req.params.id);
        if(!updateherramienta) return handleResponse(res,404,"Herramienta no encontrado");
        handleResponse(res,200,"Herramienta Actualizado Con exito",updateherramienta)
    }
    catch(e){
        next(e);
    };
};

export const deletePescado = async (req,res,next) => {
    try{
        const deletePescado = await deletePescadoServiceByid(req.params.id);
        if(!deletePescado) return handleResponse(res,404,"Pescado no encontrado");
        handleResponse(res,200,"Pescado Eliminado Con exito",deletePescado)
    }
    catch(e){
        next(e);
    };
};

export const deleteHerramienta = async (req,res,next) => {
    try{
        const deleteHerramienta = await deleteHerramientaServiceByid(req.params.id);
        if(!deleteHerramienta) return handleResponse(res,404,"Pescado no encontrado");
        handleResponse(res,200,"Pescado Eliminado Con exito",deleteHerramienta)
    }
    catch(e){
        next(e);
    };
};