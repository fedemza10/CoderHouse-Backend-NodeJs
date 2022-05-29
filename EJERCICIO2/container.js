
const fs = require('fs');

class Contenedor {
    constructor( path) {
        
        this.path = path;
        
    }

 async save(product) {
       
            
                     let data = []
                     let id = 0;
                    try {
        
    
                         if (fs.existsSync(this.path)){
                             data = await this.getAll();
                             id = data [data.length - 1].id + 1;
                    
                        }else {
                           id++; }
                    product.id = id
                    data.push (product)
                    await fs.promises.writeFile (this.path, JSON.stringify(data, null, 2))
                    return data

                    } catch (error) {
                        console.log(` Esto es un error: ${error}`)
        
                        }
                         
                    }               
      
    
    
 async getById(id) {
          try {
              let data = []
              let resp = await fs.promises.readFile (this.path, 'utf-8')
              if (resp){
                        data = JSON.parse (resp);
                        let product = data.find((product)=> product.id === id);
                        return product

                    }
            } catch (error) {
                console.log('Error al obtener ID : ', error)
              
          }
        }

     
   async getAll() {
        
    try {
        const response = await fs.promises.readFile(this.path, 'utf-8');
        if (response) {
          let data = JSON.parse(response);
          return data
          
        }
        
      } catch (error) {
       console.log (error);
      }
    }

async  deleteById(id) {
     try {
        let data = []
        let response = await this.getAll()
        if (response) {
            data = response.filter ((product)=> product.id !=id)
            await fs.promises.writeFile  (`${this.path}`, JSON.stringify (data, null, 2));
        }
         
     } catch (error) {
         console.log ('Error al eliminar por ID: ', error)
         
        }
          
      }

async  deleteAll() {
       
        fs.promises.unlink(this.path, 'utf-8');
        console.log ('Se eliminó el archvivo.')
    }

}







module.exports = Contenedor