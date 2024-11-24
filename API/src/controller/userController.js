// Respuesta Estandarizadas de las funciones

import { createUserService, 
    deleteUserService, 
    getAllUserService, 
    getUserByIdService, 
    updateUserService } from "../models/userModel.js";

const handleResponse = (res,status,message,data = null) => {
    res.status(status).json({
        status,
        message,
        data,
    });
};

export const createUser = async (req,res,next) => {
    const {name, email} = req.body;
    try{
        const newUser = await createUserService(name,email);
        handleResponse(res,201,"Usuario Creado Con exito",newUser)
    }
    catch(e){
        next(e);
    };
};

export const getALLusers = async (req,res,next) => {
    try{
        const users = await getAllUserService();
        handleResponse(res,200,"Usuario Mostrados con Exito", users);
    }
    catch(e){
        next(e);
    };
};

export const getUserById = async (req,res,next) => {
    try{
        const users = await getUserByIdService(req.params.id);
        if(!users) return handleResponse(res,404,"Usuario no encontrado");
        handleResponse(res,200,"Usuario Encontrado Con exito",users);
    }
    catch(e){
        next(e);
    };
};
export const updateUser = async (req,res,next) => {
    const {name, email} = req.body
    try{
        const updateuser = await updateUserService(name,email,req.params.id);
        if(!updateuser) return handleResponse(res,404,"Usuario no encontrado");
        handleResponse(res,200,"Usuario Actualizado Con exito",updateuser)
    }
    catch(e){
        next(e);
    };
};

export const deleteUser = async (req,res,next) => {
    try{
        const deleteuser = await deleteUserService(req.params.id);
        if(!deleteuser) return handleResponse(res,404,"Usuario no encontrado");
        handleResponse(res,200,"Usuario Eliminado Con exito",deleteuser)
    }
    catch(e){
        next(e);
    };
};