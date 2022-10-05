<template>
    <PostCard :posts="posts"/>
</template>

<script>
import PostCard from './PostCard.vue';
export default {
    name: 'PostList',
    components: {
        PostCard
    },
    data(){
            return{
                posts: []
            }
        },
        methods: {
            fetchPosts(){
                axios.get('http://127.0.0.1:8000/api/posts')
                .then(res => {
                    this.posts = res.data;
                })
            }
        },
        mounted(){
            this.fetchPosts();
        }

}
</script>

<style>

</style>