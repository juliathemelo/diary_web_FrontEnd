<template>
  <div class="footer_screen">
    <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
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
        'mdi-linkedin',
        'mdi-mail',
      ],
    })
};
</script>
<style lang="scss">
  @import "@/scss/footer.scss";
</style>