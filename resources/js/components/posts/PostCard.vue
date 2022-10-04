<template>
    <div>
        <div class="card mb-3" v-for="post in posts" :key="post.id">
            <div class="card-body">
                <h5 class="card-title">{{post.title}}</h5>
                <p class="card-text">{{post.content}}</p>
            </div>
            <div class="d-flex justify-content-between card-footer">
                <div v-if="post.category">
                    <span class="badge badge-pill" :class="`badge-${post.category.color}`" style="width: 4rem">{{post.category.label}}</span>
                </div>
                <div v-else>
                    <span>No category found</span>
                </div>

                <div v-if="post.tags">
                    <span v-for="tag in post.tags" :key="tag.id" class="badge ml-1" :class="`badge-${tag.color_tag}`" style="width: 4rem">{{tag.label}}</span>
                </div>
                <div v-else>
                    <span>No tag found</span>
                </div>


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