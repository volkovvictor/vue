<template>
  <div :class="classItem" @click="onEmmit(card.id)">
    <img :src="require(`@/assets/img/${card.img}`)" :alt="card.img" />
    <div class="best__item-title">{{ card.text }}</div>
    <slot></slot>
    <div class="best__item-price">{{ card.price | filterPrice }}</div>
  </div>
</template>

<script>
export default {
  props: {
    classItem: {
      type: String,
    },
    card: {
      type: Object,
      required: true,
    },
  },

  methods: {
    onEmmit(id) {
      this.$emit("onNavigate", id);
    },
  },
};
</script>

