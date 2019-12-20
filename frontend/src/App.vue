<template>
  <v-app>
    <Drawer />
    <Appbar />
    <v-content>
      <v-container>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Drawer from "./components/Drawer";
import Appbar from "./components/Appbar";

export default {
  components: {
    Drawer,
    Appbar
  }
};
</script>
