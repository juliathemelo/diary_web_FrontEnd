<template>
  <div class="footer_screen">
    <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon.name"
          :href="icon.link"
          target="_blank"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon.name }}
          </v-icon>
        </v-btn>
      </v-card-text>

    <v-divider></v-divider>

    <v-card-text id="text_footer">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
    </v-card-text>
  </div>  
</template>
<script>
export default {
  name: "FooterComponent",
   data: () => ({
      icons: [
        {name: 'mdi-linkedin', link: 'https://www.linkedin.com/in/juliameloalbuquerque/'},
        {name: 'mdi-github', link: 'https://github.com/juliathemelo'}
      ],
    })
};
</script>
<style lang="scss">
  @import "@/scss/footer.scss";
</style>