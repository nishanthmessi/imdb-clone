import Movie from '../models/movieModel.js'

const createMovie = async (movieData) => {
  try {
    const movie = await Movie.create(movieData)
    return movie
  } catch (error) {
    if (error.name == 'ValidationError') {
      let err = {}
      Object.keys(error.errors).forEach((key) => {
        err[key] = error.errors[key].message
      })
      console.log(err)
      throw { err: err, code: STATUS.UNPROCESSABLE_ENTITY }
    } else {
      throw error
    }
  }
}

export { createMovie }
