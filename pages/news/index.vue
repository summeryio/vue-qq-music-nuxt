<template>
    <div>
        <h2>News Index page</h2>
        <p>NewID:{{$route.params.newsId}}</p>
        <ul>
            <li><nuxt-link :to="{name:'index'}">Home</nuxt-link></li>
            <li><nuxt-link to="/news/123">News-1</nuxt-link></li>
            <li><a href="/news/123">News-1</a></li>
            <li><a href="/news/a">News-2</a></li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>