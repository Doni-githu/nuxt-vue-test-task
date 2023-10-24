<template>
  <div class="container" style="position: relative;">
    <Post />
  </div>
</template>
<script>
import Post from "./components/Post.vue";
export default {
  components: {
    Post
  },
  data() {
    return {
      posts: [
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 1",
          "description": "Мини-описание поста 1",
          "reviews": [],
          "createAt": "2023-10-24T14:11:43.170Z"
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 2",
          "description": "Мини-описание поста 2",
          "reviews": [],
          "createAt": "2023-10-24T14:11:42.440Z"
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 3",
          "description": "Мини-описание поста 3",
          "reviews": [],
          "createAt": "2023-10-24T14:11:42.644Z"
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 4",
          "description": "Мини-описание поста 4",
          "reviews": [],
          "createAt": "2023-10-24T14:11:43.170Z"
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 5",
          "description": "Мини-описание поста 5",
          "reviews": [],
          "createAt": "2023-10-24T14:11:43.170Z"
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 6",
          "description": "Мини-описание поста 6",
          "reviews": [],
          "createAt": "2023-10-24T14:11:43.170Z"
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 7",
          "description": "Мини-описание поста 7",
          "reviews": [],
          "createAt": "2023-10-24T14:11:43.170Z"
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 8",
          "description": "Мини-описание поста 8",
          "reviews": [],
          "createAt": "2023-10-24T14:11:43.170Z"
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 9",
          "description": "Мини-описание поста 9",
          "reviews": [],
          "createAt": "2023-10-24T14:11:43.170Z"
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 10",
          "description": "Мини-описание поста 10",
          "reviews": [],
          "createAt": "2023-10-24T14:11:43.170Z"
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 11",
          "description": "Мини-описание поста 11",
          "reviews": [],
          "createAt": "2023-10-24T14:11:43.170Z"
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 12",
          "description": "Мини-описание поста 12",
          "reviews": [],
          "createAt": "2023-10-24T14:11:43.170Z"
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 13",
          "description": "Мини-описание поста 13",
          "reviews": [],
          "createAt": "2023-10-24T14:11:43.170Z"
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 14",
          "description": "Мини-описание поста 14",
          "reviews": [],
          "createAt": "2023-10-24T14:11:43.170Z"
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 15",
          "description": "Мини-описание поста 15",
          "reviews": [],
          "createAt": "2023-10-24T14:11:43.170Z"
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 16",
          "description": "Мини-описание поста 16",
          "reviews": [],
          "createAt": "2023-10-24T14:11:43.170Z"
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 17",
          "description": "Мини-описание поста 17",
          "reviews": [],
          "createAt": "2023-10-24T14:11:43.170Z"
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 18",
          "description": "Мини-описание поста 18",
          "reviews": [],
          "createAt": "2023-10-24T14:11:43.170Z"
        },
      ]
    }
  },
  provide() {
    return {
      posts: this.posts
    }
  }
}
</script>