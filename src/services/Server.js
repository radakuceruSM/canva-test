import restify from "restify";
import corsMiddleware from "restify-cors-middleware";

const cors = corsMiddleware({
  origins: ["*"]
});

class Server {
  constructor(port = process.env.PORT) {
    this.port = port;
    this.app = restify.createServer();
    this._useMiddlewares();
    this._useListeners();
  }

  _useMiddlewares() {
    this.app.pre(cors.preflight);
    this.app.use(cors.actual);
  }

  _useListeners() {
    this.app.listen(this.port, () => {
      console.log(`Server is listening on port ${this.port}!`);
    });
  }
}

export default Server;
