import express from 'express'
import { createMovie } from '../controllers/movieController.js'
import { validateMovieCreateRequest } from '../middlewares/movieMiddleware.js'
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.post('/create-movie', createMovie, validateMovieCreateRequest)

export default router
