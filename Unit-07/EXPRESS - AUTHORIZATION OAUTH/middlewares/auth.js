import { verify } from "../utils/jwt.js";
export default async function auth(req, res, next) {
   
    const authHeader = req.headers.authorization;
    if (authHeader) {
        
        const token = authHeader.split(' ')[1];
        if (token) {
            try {
                const decoded = verify(token);
                req.user = decoded;
            } catch(err) {
                console.error(err);
            }
        }
    }
    next();
}