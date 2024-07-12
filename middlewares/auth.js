const jwt = require('jsonwebtoken');
const { Unauthorized } = require('http-errors');

// Middleware function to authenticate JWT token
const authenticateToken = (req, res, next) => {
  // Get token from header
  const token = req.header('Authorization');

  // Check if token exists
  if (!token) {
    return next(new Unauthorized('Access token is required'));
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; // Attach decoded user to request object
    next();
  } catch (error) {
    return next(new Unauthorized('Invalid token'));
  }
};

module.exports = { authenticateToken };
