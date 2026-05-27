const express = require('express');
const app = express();

app.use("/api/members",MemberRoutes);
app.use("/api/books",BookRoutes);
app.use("/api/loans",loanRoutes);
app.use("/api/author",authorRoutes);
