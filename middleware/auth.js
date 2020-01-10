const jwt = require("jsonwebtoken");

module.exports = function(request, response, next) {

  let token;
  if (
    request.headers.authorization &&
    request.headers.authorization.startsWith('Bearer')
  ) {
    token = request.headers.authorization.split(' ')[1];
  } 

  if (!token) {
     return response.status(401).json({ error: 'token missing' })
  }

  try {
    const decodedToken = jwt.verify(token, process.env.SECRET);
    request.user = decodedToken;
    next();
  } catch (ex) {
    return response.status(400).json({ error: 'token invalid' })
  }
};