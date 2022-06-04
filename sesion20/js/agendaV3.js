function guardarDatos(){
    //capturando variables
    const nombre=document.getElementById("nombre").value;
    const movil=document.getElementById("movil").value;
    const email=document.getElementById("email").value;

    const datos={
        'movil':movil,
        'email':email,
    };
    //almacena datos
    localStorage.setItem(nombre, JSON.stringify(datos));
    //borrando los datos
    document.getElementById("nombre").value="";
    document.getElementById("movil").value="";
    document.getElementById("email").value="";
    //actualizando la lista
    actualizarDatos();
}

function recuperarDatos() {
    var nombre= document.getElementById("nombre").value=localStorage.getItem(nombre)
    document.getElementById("movil").value=localStorage.getItem(nombre);
    document.getElementById("email").value=localStorage.getItem(nombre);

}

function eliminarDato() {
    var nombre=document.getElementById("nombre").value;
    localStorage.removeItem(nombre);
    actualizarDatos();
}

function eliminarTodo(){
    localStorage.clear();
    actualizarDatos();
}

function actualizarDatos() {
    var registro="";
    if (localStorage.length===0) {
        registro += '<li>Vacio</li>';
    } else {
        for (var i = 0; i <=localStorage.length -1 ; i++) {
            var key= localStorage.key(i);
            registro += '<li>' + '<span class="nom">' + key + '</span>'
            +'<span class="movil">' +localStorage.getItem(key)+'</span>'+'<span class="email">' +localStorage.getItem(key)+'</li><br>';
        }
    }
    document.getElementById('contactos').innerHTML=registro;
}