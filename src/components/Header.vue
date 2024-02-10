<template>
  <v-navigation-drawer
    color="pink-lighten-2"
    width="175"
    :rail="rail"
    permanent
    @click="rail = false"
  >
    <v-list-item>
      <v-img src="../assets/CM.gif" aspect-ratio="1" cover></v-img>
    </v-list-item>
    <template v-slot:append>
        <v-btn
          v-if="!rail"
          variant="text"
          icon="mdi-chevron-left"
          @click.stop="rail = !rail"
          class="float-right"
        ></v-btn>
        <v-btn
          v-else
          variant="text"
          icon="mdi-chevron-right"
          @click.stop="rail = !rail"
        ></v-btn>
      </template>
    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-home-heart" to="/" @click.stop="rail = true">Home</v-list-item>
      <v-list-item prepend-icon="mdi-calendar-star-outline" to="/book" @click.stop="rail = true">Book</v-list-item>
      <v-list-item prepend-icon="mdi-view-grid" to="/gallery" @click.stop="rail = true">Gallery</v-list-item>
      <v-list-item prepend-icon="mdi-frequently-asked-questions" to="/faq" @click.stop="rail = true">FAQ</v-list-item>
      <v-list-item prepend-icon="mdi-bandage" to="/aftercare" @click.stop="rail = true">Aftercare</v-list-item>
      <v-list-item prepend-icon="mdi-star" to="/policies" @click.stop="rail = true">Policies</v-list-item>
      <v-list-item prepend-icon="mdi-gift" to="/giftcard" @click.stop="rail = true">Gift Cards</v-list-item>
      <v-list-item prepend-icon="mdi-heart" to="/about" @click.stop="rail = true">About</v-list-item>
      <v-spacer />
      <v-divider />
      <v-spacer />
      <v-list-item prepend-icon="mdi-instagram" href="https://instagram.com/claudia___mars" target="_blank">insta</v-list-item>
      <v-list-item prepend-icon="mdi-clock" href="https://www.tiktok.com/@claudia_mars_" target="_blank">
        tiktok
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Header',
  data () {
      return {
        drawer: true,
        rail: true,
      }
    },
}
</script>
