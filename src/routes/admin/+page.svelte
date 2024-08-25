<script>
    export let data;
    let editId = null;
    let editForm = {
        name: '',
        phone: '',
        message: ''
    };
    function handleSave(userId) {
        // Here you would send the updated data to the server to save it in the database
        console.log('Saving data for user:', editForm);

        // After saving, reset the editId to null to exit edit mode
        editId = null;
    }

    
    function handleEdit(user) {
        // Here you can handle the edit logic
        console.log('Edit user:', user);
        // Set the current row to edit mode
        editId = user.id;
        editForm = { ...user };
        // You can redirect to an edit page or open an inline edit form
        // For now, we're just logging the user details
    }
    function handleCancel() {
        // Reset the editId to exit edit mode without saving
        editId = null;
    }

</script>

<h1>Form Submissions</h1>


<!-- Displaying the data in a table -->
<div class="table-container">
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Message</th>
                <th>Submitted At</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {#each data.users as user}
                <tr>
                    {#if editId === user.id}
                        <!-- If in edit mode, display input fields -->
                        <td>{user.id}</td>
                        <td><input type="text" bind:value={editForm.name} /></td>
                        <td><input type="text" bind:value={editForm.phone} /></td>
                        <td><input type="text" bind:value={editForm.message} /></td>
                        <td>{new Date(user.created_at).toLocaleString()}</td>
                        <td>
                            <button on:click={() => handleSave(user.id)}>Save</button>
                            <button on:click={handleCancel}>Cancel</button>
                        </td>
                    {:else}
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.phone}</td>
                        <td>{user.message}</td>
                        <td>{new Date(user.created_at).toLocaleString()}</td>
                        <td>
                            <!-- Edit Button -->
                            <button on:click={() => handleEdit(user)}>Edit</button>
                        </td>
                    {/if}
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>

    .table-container {
        margin: 20px auto; /* Center the table horizontally */
        overflow-x: auto;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        max-width: 90%; /* Ensure responsiveness */
    }

    table {
        width: 100%;
        border-collapse: collapse;
        background-color: #fff;
        border-radius: 8px;
        overflow: hidden;
        
    }

    th, td {
        padding: 12px 15px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    th {
        background-color: #007BFF;
        color: #fff;
        text-transform: uppercase;
        font-weight: 600;
    }

    tr:nth-child(even) {
        background-color: #f9f9f9;
    }

    tr:hover {
        background-color: #f1f1f1;
    }

    td {
        color: #333;
    }

    h1 {
        text-align: center;
        color: #333;
        font-size: 28px;
        margin-bottom: 20px;
    }
    button {
        padding: 8px 12px;
        background-color: #28a745;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    button:hover {
        background-color: #218838;
    }

    input {
        padding: 8px;
        width: 100%;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
</style>