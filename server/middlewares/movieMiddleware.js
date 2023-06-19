const validateMovieCreateRequest = async (req, res, next) => {
  if (!req.body.name) {
    statusCode = 404
    message = 'The name of the movie is not present'
    return res.status(statusCode).json(message)
  }

  if (!req.body.description) {
    statusCode = 404
    message = 'The description of the movie is not present'
    return res.status(statusCode).json(message)
  }

  if (
    !req.body.casts ||
    !(req.body.casts instanceof Array) ||
    req.body.casts.length <= 0
  ) {
    statusCode = 404
    message = 'The casts of the movie is not present'
    return res.status(statusCode).json(message)
  }

  if (!req.body.imagrUrl) {
    statusCode = 404
    message = 'The imageUrl of the movie is not present'
    return res.status(statusCode).json(message)
  }

  if (!req.body.trailerUrl) {
    statusCode = 404
    message = 'The trailerUrl of the movie is not present'
    return res.status(statusCode).json(message)
  }

  if (!req.body.releaseDate) {
    statusCode = 404
    message = 'The releaseDate of the movie is not present'
    return res.status(statusCode).json(message)
  }

  if (!req.body.director) {
    statusCode = 404
    message = 'The director of the movie is not present'
    return res.status(statusCode).json(message)
  }

  if (!req.body.producer) {
    statusCode = 404
    message = 'The producer of the movie is not present'
    return res.status(statusCode).json(message)
  }
  next()
}

export { validateMovieCreateRequest }
