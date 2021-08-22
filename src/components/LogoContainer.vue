<template>
  <div id="logo">
    <ion-img src="assets/shapes.svg"></ion-img>
    <div v-if="moto" class="moto">My Moto here</div>
  </div>
</template>

<script lang="ts">
import { IonImg } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LogoContainer',
  props: {
    moto: {
      type: Boolean,
      default: false
    },
  },
  components: {
    IonImg
  }
});
</script>

<style scoped>
.moto {
  background-color: #1976d2;
  text-align: center;
  color: #fff;
  width: 100%;
  padding: 10px 0;
  margin-left: -3px;
  font-size: 22px;
  margin-bottom: 10px;
}
</style>