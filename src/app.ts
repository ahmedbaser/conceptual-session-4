import express, { Request, Response } from "express";
import { MovieRotues } from "./modules/movies/movie.route";
const app = express()

//parser
app.use(express.json())

app.use("/api/movies", MovieRotues)
app.get("/", (req: Request, res: Response) => {
  res.send("Hello Next!");
});




app.get('/', (req: Request, res: Response) => {
  res.send('Hello World')
})

export default app;