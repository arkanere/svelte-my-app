
import { json, error } from '@sveltejs/kit';

import pkg from 'pg';
const {Pool} = pkg;


// Initialize PostgreSQL connection pool with environment variables
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false // Ensure SSL is used for connection
  }
});

// Handler for POST request to save form data
export async function POST({ request }) {
  try {
    const data = await request.json();
    const { name, phone, message } = data;

    // Validate the data
    if (!name || !phone || !message) {
      return error(400, 'All fields are required');
    }

    // Insert the form data into the PostgreSQL database
    const client = await pool.connect();
    try {
      await client.query(
        'INSERT INTO contact_us_form (name, phone, message) VALUES ($1, $2, $3)',
        [name, phone, message]
      );
    } finally {
      client.release(); // Release client back to pool
    }

    return json({ success: true });
  } catch (err) {
    console.error('Database error:', err);
    return error(500, 'Internal server error');
  }
}
