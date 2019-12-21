<template>
  <div>
    <template v-if="!edit">
      <v-skeleton-loader
        v-if="loading || !article"
        class="mx-auto"
        max-width="300"
        type="card"
      ></v-skeleton-loader>
      <template v-else>
        <v-card color="blue-gray" dark>
          <v-card-title class="headline" v-text="article.title"></v-card-title>
          <v-card-subtitle v-text="'by ' + article.author"></v-card-subtitle>
          <v-card-text>{{ article.content }} </v-card-text>
        </v-card>
        <div class="text-center mt-2">
          <v-btn @click="edit = true" color="indigo" dark>Update article</v-btn>
          <v-btn @click="deleteArticle" color="error">Delete article</v-btn>
        </div>
        <v-overlay absolute :opacity="0.75" :value="overlay" :z-index="5">
          <v-progress-circular v-if="deleteLoading" indeterminate size="64" />
          <template v-else>
            <div class="text-center">
              <div class="mb-3">
                This article has been deleted.
              </div>
              <v-btn to="/" color="indigo">
                Go home
              </v-btn>
            </div>
          </template>
        </v-overlay>
      </template>
      <div v-if="error" class="text-center">
        {{ error.response.data }}
      </div>
    </template>
    <edit-article
      :title="article.title"
      :author="article.author"
      :content="article.content"
      v-else
    />
  </div>
</template>

<script>
import BlogService from "@/services/api/blog.service";
import EditArticle from "@/components/Article/Edit";

export default {
  components: {
    EditArticle
  },
  data: () => ({
    article: null,
    loading: true,
    error: null,
    overlay: false,
    deleteLoading: false,
    edit: false
  }),
  methods: {
    async deleteArticle() {
      this.deleteLoading = true;
      this.overlay = true;
      const { error, data } = await BlogService.deleteByID(this.article._id);
      this.deleteLoading = false;

      if (error) {
        this.error = error;
      } else {
        data;
      }
    },
    async getArticle() {
      this.loading = true;
      const { data, error } = await BlogService.getByID(this.$route.params.id);
      this.loading = false;
      if (error) {
        this.error = error;
      } else {
        this.article = data.data;
      }
    }
  },
  created() {
    if (!this.$route.params.id) {
      this.$router.push("/");
    } else {
      this.getArticle();
    }
  }
};
</script>

<style></style>
