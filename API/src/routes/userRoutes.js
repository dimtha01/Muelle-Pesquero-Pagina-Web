import express from "express";
import { 
    createherramienta, 
    createpescado, 
    deleteHerramienta, 
    deletePescado, 
    getAllHerramientas, 
    getAllPescados, 
    getHerramientaById, 
    getPescadoById, 
    updateherramienta, 
    updatePescado } from "../controller/userController.js";
import validateUser from "../middleware/inputValidation.js";

const router = express.Router();

router.post("/pescado", createpescado);
router.post("/herramienta", createherramienta);
router.get("/pescado", getAllPescados);
router.get("/herramienta", getAllHerramientas);
router.get("/pescado/:id", getPescadoById);
router.get("/herramienta/:id", getHerramientaById);
router.put("/pescado/:id", updatePescado);
router.put("/herramienta/:id", updateherramienta);
router.delete("/pescado/:id", deletePescado);
router.delete("/herramienta/:id", deleteHerramienta);

export default router;