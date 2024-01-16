<template>
  <header>
    <ul
      class="header d-flex justify-content-center justify-content-md-start flex-wrap"
    >
      <li class="header__item">
        <router-link :to="links[0].link">
          <img
            :src="require(`@/assets/logo/${links[0].icon}`)"
            :alt="links[0].icon"
          />
        </router-link>
      </li>
      <link-component
        classBar="header__item"
        :link="links[1].link"
        :text="links[1].text"
      />
      <link-component
        classBar="header__item"
        :link="links[2].link"
        :text="links[2].text"
      />
      <link-component
        classBar="header__item"
        :link="links[3].link"
        :text="links[3].text"
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
      links: [
        {
          id: 0,
          icon: "Logo.svg",
          link: "/",
        },
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
    };
  },
};
</script>
