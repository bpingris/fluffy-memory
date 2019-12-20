<template>
  <v-card elevation="5" class="pa-6">
    <v-text-field v-model="mTitle" label="Title"></v-text-field>

    <v-textarea
      name="article content"
      label="Article's content"
      hint="Article's content"
      v-model="mContent"
    ></v-textarea>
    <v-text-field v-model="mAuthor" label="Author"></v-text-field>
    <div v-if="error">
      {{ error.response.data }}
    </div>
    <v-btn @click="updateArticle" color="indigo" dark>
      Update article
    </v-btn>
    <v-snackbar v-model="snackbar" :timeout="timeout">
      Article updated with success !
      <v-btn color="blue" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>
import BlogService from "@/services/api/blog.service";

export default {
  props: ["title", "author", "content"],
  data() {
    return {
      mTitle: this.title,
      mAuthor: this.author,
      mContent: this.content,
      snackbar: false,
      timeout: 2000,
      error: null
    };
  },
  methods: {
    async updateArticle() {
      this.loading = true;
      const { mTitle: title, mAuthor: author, mContent: content } = this;
      const { data, error } = await BlogService.updateByID(
        this.$route.params.id,
        {
          title,
          author,
          content
        }
      );
      this.loading = false;

      if (error) {
        this.error = error;
      } else {
        data;
        this.snackbar = true;
        this.mTitle = "";
        this.mAuthor = "";
        this.mContent = "";
      }
    }
  }
};
</script>

<style></style>
