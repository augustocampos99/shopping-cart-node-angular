import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import router from "./router";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// npx kill-port 3000