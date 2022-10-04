import express from 'express';
import {home} from '../controllers/recipeController.js'

const router = express.Router();

router.get('/home',home);


export default router;