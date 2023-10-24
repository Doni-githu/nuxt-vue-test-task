<template>
    <div class="col">
        <div class="card shadow-sm">
            <img class="img" v-show="post.image && isValidWebUrl(post.image)" loading="lazy" :src="post.image">
            <div class="card-body">
                <p v-if="post.title" class="card-text">{{ post.title }}</p>
                <p v-if="post.description">{{ post.body }}</p>
                <button class="btn btn-sm btn-outline-secondary" @click="isWriting = !isWriting">Поставить отзыв</button>
            </div>
            <div>
                <ReviewForm :endSubmittingComment="endSubmittingComment" :isWriting="isWriting" :reviewList="post.reviews" />
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            isWriting: false,
        }
    },
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    methods: {
        isValidWebUrl(url) {
            let regEx = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9¡-￿][a-z0-9¡-￿_-]{0,62})?[a-z0-9¡-￿]\.)+(?:[a-z¡-￿]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
            return regEx.test(url);
        },
        endSubmittingComment() {
            this.isWriting = false
        }
    },
}
</script>
<style scoped>
.img {
    border-top-right-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
}
</style>