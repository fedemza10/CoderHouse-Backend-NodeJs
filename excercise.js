

/* class Usuario {
    constructor( nombre, apellido, libros = [{}], mascotas = []) {
        
        this.nombre = nombre,
        this.apellido = apellido,
        this.libros = libros,
        this.mascotas = mascotas
    }

    // metodo  para obtener  nombre y apellido del usuario
    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    //metodo para agregar una mascota al array de mascotas
    addMascota(mascota) {
        this.mascotas.push(mascota);
    }

    //metodo que trae todas las mascotas 
    getMascotas() {
        return this.mascotas;
    }

    //metodo  para contar las mascotas
    countMascotas() {
        return this.mascotas.length;
    }

    //metodo  para agregar un libro
    addBook(libro) {
        this.libros.push({
            nombre: libro.nombre,
            autor: libro.autor
        })
    }

    //metodo que retorna todos los libros
    getBooks() {
        return this.libros;
    }

    //metodo solicitado que devuelve los nombres de los libros
    getBookNames() {
        return this.libros.map( libro => libro.nombre) }
        

}

//creacion de un usuario a partir de la clase
User1 = new Usuario(
    "FEDERICO",
    "ROSALES",
    [
        { nombre: "Tierra de Nadie", autor: "Ignacio Montes de Oca" },
        { nombre: "Malvinas a Sangre y Fuego", autor: "Nicolas Kasanzew" },
        
    ],
    ["Golder Retriever",
        "Mastin Napolitano"]);

//obteniendo nombre y apellido mediante getFullName()
console.log(User1.getFullName());

//agregar libro usando addBook()
let libro = { nombre: "Cronicas desde el frente", autor: "Ignacio Hutin" }
User1.addBook(libro);

//comprobacion del totatl de libros usando getBooks()
console.log(User1.getBooks());

//comprobacion del metodo getBookNames()
console.log(User1.getBookNames());

//agregando mascotas mediante addMascota()
User1.addMascota("Border Collie ");

//comprobacion mascotas mediante getMascotas()
console.log(User1.getMascotas());

//contando elementos en el array de mascotas mediante countMascotas()
console.log(User1.countMascotas());
console.log (User1)

 */