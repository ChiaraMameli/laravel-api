<template>
    <div>   
        <AppHeader />
        <main class="container">
            <HomePage />
        </main>
    </div> 
</template>

<script>
    import axios from 'axios';
    import AppHeader from './AppHeader';
    import HomePage from './pages/HomePage';
    export default{
        components: {
            AppHeader,
            HomePage
        },
    }
</script>

<style>
</style>