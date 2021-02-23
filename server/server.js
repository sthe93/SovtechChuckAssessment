import express from "express";
import server from "./graphql/schema";
import cors from "cors";

const app = express();

server.applyMiddleware({ app });

// Express: Port
const PORT = process.env.PORT || 4000;

app.use(cors());
// Express: Listener
app.listen(PORT, () => {
  console.log(`The server has started on port: ${PORT}`);
});

// Exports
export default app;
