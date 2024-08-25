<script>
    let name = '';
    let phone = '';
    let message = '';
    let success = false;

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await fetch('/contact-us', {
            method: 'POST',
            body: new FormData(event.target),
        });

        // console.log({ name, phone, message });

        

        const result = await response.json();
        success = result.success;

        if (success) {
            alert('Form submitted successfully!');
            // Optionally, clear the form
            name = '';
            phone = '';
            message = '';
        } else {
           // alert('There was an issue submitting the form.');
        }
    }
</script>

<style>
    .contact-form-container {
        max-width: 600px;
        margin: 0 auto;
        padding: 2rem;
        font-family: Arial, sans-serif;
    }

    .form-field {
        margin-bottom: 1rem;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
    }

    input, textarea {
        width: 100%;
        padding: 0.5rem;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
    }

    button {
        padding: 0.7rem 1.5rem;
        background-color: #0070f3;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    button:hover {
        background-color: #005bb5;
    }
</style>

<div class="contact-form-container">
    <h1>Contact Us</h1>
    <form on:submit={handleSubmit}>
        <div class="form-field">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" bind:value={name} required />
        </div>

        <div class="form-field">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" bind:value={phone} required />
        </div>

        <div class="form-field">
            <label for="message">Message</label>
            <textarea id="message" name="message" bind:value={message} rows="5" required></textarea>
        </div>

        <button type="submit">Submit</button>
    </form>
</div>