<template>
  <v-card elevation="5" class="pa-6">
    <v-text-field v-model="title" label="Title"></v-text-field>

    <v-textarea
      name="article content"
      label="Article's content"
      hint="Article's content"
      v-model="content"
    ></v-textarea>
    <v-text-field v-model="author" label="Author"></v-text-field>
    <div v-if="error">
      {{ error.response.data }}
    </div>
    <v-btn @click="addArticle" color="indigo" dark>
      Add new article
    </v-btn>
    <v-snackbar v-model="snackbar" :timeout="timeout">
      New article uploaded with success !
      <v-btn color="blue" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>
import BlogService from "@/services/api/blog.service";

export default {
  data: () => ({
    title: "",
    author: "",
    content: "",
    loading: true,
    snackbar: false,
    timeout: 2000,
    error: null
  }),
  methods: {
    async addArticle() {
      this.loading = true;
      const { title, author, content } = this;
      const { data, error } = await BlogService.post({
        title,
        author,
        content
      });
      this.loading = false;

      if (error) {
        this.error = error;
      } else {
        data;
        this.snackbar = true;
        this.title = "";
        this.author = "";
        this.content = "";
      }
    }
  }
};
</script>

<style></style>
