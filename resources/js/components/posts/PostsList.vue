<template>
    <div>
        <AppLoader v-if="isLoading" />
        <PostCard v-else :posts="posts"/>
    </div>
</template>

<script>
import PostCard from './PostCard.vue';
import AppLoader from '../AppLoader.vue';
export default {
    name: 'PostList',
    components: {
        PostCard,
        AppLoader
    },
    data(){
            return{
                posts: [],
                isLoading: true,
            }
        },
    methods: {
        fetchPosts(){
            axios.get('http://127.0.0.1:8000/api/posts')
            .then(res => {
                this.posts = res.data;
            })
            .catch(err => {
                console.error(err);
            })
            .then(() => {
                this.isLoading = false;
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