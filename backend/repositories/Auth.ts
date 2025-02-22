import { User } from '../models/User';
import * as jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

class AuthRepository {
    async Login(email: string, password: string) {
        try {
            const user = await User.findOne({ email: email });

            if(!user) {
                throw new Error("No user found");
            }

            if(!await bcrypt.compare(password, user.password)) {
                throw new Error("Password not matching");
            }

            return jwt.sign({ id: user._id.toString() }, process.env.JWT_SECRET);
        }
        catch(e: any) {
            throw new Error(e);
        }
    }
}

export default new AuthRepository();