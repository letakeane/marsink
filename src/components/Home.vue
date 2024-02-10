<template>
  <v-main
    height="100%"
  >
    <v-card 
      image="../assets/claudia.png"
      lazy-src="../assets/lazy.png"
      height="100%"
      cover
      class="d-flex flex-column justify-center align-center"
    >
      <v-container class="text-center banner-container">
        <h1 class="text-lg-h1 text-md-h2 text-sm-h3 font-weight-black text-pink-lighten-1 mt-16">Claudia Mars Ink</h1>
        <p class="font-weight-bold text-pink-lighten-2 mb-4">tattoo artist 💜 boulder co</p>
        <v-btn class="mb-16 rounded-lg" color="teal-lighten-1" prepend-icon="mdi-calendar-star-outline">Book a tattoo appointment!</v-btn>
      </v-container>
    </v-card>
  </v-main>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style>
  .banner-container {
    background-color: RGBA(255, 204, 128, 0.8);
  }
</style>