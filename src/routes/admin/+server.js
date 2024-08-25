import { createPool } from '@vercel/postgres';
import { POSTGRES_URL } from '$env/static/private'

export async function PUT({ request }) {
    const formData = await request.formData();
    const id = formData.get('id');
    const name = formData.get('name');
    const phone = formData.get('phone');
    const message = formData.get('message');

    // Log incoming data for debugging
    console.log('Received data:', { id, name, phone, message });

    const pool = createPool({connectionString: POSTGRES_URL});
    const updateQuery = `
        UPDATE contact_us_form
        SET name = $1, phone = $2, message = $3
        WHERE id = $4
    `;

    try {
        const result = await pool.query(updateQuery, [name, phone, message, id]);
        console.log('Update result:', result);  // Log the result of the query
        return new Response(JSON.stringify({ success: true }), {
            headers: { 'Content-Type': 'application/json' },
            status: 200
        });
    } catch (error) {
        console.error('Database error:', error); // Detailed error logging
        return new Response(JSON.stringify({ success: false, error: error.message }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500
        });
    }
}

export async function DELETE({ url }) {
    const params = new URL(url).searchParams;
    const userId = params.get('userId');  // Extract userId from query parameters

    const pool = createPool({connectionString: POSTGRES_URL});
    const deleteQuery = `
        DELETE FROM contact_us_form
        WHERE id = $1
    `;

    try {
        await pool.query(deleteQuery, [userId]);
        return new Response(JSON.stringify({ success: true }), {
            headers: { 'Content-Type': 'application/json' },
            status: 200
        });
    } catch (error) {
        console.error('Database error:', error);
        return new Response(JSON.stringify({ success: false, error: error.message }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500
        });
    }
}