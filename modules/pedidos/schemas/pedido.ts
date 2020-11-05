import { Schema, model } from 'mongoose';

const schemaPedido = new Schema({
    nombre: String,
    direccion: String,
    comida: String,
    fechaEntrega: Date,
});

export let pedidoSchema = model('schemaPedido', schemaPedido, 'pedidos');
