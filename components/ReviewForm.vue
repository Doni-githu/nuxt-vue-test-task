<template>
    <div class="p-4">
        <template v-if="isWriting">
            <h2>Оставить отзыв</h2>
            <form @submit.prevent>
                <div class="mb-3">
                    <label for="reviewText" class="form-label">Текст отзыва</label>
                    <textarea v-model="reviewText" class="form-control" id="reviewText" rows="3"></textarea>
                </div>
                <button type="submit" class="btn btn-primary" @click="onAddComment">Отправить</button>
            </form>
        </template>
        <p><ins class="pointer" @click="isSeeReview = !isSeeReview">{{ isSeeReview ? 'Закрыть' : 'Смотреть' }}</ins> отзывов ({{
            reviews.length }})</p>
        <template v-if="isSeeReview">
            <div class="mt-4">
                <h3>{{ reviews.length > 0 ? 'Отзывы' : 'Нету отзывов' }}</h3>
                <template v-if="reviews.length > 0">
                    <div v-for="review in reviews" :key="review.id" class="comment">
                        <p>{{ review.text }} </p>
                        <button class="btn btn-primary" @click="handleReply(review.id, 'isOthersReply')">Ответить на
                            отзыв</button>
                        <p>
                            <ins class="pointer" @click="handleReply(review.id, 'isOthersSeeReplayed')">{{ review.isOthersSeeReplayed ?
                                'Закрыть' : 'Смотреть' }}</ins> ответы ({{ review.replies.length }})
                        </p>
                        <div>
                            <template v-if="review.isOthersSeeReplayed">
                                <div v-for="reply in review.replies" :key="reply.id" style="padding-left: 16px;" class="comment">
                                    <p>{{ reply.text }}</p>
                                </div>
                            </template>
                            <template v-if="review.isOthersReply">
                                <form @submit.prevent>
                                    <div class="mb-3">
                                        <label for="reviewText" class="form-label">Текст ответа на отзыв</label>
                                        <textarea v-model="replayText" class="form-control" id="reviewText"
                                            rows="3"></textarea>
                                    </div>
                                    <button @click="replyToReview(review.id)" class="btn btn-primary">Ответить</button>
                                </form>
                            </template>
                        </div>
                    </div>
                </template>
            </div>
        </template>
    </div>
</template>
<script>
export default {
    mounted() {
        this.reviews = this.reviewList
    },
    data() {
        return {
            reviewText: '',
            reviews: [],
            replayText: '',
            isSeeReview: false
        };
    },
    props: ['reviewList', 'isWriting', 'endSubmittingComment'],
    methods: {
        onAddComment() {
            if (this.reviewText.trim() === '') {
                alert('Пожалуйста, введите текст отзыва.');
                return;
            }

            const newReview = {
                id: this.generateId(),
                text: this.reviewText,
                replies: [],
                isOthersReply: false,
                isOthersSeeReplayed: false
            };

            this.reviews.push(newReview);
            this.reviewText = '';
            this.isSeeReview = true
            this.endSubmittingComment()
        },
        handleReply(reviewId, object) {
            const review = this.findReviewById(reviewId)
            if (review) {
                review[object] = !review[object]
            }
        },
        replyToReview(reviewId) {
            const review = this.findReviewById(reviewId);
            if (review) {
                if (this.replayText) {
                    const newReply = {
                        id: this.generateId(),
                        text: this.replayText
                    };
                    review.isOthersSeeReplayed = true
                    review.replies.push(newReply);
                    review.isOthersReply = false
                    this.replayText = ""
                }
            }
        },
        findReviewById(reviewId) {
            const some = this.reviews.find(item => item.id === reviewId)
            return some;
        },
        generateId() {
            return '_' + Math.random().toString(36).substr(2, 9);
        }
    }
};
</script>
<style>
.pointer{
    cursor: pointer;
}
</style>