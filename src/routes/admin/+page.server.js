import { createPool } from '@vercel/postgres';
import { POSTGRES_URL } from '$env/static/private'


export async function load() {
    console.log('Connecting to PostgreSQL...');
    // Establish connection to the PostgreSQL database
    const pool = createPool({connectionString: POSTGRES_URL});
    try {
        console.log('Connected to PostgreSQL. Executing query...');

        const { rows } = await pool.query('SELECT * FROM contact_us_form ORDER BY created_at DESC');
        // Return the data to be used in the frontend
        console.log('printing queried data')
        console.log(rows)
        return {
        entries : rows
        }
    }catch (error) {
        // Log the error if any
        console.error('Error fetching form entries:', error);
        return {
            formEntries: result.rows
        };
    }
}
