
<script>
    export let data;
    // export let user = data.props.user
    // console.log(data.props.user)
    export let user = data?.props?.user;  // Use optional chaining to safely access user

    if (!user) {
        console.log('No user data found for the given ID.');
        console.error('User data not available.');
    }
</script>

{#if user}
    <article>
        <h1>User Details</h1>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Message:</strong> {user.message}</p>
        <p><strong>Submitted At:</strong> {new Date(user.created_at).toLocaleDateString()}</p>
    </article>
{:else}
    <p>User not found or data not available.</p>
{/if}

<style>
    article {
        max-width: 600px;
        margin: 2rem auto;
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 8px;
    }
</style>