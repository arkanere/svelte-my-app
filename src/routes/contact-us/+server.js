import pool from '$lib/db';

export async function POST({ request }) {
  const data = await request.formData();
  const name = data.get('name');
  const phone = data.get('phone');
  const message = data.get('message');

  try {
    const client = await pool.connect();
    await client.query(
      'INSERT INTO contact_us_form (name, phone, message) VALUES ($1, $2, $3)',
      [name, phone, message]
    );
    client.release();
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Database error:', err);
    return new Response(JSON.stringify({ error: 'Database error' }), { status: 500 });
  }
}
