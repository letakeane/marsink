<template>
  <v-footer 
    app 
    color="orange-lighten-2"
    mobile-breakpoint="sm"
  >
    <v-btn 
      prepend-icon="mdi-instagram" 
      href="https://instagram.com/claudia___mars" 
      target="_blank" 
      variant="plain"
      size="x-small"
      class="text-teal-darken-3"
    >
      instagram
    </v-btn>
    <v-btn 
      prepend-icon="mdi-clock" 
      href="https://www.tiktok.com/@claudia_mars_" 
      target="_blank" 
      variant="plain"
      size="x-small"
      class="text-teal-darken-3"
    >
      tiktok
    </v-btn>
    <v-spacer />
    <p class="text-right text-caption text-teal-darken-3">&copy; 2024</p>
  </v-footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
