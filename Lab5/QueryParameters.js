export default function QueryParameters(app) {
    app.get("/lab5/calculator", (req, res) => {
      const { a, b, operation } = req.query;
      let result = 0;
      switch (operation) {
        case "add":
          result = parseInt(a) + parseInt(b);
          break;
        case "subtract":
          result = parseInt(a) - parseInt(b);
          break;
        case "multiply":
            result = parseInt(a) * parseInt(b);
            break;
        case "devide":
            result = parseInt(a) / parseInt(b);
            break;
          // implement multiply and divide on your own
        default:
          result = "Invalid operation";
      }
      res.send(result.toString());
    });
  }
  