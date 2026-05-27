const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "server error",
  });
};

module.exports = errorHandler;

// User username/password оруулна.
// Client server рүү явуулна.
// Server database-с user хайна.
// Password-ийг hash-тай харьцуулж шалгана. token өгнө
// Хэрвээ database алдагдвал бүх хүний password ил болно.
// Тиймээс: hash хийж хадгалдаг bcrypt зэрэг ашигладаг