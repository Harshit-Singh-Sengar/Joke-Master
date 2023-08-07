import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/Programming", async (req, res) => {
    try {
      const result = await axios.get("https://v2.jokeapi.dev/joke/Programming?amount=5");
      const data = result.data.jokes;

      console.log(data);
      res.render("index.ejs", { jokes:data});
    } catch (error) {
      res.status(404).send(error.message);
      res.status(500);
    }
  });

  app.get("/Dark", async (req, res) => {
    try {
      const result = await axios.get("https://v2.jokeapi.dev/joke/Dark?amount=5");
      const data = result.data.jokes;
      console.log(data);
      res.render("index.ejs", { jokes:data});
    } catch (error) {
      res.status(404).send(error.message);
      res.status(500);
    }
  });


  app.get("/Pun", async (req, res) => {
    try {
      const result = await axios.get("https://v2.jokeapi.dev/joke/Pun?amount=5");
      const data = result.data.jokes;
      console.log(data);
      res.render("index.ejs", { jokes:data});
    } catch (error) {
      res.status(404).send(error.message);
      res.status(500);
    }
  });


  app.get("/Spooky", async (req, res) => {
    try {
      const result = await axios.get("https://v2.jokeapi.dev/joke/Spooky?amount=5");
      const data = result.data.jokes;
      console.log(data);
      res.render("index.ejs", { jokes:data});
    } catch (error) {
      res.status(404).send(error.message);
      res.status(500);
    }
  });


  app.get("/Christmas", async (req, res) => {
    try {
      const result = await axios.get("https://v2.jokeapi.dev/joke/Christmas?amount=5");
      const data = result.data.jokes;
      console.log(data);
      res.render("index.ejs", { jokes:data});
    } catch (error) {
      res.status(404).send(error.message);
      res.status(500);
    }
  });

  app.get("/Misc", async (req, res) => {
    try {
      const result = await axios.get("https://v2.jokeapi.dev/joke/Misc?amount=5");
      const data = result.data.jokes;
      console.log(data);
      res.render("index.ejs", { jokes:data});
    } catch (error) {
      res.status(404).send(error.message);
      res.status(500);
    }
  });


  app.get("/Any", async (req, res) => {
    try {
      const result = await axios.get("https://v2.jokeapi.dev/joke/Any?amount=5");
      const data = result.data.jokes;
      console.log(data);
      res.render("index.ejs", { jokes : data});
    } catch (error) {
      res.status(404).send(error.message);
      res.status(500);
    }
  });

  app.get("/",async(req,res) =>{
    try {
      const result = await axios.get("https://v2.jokeapi.dev/joke/Any?amount=5");
      const data = result.data.jokes;
      console.log(data);
      res.render("index.ejs", { jokes : data });
    } catch (error) {
      res.status(404).send(error.message);
      res.status(500);
    }
  })

app.listen(port, () => {
    console.log(`sever is running on the port ${port}`);
});
