import { Pool } from "node-postgres";

const connectionString = ""
const db = new Pool({connectionString})

export default db

