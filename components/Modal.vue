<template>
    <div class="modal2 view" @click="closeIt">
        <div class="modal2-body">
            <div class="modal-header">
                <h5 class="modal-title">{{ post.title }}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                    @click="endSeeDetail"></button>
            </div>
            <div class="card shadow-sm" style="padding: 16px; width: 80%; margin: 0 auto;">
                <img class="img" style="height: 320px;" loading="lazy" :src="post.image">
                <div class="card-body">
                    <p class="card-text"></p>
                    <p>{{ post.description }}</p>
                    <p>created At {{ dateTimeFormat(post.createdAt) }}</p>
                </div>
            </div>
        </div>
        <div class="modal2-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="endSeeDetail">Close</button>
        </div>
    </div>
</template>
<script>
import moment from "moment"
export default {
    props: ['post', 'endSeeDetail'],

    methods: {
        dateTimeFormat(date) {
            return moment(date).format("MMM Do YY")
        },
        closeIt(e){
            if(e.target.className === "modal2 view"){
                this.endSeeDetail()
            }
        }
    }
}
</script>
<style></style>