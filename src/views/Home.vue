<template>
  <v-main>
    <v-img 
      max-height="500px"
      fluid
      src="../assets/homewalpaper.png"
    >
    </v-img>  
    <v-col class="text_home">
      <h2 id="user_welcome"> Hello NomeDoUsuario =D </h2>
      <h1 id="title_home"> Welcome to diary tool </h1>
      <p id="subtitle_home"> Here your secrets keep safe, we promise for you </p>
    </v-col>
    <h2 id="tutorial_button"> Select The Function: </h2>
    <v-row class="button_home">     
      <button id="button_plus_diary">
        <v-icon aria-hidden="false" id="icon_plus_home">
          mdi-plus
        </v-icon>
      </button>
       <button id="button_edit_diary">
        <v-icon aria-hidden="false" id="icon_plus_edit">
          mdi-pencil
        </v-icon>
      </button>
      <button id="button_info_diary">
        <v-icon aria-hidden="false" id="icon_plus_home">
          mdi-folder-account-outline
        </v-icon>
      </button>
       <button id="button_delete_diary">
        <v-icon aria-hidden="false" id="icon_plus_home">
          mdi-delete
        </v-icon>
      </button>
      <FooterComponent />
    </v-row>
  </v-main>
</template>
<script>
import FooterComponent from "@/components/FooterComponent"

export default {
  name: "Home",
  components: {
    FooterComponent
  }
};
</script>
<style lang="scss">
  @import "@/scss/home.scss";
</style>