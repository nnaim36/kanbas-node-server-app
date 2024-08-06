
export default function Hello(app){
  app.get("/hello", (req,res) => {
      res.send("Life is Good!!");
  });


  //default response if enters http://localhost:4000/
  app.get("/", (req,res) => {
      res.send("Welcome to Web Dev");
  });
}