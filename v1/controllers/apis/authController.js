import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
class authController{
    static async register(req, res){
        try {
            return res.status(200).json("Register user");
        } catch (error) {
            console.log(error.message);
            return res.status(500).json(error);
        }
    }
}

export default authController;