const app = require("../src/app");
const supertest = require("supertest");
const request = supertest(app);

describe("Basic tasks", () => {
  it("Responds to a /ping request", async done => {
    const res = await request.get("/ping");

    expect(res.text).toBe("pong");
    expect(res.status).toBe(200);
    done();
  });
});

describe("Blog routes", () => {
  it("Returns an empty array", async done => {
    const res = await request.get("/blog");
    expect(res.body).toStrictEqual([]);
    expect(res.status).toBe(200);
    done();
  });
});
