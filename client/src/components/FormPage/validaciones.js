
function validacion(arg) {
   // console.log(arg)
    const regexName = /[a-zA-Z0-9]+/;
    const regexUrl =  /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i;
    const regexDate = /^\d{4}-\d{2}-\d{2}$/;
    var fechaLimite = new Date('2023-05-01');
    console.log("ere",arg.released)

    let error = {}
    if (!regexName.test(arg.name)) {
       error.name = "no tiene que tener caracteres"
    }
    if (!arg.description) {
        error.description = "no ahi description porfavor cuentanos"
    }
    if (!regexUrl.test(arg.background_image)) {
        error.background_image = "no ahi imagen"
    }
    if (arg.genres.length <= 0) {
        error.genres = "no ahi genero"
    }
    if (arg.platforms.length <= 0) {
        error.platforms = "no ahi plataforma"
    }
    if (!regexDate.test(arg.released)) {
        error.released = "no ahi fecha"
    }
    if (arg.rating <= 0 || arg.rating >= 6) {
        error.rating = "no ahi rating"
    }
  console.log("validacion",error)
    return error;
}

export default validacion;