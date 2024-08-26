
import { createPool } from '@vercel/postgres';
import { POSTGRES_URL } from '$env/static/private'



export async function load({ params }) {
    const { userId } = params;
    const pool = createPool({connectionString: POSTGRES_URL});
    const query = 'SELECT name, phone, message, created_at FROM contact_us_form WHERE id = $1';
    console.log('userId')
    console.log(userId)

    try {
        const { rows } = await pool.query(query, [userId]);
        console.log(rows)
        console.log('rows')
        if (rows.length === 0) {
            console.log(rows.length)
            console.log('rows.length')
            return {
                status: 404,
                props: { user: null },
                error: new Error('User not found')
            };
        }
        return {
            props: { user: rows[0]},
            maxage: 60 
              
        };
    } catch (error) {
        console.log('catch part of the code')
        console.error('Database error:', error);
        return {
            status: 500,
            error: new Error('Internal server error while fetching user data')
        };
    }
}
