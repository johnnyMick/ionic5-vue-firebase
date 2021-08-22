<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title class="ion-text-center">Page Not Found !</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
      <LogoContainer />
      <ion-grid :fixed="true" class="flex">
        <ion-row class="ion-align-items-center w-full">
          <ion-col size="12" class="ion-text-center">
            <ion-button @click="goToMainPage" color="primary" expand="block" fill="outline">
              <ion-icon slot="start" :icon="chevronBackOutline"></ion-icon>
              Go Back to Home
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import { IonPage, IonIcon, IonButton, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
  import { IonGrid, IonRow, IonCol } from '@ionic/vue';
  import libStore from "@/lib/libStore";
  import {defineComponent} from "vue";
  import {chevronBackOutline} from "ionicons/icons";
  import LogoContainer from '@/components/LogoContainer.vue';

  export default defineComponent({
    name: "NotFound",
    components: {
      IonButton,
      IonHeader,
      IonToolbar,
      IonTitle,
      IonGrid,
      IonRow,
      IonCol,
      IonContent,
      IonIcon,
      IonPage,
      LogoContainer
    },
    setup () {
      const { goToMainPage } = libStore();
      return {
        chevronBackOutline,
        goToMainPage
      }
    },
  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex {
  display: flex;
}
.w-full {
  width: 100%;
}
</style>
