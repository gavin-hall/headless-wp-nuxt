<template>
  <div>
    <app-masthead></app-masthead>
    <div class="posts">
      <main class="max-w-5xl mx-auto px-12 prose">
        <div class="my-12" v-for="post in sortedPosts" :key="post.id">
          <h3 class="font-semibold text-3xl">
            <a :href="`blog/${post.slug}`" class="">{{ post.title.rendered }}</a>
          </h3>
          <div class="my-4 text-gray-500">{{ post.date | dateformat }}</div>
          <div v-html="post.excerpt.rendered"></div>
          <a :href="`blog/${post.slug}`" class="text-blue-500 hover:text-blue-600">Read more ⟶</a>
        </div>
      </main>
      <aside>
        <h2 class="tags-title">Tags</h2>
        <div class="tags-list">
          <ul>
            <li
              @click="updateTag(tag)"
              v-for="tag in tags"
              :key="tag.id"
              :class="[tag.id === selectedTag ? activeClass : '']"
            >
              <a>{{ tag.name }}</a>
              <span v-if="tag.id === selectedTag">✕</span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import AppMasthead from "@/components/AppMasthead.vue";

export default {
  components: {
    AppMasthead
  },
  data() {
    return {
      selectedTag: null,
      activeClass: "active"
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    tags() {
      return this.$store.state.tags;
    },
    sortedPosts() {
      if (!this.selectedTag) return this.posts;
      return this.posts.filter(el => el.tags.includes(this.selectedTag));
    }
  },
  created() {
    this.$store.dispatch("getPosts");
  },
  methods: {
    updateTag(tag) {
      if (!this.selectedTag) {
        this.selectedTag = tag.id;
      } else {
        this.selectedTag = null;
      }
    }
  }
};
</script>

<style lang="scss">

</style>
