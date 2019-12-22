const app = require("../src/app");
const supertest = require("supertest");
const request = supertest(app);

const body = {
	title: "test",
	author: "testman",
	content: "this is a test"
}

describe("DELETE method", () => {
	it("DELETE with wrong id", async done => {
		const res = await request.delete("/blog/12");

		expect(res.text).toBe("This article does not exist");
		expect(res.status).toBe(404);
		done();
	});

	it("DELETE with existing article", async done => {
		const post = await request.post("/blog").send(body);
		const res = await request.delete("/blog/" + post.body._id);

		expect(res.text).toBe("ok");
		expect(res.status).toBe(200);

		const get = await request.get("/blog/" + post.body._id);
		expect(get.text).toBe("This article does not exist");
		expect(get.status).toBe(404);
		done();
	});
});