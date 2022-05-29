const Contenedor = require ("./container.js")

const products = new Contenedor( "./productos.txt")


// Guardando productos

async function pruebaSave (){
    let newProd = products.save(
    {    
         
        "title": "royal canin",
        "price": 9000,
        "thumbnail": 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.royalcanin.com%2Fco%2Fdogs%2Fproducts%2Fretail-products%2Fmaxi-adult-seco&psig=AOvVaw0eonlwWU1KHAzx0RhxiKvr&ust=1653650607429000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPiV8tqG_fcCFQAAAAAdAAAAABAE'
      },
         {
         
        "title": "eukanuba",
        "price": 8000,
        "thumbnail": ' https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eukanuba.com%2Fmx%2Fall-products%2Feukanuba-puppy-large-breed&psig=AOvVaw2LVfZA-PB-zYqMcC-VfAn8&ust=1653650569364000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMDpsciG_fcCFQAAAAAdAAAAABAE'
    },
      
         {
         
        "title": "vital can",   
        "price": 6000,
        "thumbnail": 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vitalcan.com%2Fmarcas-para-perros%2Fbalanced-perros%2F&psig=AOvVaw3keCmEMGHNqrvijHHO_v1X&ust=1653650521263000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJCj47OG_fcCFQAAAAAdAAAAABAD'
        
    }

    )
    console.log(newProd)
}
pruebaSave();


// Trayendo todo mediante getAll.

async function pruebaGetAll (){
    let data= products.getAll()
    console.log (data);

}
pruebaGetAll();


// Eliminando productos por ID.

//products.deleteById (2)

//Eliminando todo.

products.deleteAll()








