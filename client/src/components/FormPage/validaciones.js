
function validacion(arg) {
   // console.log(arg)
    const regexEmail = /[a-zA-Z0-9]+/
    /*
        genres: "",
        platforms: "",
        released: 0,
        rating: 0
    */
    let error = {}
    if (!regexEmail.test(arg.name)) {
       error.name = "no tiene que tener caracteres"
    }
    if (!arg.description) {
        error.description = "no ahi description porfavor cuentanos"
    }
    if (!arg.background_image) {
        error.background_image = "no ahi imagen"
    }
    if (arg.genres.length === 0) {
        error.genres = "no ahi genero"
    }
    if (!arg.platforms) {
        error.platforms = "no ahi plataforma"
    }
    if (!arg.released) {
        error.released = "no ahi fecha"
    }
    if (arg.rating <= 0 || arg.rating > 5) {
        error.rating = "no ahi rating"
    }
    //console.log(error)
    return error;
}

export default validacion;