<template>
  <div>
    <v-row>
      <v-col
        xs="12"
        sm="6"
        md="4"
        v-for="article in articles"
        :key="article._id"
      >
        <v-card color="blue-gray" dark :to="`/${article._id}`">
          <v-card-title class="headline" v-text="article.title"></v-card-title>
          <v-card-subtitle v-text="article.author"></v-card-subtitle>
          <v-card-text v-text="trimCharacters(article.content)"> </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import BlogService from "@/services/api/blog.service";

export default {
  data: () => ({
    articles: [],
    loading: true,
    error: null
  }),
  methods: {
    trimCharacters(o) {
      return o.substring(0, 150) + (o.length > 150 ? "..." : "");
    },
    async fetchArticles() {
      this.loading = true;
      const { data, error } = await BlogService.get();
      this.loading = true;

      if (error) {
        this.error = error;
      } else {
        this.articles = data.data;
      }
    }
  },
  created() {
    this.fetchArticles();
  }
};
</script>

<style></style>
