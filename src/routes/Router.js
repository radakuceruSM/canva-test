import index from "./";

class Router {
  constructor(app) {
    this.app = app;
    this._setupRouter();
  }

  _setupRouter() {
    this.app.get("/", index);
  }
}

export default Router;
