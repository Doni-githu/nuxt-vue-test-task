<template>
    <template v-if="posts.length > 0">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-center">
            <PostCard v-for="(item, index) in posts" :post="item" :key="index" />
        </div>
    </template>
</template>
<script>
export default {
    mounted() {
        const newPosts = this.posts.map((item) => ({
            ...item,
            createAt: new Date(Date.now() - Number(Math.random() * 1000)).toISOString()
        }))
        this.posts = newPosts
    },
    inject: ['posts']
}
</script>