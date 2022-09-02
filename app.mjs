import express from "express";

//__dirname polyfill
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(express.static("public"));

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/landing.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/gloss.html");
});

app.get("/examples", (req, res) => {
  res.sendFile(__dirname + "/views/titles.html");
});

app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/views/album.html");
});

//listen
app.listen(3000, () => {
  console.log("Listening...");
});
