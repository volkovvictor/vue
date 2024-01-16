<template>
  <div :class="classItem">
    <img :src="require(`@/assets/img/${img}`)" alt="coffee" />
    <div class="best__item-title">{{ text }}</div>
    <div class="best__item-price">{{ price }}$</div>
  </div>
</template>

<script>
export default {
  props: {
    classItem: {
      type: String,
    },
    img: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
};
</script>

