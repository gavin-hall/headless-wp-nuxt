<template>
  <div class="nav">
    <ul>
      <li>
        <nuxt-link exact to="/">
          <app-icon></app-icon>BlogName
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import AppIcon from "@/components/AppIcon.vue";

export default {
  components: {
    AppIcon
  }
};
</script>

<style lang="scss" scoped>

</style>
