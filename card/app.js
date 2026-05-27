const express = require("express");

const memberRoutes = require("./routes/memberRoutes");
const bookRoutes = require("./routes/bookRoutes");
const loanRoutes = require("./routes/loanRoutes");
const authorRoutes = require("./routes/authorRoutes");

const errorHandler = require("./middleware/errorHandler");

const app = express();

const ensureRouter = (routerName, routerModule) => {
  if (typeof routerModule === "function") {
    return routerModule;
  }

  const fallbackRouter = express.Router();

  fallbackRouter.use((req, res) => {
    res.status(501).json({
      message: `${routerName} route ajillakhad belen boloo gui bn`,
    });
  });

  return fallbackRouter;
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/members", ensureRouter("members", memberRoutes));
app.use("/api/books", ensureRouter("books", bookRoutes));
app.use("/api/loans", ensureRouter("loans", loanRoutes));
app.use("/api/authors", ensureRouter("authors", authorRoutes));

app.use((req, res) => {
  res.status(404).json({
    message: "Маршрут олдсонгүй",
  });
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log("server ajillaj bn");
});
