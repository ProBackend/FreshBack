const Producto = require("../models/productos");
const Productodia = require("../models/producto_dia")
const menu_dia = require("../models/menu_dia")
const Pedido = require("../models/pedido")

class ped {
    constructor() {}

    async agregarp(req) {
        console.log(req.ubicacion)
        const id = req.id
        const producto = await Producto.findById({ _id: id })
        const pedido = new Pedido({
            nombre: producto.nombre,
            precio: producto.precio
        })
        await pedido.save()

    }

    async agregarpd(req) {
        const id = req.id
        const producto = await Productodia.findById({ _id: id })
        const pedido = new Pedido({
            nombre: producto.nombre,
            precio: producto.oferta
        })
        await pedido.save()
    }
    async agregarm(req) {
        const id = req.id
        const producto = await menu_dia.findById({ _id: id })
        const pedido = new Pedido({
            nombre: producto.nombre,
            precio: producto.precio
        })
        await pedido.save()
    }
}

module.exports = ped