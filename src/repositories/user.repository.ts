/* import User from "../models/user.model";
import db from "../db.ts";
class UserRepository{
    async findAllUsers(): Promise<User[]>{
        const query = `SELECT uuid,username FROM application_user`;
        const result = await db.query(query)
        const rows = result.rows 
        return rows || [];
    }
}

export default new UserRepository(); */