
const fs = require('fs');

class Contenedor {
    constructor( products) {
        
        this.path = `${products}.txt`;
        
    }

    save(product) {
       
            fs.promises.readFile (this.path, 'utf-8',)
                 .then (contenido => {
                     const data = JSON.parse(contenido);
                     const lItem = data[data.length -1].id + 1;
                     product.id = lItem;
                     data.push (product);
                     fs.promises.writeFile (this.path, JSON.stringify (data))
                         .then (console.log (`id : ${producto.id}`))
                         .catch (err => (console.log (err)))
                         
                 }
                 )

        
    }
    
    getById(iD) {
            fs.promises.readFile(this.path, 'utf-8',)
                .then((contenido) => {
                    const products = JSON.parse(contenido)
                    const findP = products.find(prod => prod.id === iD);
                   
                    if (findP == undefined) {
                        console.log("No hay producto con esa ID");
                    } else {
                        console.log(`La ID de su producto es: ${findP}`);
                    }
                })
                .catch((error) => {
                    console.log("Error en archivo products.txt ", error)
    
                })
        }
     
    getAll(list) {
        
        fs.promises.readFile(this.path, 'utf-8',)
            .then((contenido) => {
                products = JSON.parse(contenido)
                console.log("Productos ", list)
            })
            .catch((error) => {
                list = [];
                console.log(" products.txt no es un archivo valido.", error)
            })
    }
        

     deleteById(findId) {
        fs.promises.readFile(this.path, 'utf-8',)
            .then((contenido) => {
                const productos = JSON.parse(contenido)
                const getId = productos.find(x => x.id === findId);
                if(getId == id ){
                const removeP = productos.splice(getId, 1);
                console.log("Producto eliminado ", removeP);
                fs.promises.writeFile(this.path, JSON.stringify(productos),)
                    .then(() => { products.getAll() })
                    .catch((error) => { console.log("Error de grabacion en products.txt ", error) })
                } else {
                    console.log("No hay un producto con id ", findId);
                }
            })
            .catch((error) => {
                console.log("Error de lectura en products.txt ", error)
            })
    }

    deleteAll() {
       
        fs.promises.writeFile(this.path, '');
    }

}

const prod1 =    {
    "title": "royal canin",
    "price": 9000,
    "thumbnail": 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.royalcanin.com%2Fco%2Fdogs%2Fproducts%2Fretail-products%2Fmaxi-adult-seco&psig=AOvVaw0eonlwWU1KHAzx0RhxiKvr&ust=1653650607429000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPiV8tqG_fcCFQAAAAAdAAAAABAE'
  }
 const prod2 =    {
    "title": "eukanuba",
    "price": 8000,
    "thumbnail": ' https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eukanuba.com%2Fmx%2Fall-products%2Feukanuba-puppy-large-breed&psig=AOvVaw2LVfZA-PB-zYqMcC-VfAn8&ust=1653650569364000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMDpsciG_fcCFQAAAAAdAAAAABAE'
}
  
  const p3 =   {
    "title": "vital can",   
    "price": 6000,
    "thumbnail": 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vitalcan.com%2Fmarcas-para-perros%2Fbalanced-perros%2F&psig=AOvVaw3keCmEMGHNqrvijHHO_v1X&ust=1653650521263000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJCj47OG_fcCFQAAAAAdAAAAABAD'
    
}


function prueba (){
const contenedorP= new Contenedor ('./products.txt', 'utf-8',)

// Guardando productos

     const prods = contenedorP.save (prod1,prod2)
           console.log ('Guardando productos:', prods)

// Obteniendo por ID
    const prodBid = contenedorP.getById (prod1)
           console.log ( 'Obteniendo por id: ', prodBid)

// Obteniendo todos los productos
     const products = contenedorP.getAll()
           console.log( 'Obteniendo todos los productos: ' , products)

// Borrando por ID
       const prodDeleteId = contenedorP.deleteById(1)
             console.log ( 'Borrando por id: ', prodDeleteId)

// Borrando todo
        const deleteA = contenedorP.deleteAll()
              console.log('Borrando todo : ', deleteA)

}
prueba ()