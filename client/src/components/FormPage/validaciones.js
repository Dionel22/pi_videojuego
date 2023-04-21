
function validacion(arg) {
   // console.log(arg)
    const regexName = /[a-zA-Z0-9]+/;
    const regexUrl =  /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i;
    const regexDate = /^\d{4}-\d{2}-\d{2}$/;
   // var fechaLimite = new Date('2023-05-01');
    //console.log("ere",arg.released)

    let error = {}
    if (!regexName.test(arg.name)) {
       error.name = "se necesita nombre sin caracteres"

    }
    if (!arg.description) {
        error.description = "se necesita una description del juego"
    }
    if (!regexUrl.test(arg.background_image)) {
        error.background_image = "se necesita la URL de una imagen valida"
    }
    if (arg.genres.length <= 0) {
        error.genres = "se necesita al menos 1 genero"
    }
    if (arg.platforms.length <= 0) {
        error.platforms = "se necesita al menos una plataforma"
    }
    if (!regexDate.test(arg.released)) {
        error.released = "se necesita una fecha de su lanzamiento"
    }
    if (arg.rating <= 0 || arg.rating >= 6) {
        error.rating = "se necesita rating que no sobre pase de 5"
    }
  //console.log("validacion",error)
    return error;
}

export default validacion;