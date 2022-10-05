<template>
    <div id="loader-container">
        <div id="loader-item" class="spinner-grow text-primary" role="status">
        </div>
    </div>  
</template>

<script>
export default {
    name: 'AppLoader'
}
</script>

<style scoped lang="scss">
    #loader-container {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        position: fixed;
        z-index: 3;

        background-color: rgba(0, 0, 0, 0.3);

        display: flex;
        justify-content: center;
        align-items: center;

        #loader-item {
            width: 5rem;
            height: 5rem;
        }
    }
</style>