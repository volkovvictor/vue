<template>
  <li :class="classBar">
    <router-link :to="link">{{ text }}</router-link>
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
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>
