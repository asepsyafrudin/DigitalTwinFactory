import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import masterPartNumberRoute from "./src/routes/master_part_number.js";
import masterProductionQtyRoute from "./src/routes/master_prod_qty.js";

const app = express();

dotenv.config();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/api/masterPartNumber", masterPartNumberRoute);
app.use("/api/masterProductionQty", masterProductionQtyRoute);

app.listen(port, () => {
  console.log("Server Already Run On Port " + port);
});
