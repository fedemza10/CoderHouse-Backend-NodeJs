
const fs = require('fs');

class Contenedor {
    constructor( path) {
        
        this.path = path;
        
    }

 async save(product) {
       
            
                     const data = await this.getAll();
                     let newId;

                     if (data.length == 0){
                        newId = 1;
                    }else {
                        newId = data [data.length - 1].id + 1;
                    }               
                     const newProduct  = {...product, id: newId}                    
                     
                     data.push (newProduct);
                     try {
                       fs.writeFile(this.ruta, (data));
                         return newId
                     } catch (error) {
                         throw new Error (`Error al guardar:${error}`);
                     }
                         
                    }
                 

        
    
    
 async getById(iD) {
          await  fs.promises.readFile(this.path, 'utf-8',)
                .then((contenido) => {
                    const productos = (contenido)
                    const findP = productos.find(prod => prod.id === iD);
                   
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
     
   async getAll() {
        
      if ( (this.path)) {
          try {
              let response = await
              fs.promises.readFile (this.path, 'utf-8');
              if (response) {
                  let data = (response);
                  return data
              }                  
              
              
          } catch (error) {
              console.log ( 'Error al traer todo  ', error)
              
          }
          
      } else {
          console.log( 'No existe el archivo que se busca.')
          
      }
    }
        

async  deleteById(findId) {
      await  fs.promises.readFile(this.path, 'utf-8',)
            .then((contenido) => {
                const productos = (contenido)
                const getId = productos.find(x => x.id === findId);
                if(getId == id ){
                const removeP = productos.id;
                console.log("Producto eliminado ", removeP);
        await fs.promises.writeFile(this.path, (productos))
                    .then(() => { productos.getAll() })
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
       
        fs.promises.unlink(this.path, 'utf-8');
    }

}

const prod1 =    {
    "id": "1",   
    "title": "royal canin",
    "price": 9000,
    "thumbnail": 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.royalcanin.com%2Fco%2Fdogs%2Fproducts%2Fretail-products%2Fmaxi-adult-seco&psig=AOvVaw0eonlwWU1KHAzx0RhxiKvr&ust=1653650607429000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPiV8tqG_fcCFQAAAAAdAAAAABAE'
  }
 const prod2 =    {
     "id" : "2",
    "title": "eukanuba",
    "price": 8000,
    "thumbnail": ' https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eukanuba.com%2Fmx%2Fall-products%2Feukanuba-puppy-large-breed&psig=AOvVaw2LVfZA-PB-zYqMcC-VfAn8&ust=1653650569364000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMDpsciG_fcCFQAAAAAdAAAAABAE'
}
  
  const prod3 =   {
     "id" :"3" ,
    "title": "vital can",   
    "price": 6000,
    "thumbnail": 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vitalcan.com%2Fmarcas-para-perros%2Fbalanced-perros%2F&psig=AOvVaw3keCmEMGHNqrvijHHO_v1X&ust=1653650521263000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJCj47OG_fcCFQAAAAAdAAAAABAD'
    
}


function prueba (){
const contenedorP= new Contenedor ('./products.txt', 'utf-8',)

// Guardando productos

     const prods1 = await contenedorP.save (prod1)
           console.log ('Guardando productos:', prods1)

// Guardando productos

     const prods2 = await contenedorP.save (prod2)
           console.log ('Guardando productos:', prods2)
           

// Obteniendo por ID
    const prodBid = contenedorP.getById (prod1)
/         console.log ( 'Obteniendo por id: ', prodBid)

// Obteniendo todos los productos
     const products = await contenedorP.getAll()
           console.log( 'Obteniendo todos los productos: ' , products)

// Borrando por ID
       const prodDeleteId = await contenedorP.deleteById(1)
              console.log ( 'Borrando por id: ', prodDeleteId)

// Borrando todo
//       const deleteA = await contenedorP.deleteAll()
//              console.log('Borrando todo : ', deleteA)

}
prueba ()