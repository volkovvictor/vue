export const navigator = {
   methods: {
      navigate(id) {
        this.$router.push({ name: this.name, params: { id: id } });
      },
    },
}