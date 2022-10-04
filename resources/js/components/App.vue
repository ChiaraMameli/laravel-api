<template>
    <div>   
        <AppHeader />
        <div class="container">
            <PostsList :posts="posts"/>
        </div>
    </div> 
</template>

<script>
    import axios from 'axios';
    import AppHeader from './AppHeader';
    import PostsList from './posts/PostsList';
    export default{
        components: {
            AppHeader,
            PostsList
        },
    }
</script>

<style>
</style>