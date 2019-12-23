const app = require("../src/app");
const supertest = require("supertest");
const request = supertest(app);

describe("Put command", () => {
  it("Responds to a put without title", async done => {
    const body = {
      title: "",
      author: "Un author",
      content: "Un content"
    };
    const res = await request.put("/blog/1").send(body);

    expect(res.text).toBe("Body not correct.");
    expect(res.status).toBe(401);
    done();
  });
  it("Responds to a put without author", async done => {
    const body = {
      title: "Un title",
      author: "",
      content: "Un content"
    };
    const res = await request.put("/blog/1").send(body);

    expect(res.text).toBe("Body not correct.");
    expect(res.status).toBe(401);
    done();
  });
  it("Responds to a put without content", async done => {
    const body = {
      title: "Un title",
      author: "Un author",
      content: ""
    };
    const res = await request.put("/blog/1").send(body);

    expect(res.text).toBe("Body not correct.");
    expect(res.status).toBe(401);
    done();
  });
  it("Responds to a put without id", async done => {
    const body = {
      title: "Un title",
      author: "Un author",
      content: "Un content"
    };
    const res = await request.put("/blog/1").send(body);

    expect(res.text).toBe("This article does not exist");
    expect(res.status).toBe(404);
    done();
  });
  it("Responds to a put with all good", async done => {
    const body = {
      title: "Un title",
      author: "Un author",
      content: "Un content"
    };
    const post = await request.post("/blog").send(body);
    const res = await request.put("/blog/" + post.body._id).send(body);

    expect(res.body).toStrictEqual(post.body);
    expect(res.status).toBe(200);
    done();
  });
});
