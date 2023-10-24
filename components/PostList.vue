<template>
    <template v-if="posts.length > 0">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-center">
            <PostCard v-for="(item, index) in posts" :post="item" :key="index" />
        </div>
    </template>
</template>
<script>
export default {
    inject: ['posts']
}
</script>