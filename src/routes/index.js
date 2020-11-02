const index = (_req, res, next) => {
  res.json({ status: 200, message: "Hello world!" });
  next();
};

export default index;
