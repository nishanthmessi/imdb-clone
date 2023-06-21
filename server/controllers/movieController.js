import asyncHandler from 'express-async-handler'
import Movie from '../models/movieModel.js'

const createMovie = asyncHandler(async (req, res) => {
  const movie = await Movie.create(req.body)

  if (movie) {
    return res.status(200).json(movie)
  } else {
    res.status(400)
    throw new Error('Invalid movie data')
  }
})

export { createMovie }
