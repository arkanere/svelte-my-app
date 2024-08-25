import { createPool } from '@vercel/postgres';
import { POSTGRES_URL } from '$env/static/private'




export async function load({}){
    const pool = createPool({connectionString: POSTGRES_URL});
    //attempt to get users from user table return nothing if table does not exist or error
    const {rows} = await pool.query('SELECT * FROM contact_us_form ORDER BY created_at DESC');
    console.log(rows)
    return {users:rows}
}