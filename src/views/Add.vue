<template>
  <v-main class="form_diary">
  <h1 id="title_add"> TESTESTESTESTES </h1>
    <v-form
    ref="form"
    lazy-validation
  >
    <v-card 
      class="diary_message"
      outlined
      shaped
      tile
    >
      <v-card-title>
        Add note for your diary:
      </v-card-title>
      <v-col
        cols="12"
        md="15"
      >
        <v-text-field
          v-model="title"
          label="Title"
          solo
        >
        </v-text-field>
      </v-col>
      
      <v-col
        cols="12"
        md="20"
      >
        <v-textarea
          solo
          name="input-7-4"
          label="Solo textarea"
          counter
          style="resize: none;"
        >
        </v-textarea>
      </v-col>

      <v-btn
        color="black"
        id="button_reset_add"
        @click="reset"
      >
        Reset Form
      </v-btn>
    </v-card>
  </v-form>
    <FooterComponent />
  </v-main>
</template>
<script>
import FooterComponent from "@/components/FooterComponent"

export default {
  name: "Add",
  components: {
    FooterComponent
  },
  methods: {
    reset () {
      this.$refs.form.reset()
    },
  },
};
</script>
<style lang="scss">
  @import "@/scss/add.scss";
</style>
