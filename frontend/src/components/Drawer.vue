<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-list dense>
      <v-list-item
        link
        v-for="(link, index) in links"
        :key="index"
        :to="link.to"
      >
        <v-list-item-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ link.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { TOGGLE_DRAWER } from "@/store/mutations.type";

export default {
  data: () => ({
    links: [
      {
        icon: "mdi-home",
        name: "Home",
        to: "/"
      },
      {
        icon: "mdi-plus",
        name: "Create",
        to: "/new"
      }
    ]
  }),
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer.toggle;
      },
      set(v) {
        this.$store.commit(TOGGLE_DRAWER, v);
      }
    }
  }
};
</script>

<style></style>
