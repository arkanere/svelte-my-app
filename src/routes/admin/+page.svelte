<script>
    export let data;
    console.log(data);

</script>

<h1>Admin: Form Submissions</h1>


<!-- Displaying the data in a table -->
<table>
    <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Submitted At</th>
        </tr>
    </thead>
    <tbody>
        {#each data.users as user}
            <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{user.message}</td>
                <td>{new Date(user.created_at).toLocaleString()}</td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        width: 100%;
        border-collapse: collapse;
    }
    th, td {
        padding: 10px;
        border: 1px solid #ddd;
    }
    th {
        background-color: #f4f4f4;
    }
</style>

