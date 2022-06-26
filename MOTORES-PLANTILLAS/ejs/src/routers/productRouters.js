import { Router } from "express";
import { productNotFound, productWasDeleted } from  "../index/index.js"
import { ContainerMemoria } from "../Api/memoryContainer.js";

const productRouter = Router();
const ProductApi = new ContainerMemoria();

productRouter.get("/", (req, res) => {
  const response = ProductApi.getAll();

  if (!response) res.send({ error: productNotFound });

  res.render("productos", { productos: response });
});

productRouter.post("/", (req, res) => {
  const { title, price, thumbnail } = req.body;

  ProductApi.save({ title, price, thumbnail });

  res.redirect("/");
});

export { productRouter };