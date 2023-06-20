import Movie from '../models/movieModel.js'

const createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body)

    return res.status(200).json(movie)
  } catch (error) {
    if (error.name == 'ValidationError') {
      let err = {}
      Object.keys(error.errors).forEach((key) => {
        err[key] = error.errors[key].message
      })
      console.log(err)
      throw { err: err, code: 500 }
    } else {
      throw error
    }
  }
}

export { createMovie }
