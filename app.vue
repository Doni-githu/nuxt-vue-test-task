<template>
  <div class="container">
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
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 2",
          "description": "Мини-описание поста 2",
          "reviews": [],
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 3",
          "description": "Мини-описание поста 3",
          "reviews": [],
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 4",
          "description": "Мини-описание поста 4",
          "reviews": [],
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 5",
          "description": "Мини-описание поста 5",
          "reviews": [],
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 6",
          "description": "Мини-описание поста 6",
          "reviews": [],
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 7",
          "description": "Мини-описание поста 7",
          "reviews": [],
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 8",
          "description": "Мини-описание поста 8",
          "reviews": [],
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 9",
          "description": "Мини-описание поста 9",
          "reviews": [],
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 10",
          "description": "Мини-описание поста 10",
          "reviews": [],
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 11",
          "description": "Мини-описание поста 11",
          "reviews": [],
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 12",
          "description": "Мини-описание поста 12",
          "reviews": [],
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 13",
          "description": "Мини-описание поста 13",
          "reviews": [],
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 14",
          "description": "Мини-описание поста 14",
          "reviews": [],
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 15",
          "description": "Мини-описание поста 15",
          "reviews": [],
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 16",
          "description": "Мини-описание поста 16",
          "reviews": [],
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 17",
          "description": "Мини-описание поста 17",
          "reviews": [],
        },
        {
          "image": "https://picsum.photos/200/300",
          "title": "Заголовок поста 19",
          "description": "Мини-описание поста 19",
          "reviews": [],
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