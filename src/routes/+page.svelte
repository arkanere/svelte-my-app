<script>
    // Titles of the blog articles with links to their respective pages
    const articles = [
        { title: "Blog Article 1", link: "/blogs/article1" },
        { title: "Blog Article 2", link: "/blogs/article2" },
        { title: "Blog Article 3", link: "/blogs/article3" }
    ];
</script>

<style>
    /* Optional: Add styles for the homepage */
    .homepage-container {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        font-family: Arial, sans-serif;
        text-align: center;
    }

    .article-list {
        list-style: none;
        padding: 0;
    }

    .article-list li {
        margin-bottom: 1rem;
        font-size: 1.2rem;
    }

    .article-list a {
        text-decoration: none;
        color: #0070f3;
    }

    .article-list a:hover {
        text-decoration: underline;
    }

    .contact-us-link a {
        text-decoration: none;
        color: #0070f3;
    }

    .contact-us-link a:hover {
        text-decoration: underline;
    }


</style>

<div class="homepage-container">
    <h1>Blog Articles</h1>
    <ul class="article-list">
        {#each articles as article}
            <li>
                <a href={article.link}>{article.title}</a>
            </li>
        {/each}
    </ul>
    <div class="contact-us-link">
    <a href='/contact-us'>Contact us</a>
    </div>
</div>
