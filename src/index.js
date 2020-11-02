import Server from "./services/Server";
import Router from "./routes/Router";

const server = new Server(80);
new Router(server.app);
