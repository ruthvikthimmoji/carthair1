// lib/cors.js
import Cors from 'cors';

// Initialize the cors middleware
export const cors = Cors({
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS'], // Add other methods as needed
  origin: '*', // Change to specific origin in production
});

// Helper method to handle the CORS middleware
export default function initMiddleware(handler) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      // Run the middleware
      cors(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(handler(req, res));
      });
    });
}
