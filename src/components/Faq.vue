<template>
  <v-container
    class="d-flex flex-column justify-center align-center pl-16"
    height="100%"
  >
    <h1 class="text-h1 font-weight-black text-teal-lighten-1 my-8">FAQs</h1>
    <v-expansion-panels 
      variant="accordion"
    >
      <v-expansion-panel
        title="Q: How much will my tattoo cost?"
        text="A: It depends on how big the tattoo is. My hourly rate is $175."
      ></v-expansion-panel>
      <v-expansion-panel
        title="Q: What should I do before my appointment?"
        text="A: I understand you could be nervous, and you might not want to eat, but it's important to eat and drink plenty of water. Try to avoid overexposure to the sun. Unfortunately, if you get sunburned on the area that I'm supposed to tattoo we cannot continue with the appointment. Getting a tattoo is a fun experience on its own, it does not need to be enhanced so please reframe from drinking alcohol or consuming any drugs of the day of the appointment."
      ></v-expansion-panel>
      <v-expansion-panel
        title="Q: Can I use numbing cream before my appointment?"
        text="A: I don't normally recommend it, but if you would like to use it, please inform me prior to the appointment so we can discuss it."
      ></v-expansion-panel>
      <v-expansion-panel
        title="Q: Can I get a tattoo if I'm pregnant or when I am breastfeeding?"
        text="A: According to the American Pregnancy Association it is not recommended to get a tattoo while pregnant or breastfeeding. "
      ></v-expansion-panel>
      <v-expansion-panel
        title="Q: Can I be on medications and still get a tattoo?"
        text="A: Yes and no. I recommend asking your doctor."
      ></v-expansion-panel>
      <v-expansion-panel
        title="Q: Can I bring a guest?"
        text="A: Love You Tattoo is warm, welcoming, and small tattoo studio. Due to the size of the studio, guests are generally not allowed; but if you feel like having a guest is needed, please inform me before the appointment, and I will try to accommodate you."
      ></v-expansion-panel>
      <v-expansion-panel
        title="Q: When will I see the design of my tattoo?"
        text="A: Due to my work schedule, you will see your tattoo design when you arrive for your appointment. Don't worry though if you want something changed we will work on it together in the studio until you are satisfied."
      ></v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
export default {
  name: 'Faq'
}
</script>

<style>
  .v-expansion-panel-title__overlay {
    background-color: #880E4F!important;
  }
</style>