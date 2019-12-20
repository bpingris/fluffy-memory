<template>
  <v-app-bar app color="indigo" dark>
    <v-app-bar-nav-icon @click.stop="toggleDrawer" />
    <v-toolbar-title>Application</v-toolbar-title>
  </v-app-bar>
</template>

<script>
import { TOGGLE_DRAWER } from "@/store/mutations.type";

export default {
  computed: {
    drawer() {
      return this.$store.state.drawer.toggle;
    }
  },
  methods: {
    toggleDrawer() {
      this.$store.commit(TOGGLE_DRAWER, !this.drawer);
    }
  }
};
</script>

<style></style>
