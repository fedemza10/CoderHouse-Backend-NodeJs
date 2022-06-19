class Api {
    productos = []

    add(producto) {
        this.productos.push(producto)
    }

    getAll() {
        return this.productos;
    }

    getById(id) {
        return this.productos.find(p => p.id == id)
    }

    update(id, productoNuevo) {
        for (const p of this.productos) {
            if(p.id === id){
                p.title = productoNuevo.title;
                p.thumbnail = productoNuevo.thumbnail;
                p.price = productoNuevo.price;
            }
        }
    }

    delete(id) {
        this.productos = this.productos.filter(p => p.id != id)
    }

}

module.exports = Api