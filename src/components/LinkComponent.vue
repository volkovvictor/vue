<template>
  <li :class="classBar">
    <router-link :to="link">{{ text }}<slot></slot></router-link>
  </li>
</template>

<script>
export default {
  props: {
    classBar: {
      type: String,
    },
    text: {
      type: String,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>
