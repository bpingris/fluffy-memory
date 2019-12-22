const app = require("../src/app");
const supertest = require("supertest");
const request = supertest(app);

const body = {
	title: "test",
	author: "testman",
	content: "this is a test"
}

describe("Get method", () => {
  it("Responds to a get with wrong id", async done => {
    const res = await request.get("/blog/12");

    expect(res.text).toBe("This article does not exist");
    expect(res.status).toBe(404);
    done();
  });

  it("Responds to a get with good id", async done => {
  	const post = await request.post("/blog").send(body);

  	const res = await request.get("/blog/" + post.body._id);

  	expect(res.body).toStrictEqual(post.body);
  	expect(res.status).toBe(200);
  	done();
  });
});