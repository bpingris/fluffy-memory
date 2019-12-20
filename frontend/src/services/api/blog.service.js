import client from "./http";

const request = async (verb, endpoint, ...rest) => {
  try {
    const data = await client[verb](endpoint, ...rest);
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};

export default {
  async get() {
    return await request("get", "/blog");
  },
  async getByID(id) {
    return await request("get", `/blog/${id}`);
  },
  async post(article) {
    return await request("post", "/blog", article);
  },
  async updateByID(id, article) {
    return await request("put", `/blog/${id}`, article);
  },
  async deleteByID(id) {
    return await request("delete", `/blog/${id}`, { data: {} });
  }
};
