<template>
    <div class="col">
        <div class="card shadow-sm" style="padding: 16px;">
            <img class="img" style="height: 320px;" v-show="post.image && isValidWebUrl(post.image)" loading="lazy"
                :src="post.image">
            <div class="card-body">
                <p v-if="post.title" class="card-text">{{ post.title }}</p>
                <p v-if="post.description">{{ post.description }}</p>
                <div class="btn-group">
                    <button class="btn btn-sm btn-outline-primary" @click="isWriting = !isWriting">Поставить
                        отзыв</button>
                    <button class="btn btn-sm btn-outline-primary" @click="isSeeDetail = !isSeeDetail">Детально
                        посмотреть</button>
                </div>
            </div>
            <div>
                <ReviewForm :endSubmittingComment="endSubmittingComment" :isWriting="isWriting"
                    :reviewList="post.reviews" />
            </div>
        </div>
        <template v-if="isSeeDetail">
            <Modal :post="post" :endSeeDetail="endSeeDetail" />
        </template>
    </div>
</template>
<script>

export default {
    data() {
        return {
            isWriting: false,
            isSeeDetail: false
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
        },
        endSeeDetail() {
            this.isSeeDetail = false
        }
    },
}
</script>
<style>
.img {
    border-top-right-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
}
.modal2-body{
    background-color: white;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-radius: 0.375rem;
}

.view {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.2);
    top: 50%;
    left: 50%;
    overflow: auto;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    display: flex;
    gap: 8px;
    flex-direction: column;
    padding: 20px;
    z-index: 99;
}

.modal2-footer {
    display: flex;
    justify-content: flex-end;
}
</style>