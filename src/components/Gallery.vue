<template>
  <v-container
    class="d-flex flex-column justify-center align-center py-8 pl-16"
  >
    <h1 class="text-h1 font-weight-black text-teal-lighten-1 mb-8">Gallery</h1>
    <v-row> 
      <v-col
        v-for="n in 25"
        :key="n"
        class="d-flex child-flex"
        cols="12"
        md="6"
        lg="4"
      >
        <v-img
          :src="`https://picsum.photos/1000/600?image=${n * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
          aspect-ratio="1"
          cover
          class="bg-pink-lighten-4"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="pink-lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Gallery'
}
</script>
