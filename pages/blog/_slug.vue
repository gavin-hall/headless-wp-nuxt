<template>
  <main class="post individual max-w-5xl mx-auto px-12">
    <h1>{{ post.title.rendered }}</h1>
    <small class="date">{{ post.date | dateformat }}</small>
    <section v-html="post.content.rendered" class="prose"></section>
  </main>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    post() {
      return this.posts.find(el => el.slug === this.slug);
    }
  },
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  created() {
    this.$store.dispatch("getPosts");
  }
};
</script>

<style lang="scss" scoped>
 p {
   @apply my-4;
 }
</style>
