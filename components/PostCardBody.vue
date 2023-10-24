<template>
    <div class="card-body">
        <p v-if="post.title" class="card-text">{{ post.title }}</p>
        <p v-if="post.description">{{ post.description }}</p>
        <div class="btn-group">
            <button class="btn btn-sm btn-outline-primary" @click="changeBooleans('isWriting')">Поставить
                отзыв</button>
            <button class="btn btn-sm btn-outline-primary" @click="changeBooleans('isSeeDetail')">Детально
                посмотреть</button>
        </div>
    </div>
</template>
<script>
export default {
    props: ['post', 'changeBooleans']
}   
</script>
<style></style>