import * as express from "express";
import { pedidoSchema } from "../schemas/pedido";

const router = express.Router();
router.get("/pedido", async (req, res) => {
    try {
      let pedidos = await pedidoSchema.find();
      res.send(pedidos);
    } catch (err) {
      throw err;
    }
  });
  
  router.get("/pedidoId/:id", async (req, res) => {
    let idPedido = req.params.id;
    try {
      let pedidos = await pedidoSchema.findById(idPedido);
      res.send(pedidos);
    } catch (err) {
      throw err;
    }
  });
  
  router.post("/pedido", async (req, res) => {
    try {
      const pedido = new pedidoSchema(req.body);
      let pedidoNuevo = await pedido.save();
  
      res.send(pedidoNuevo);
    } catch (err) {
      throw err;
    }
  });
  
  router.put("/pedido/:id", async (req, res, next) => {
    try {
      let pedido = await pedidoSchema.findByIdAndUpdate(req.params.id, req.body);
      res.send(pedido);
    } catch (err) {
      throw err;
    }
  });
  
  router.delete("/pedido/:id", async (req, res, next) => {
    try {
      let pedido = await pedidoSchema.findByIdAndRemove(req.params.id);
      console.log("Pedido Borrado: ", pedido);
    } catch (err) {
      throw err;
    }
  });
  export= router;