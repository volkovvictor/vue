<template>
  <header>
    <ul
      class="header d-flex justify-content-center justify-content-md-start flex-wrap"
    >
      <link-component :link="links.main.link" classBar="header__item">
        <img
          :src="require(`@/assets/logo/${links.main.icon}`)"
          :alt="links.main.icon"
        />
      </link-component>
      <link-component
        v-for="link in links.other"
        :key="link.id"
        :link="link.link"
        :text="link.text"
        classBar="header__item"
      />
    </ul>
  </header>
</template>

<script>
import LinkComponent from "@/components/LinkComponent.vue";
export default {
  components: { LinkComponent },
  data() {
    return {
      links: {
        main: {
          id: 0,
          icon: "Logo.svg",
          link: "/",
        },

        other: [
          {
            id: 1,
            text: "Our coffee",
            link: "/ourcoffee",
          },
          {
            id: 2,
            text: "For your pleasure",
            link: "/goodspage",
          },
          {
            id: 3,
            text: "Contact us",
            link: "/contacts",
          },
        ],
      },
    };
  },
};
</script>
