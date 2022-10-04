<template>
    <div>
        <div class="card mb-3" v-for="post in posts" :key="post.id">
            <div class="card-body">
                <h5 class="card-title">{{post.title}}</h5>
                <p class="card-text">{{post.content}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PostCard',
    props: {
        posts: Object
    },

}
</script>

<style>

</style>