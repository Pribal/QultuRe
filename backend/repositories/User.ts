import { User } from "../models/User";
import { UserType } from "../types/User";
import bcrypt from "bcrypt";

class UserRepository {
    async createUser(email: string, password: string, role: string) {
        try {
            const newUser: UserType = {
                email: email,
                role: role,
                xp: 0,
                password: bcrypt.hashSync(password, 10),
                foundLocations: []
            }
    
            await User.create(newUser);
        }
        catch(e: any) {
            throw new Error(e);
        }
    }

    async deleteUser(userId: string) {
        try {
            await User.findByIdAndDelete(userId);
        }
        catch(e: any) {
            throw new Error(e);
        }
    }

    async getUserById(userId: string) {
        try {
            const user = await User.findById(userId);

            if(!user) {
                throw new Error("User not found");
            }
        }
        catch(e: any) {
            throw new Error(e);
        } 
    }
}

export default new UserRepository();