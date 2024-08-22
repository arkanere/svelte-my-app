import { createPool } from '@vercel/postgres';
import { POSTGRES_URL } from '$env/static/private'



// Create a connection pool
const pool = createPool({
    connectionString: POSTGRES_URL
});

// Function to handle queries
export async function query(text, params) {
    const client = await pool.connect();
    try {
        const res = await client.query(text, params);
        return res;
    } finally {
        client.release();
    }
}

// Handle POST requests
export async function POST({ request }) {
    try {
        // Get the form data from the request
        const formData = await request.formData();
        const name = formData.get('name');
        const phone = formData.get('phone');
        const message = formData.get('message');

        // Log the received form data (for verification)
        console.log('Received form data:', { name, phone, message });

        // Insert the form data into the contact_us_form table
        const insertQuery = `
            INSERT INTO contact_us_form (name, phone, message)
            VALUES ($1, $2, $3)
            RETURNING id;
        `;
        const result = await query(insertQuery, [name, phone, message]);

        // Respond with a success message
        return new Response(JSON.stringify({
            success: true,
            id: result.rows[0].id
        }), {
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error('Error saving form data:', error);
        return new Response(JSON.stringify({
            success: false,
            error: 'Failed to save form data'
        }), {
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
