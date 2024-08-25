<script>
    export let entries=[];
    {console.log(entries)}
</script>

<h1>Admin: Form Submissions</h1>

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
        {#each entries as entry}
            <tr>
                <td>{entry.id}</td>
                <td>{entry.name}</td>
                <td>{entry.phone}</td>
                <td>{entry.message}</td>
                <td>{entry.created_at}</td>
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
