<template>
    <div>   
        <AppHeader />
        <ul>
            <li v-for="post in posts" :key="post.id">{{post.title}}</li>
        </ul>
    </div> 
</template>

<script>
    import axios from 'axios';
    import AppHeader from './AppHeader';
    export default{
        components: {
            AppHeader
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