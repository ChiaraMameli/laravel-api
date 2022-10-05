<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">Boolpress</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">

                <li class="nav-item">
                    <router-link :to="{name:'home'}" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'about-us'}" class="nav-link">About Us</router-link>
                </li>

            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Placeholder'
    }
</script>