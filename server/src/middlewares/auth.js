import jwt from "jsonwebtoken";

const { TOKEN_SECRET } = process.env;

export const auth = (req, res, next) => {
  const TOKEN = req.headers['x-access-token'];
  console.log(TOKEN);

  if (TOKEN === undefined || TOKEN === "null") {
    res.status(404).json({ msg: "Token not found" });
    return;
  }

  jwt.verify(TOKEN, TOKEN_SECRET, (err, decoded) => {
    if (err) {
      res.status(401).json({ status: 401, msg: "Token invalid" });
      return;
    }

    req.params.id = decoded.id;
    next();
  });
};