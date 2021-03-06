import express from "express";
import { productRouter } from "./routers/productRouters.js";

const app = express();

const PORT = 8080;


app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/productos", productRouter);

app.get("/", (req, res) => {
  res.render("index");
});


const server = app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${server.address().port}`)
})

server.on("error", () => {
  console.log("error del servidor")
})