const app = require("../src/app");
const supertest = require("supertest");
const request = supertest(app);

const body = {
	title: "test",
	author: "testman",
	content: "this is a test"
}

describe("POST method", () => {
	it("Response to POST without title", async done => {
		const body = {
			author: "testman",
			content: "this is a test"
		};

		const res = await request.post("/blog").send(body);
		expect(res.text).toBe("Body not correct.");
		expect(res.status).toBe(401);
		done();
	});

	it("Response to POST without author", async done => {
		const body = {
			title: "test",
			content: "this is a test"
		};

		const res = await request.post("/blog").send(body);
		expect(res.text).toBe("Body not correct.");
		expect(res.status).toBe(401);
		done();
	});

	it("Response to POST without content", async done => {
		const body = {
			title: "test",
			author: "testman"
		};

		const res = await request.post("/blog").send(body);
		expect(res.text).toBe("Body not correct.");
		expect(res.status).toBe(401);
		done();
	});

	it("Response to correct POST", async done => {
		const body = {
			title: "test",
			author: "testman",
			content: "this is a test"
		};

		const res = await request.post("/blog").send(body);

		expect(res.text).toBe("{\"title\":\"test\",\"author\":\"testman\",\"content\":\"this is a test\",\"_id\":\"" + res.body._id + "\"}");
		expect(res.status).toBe(200);
		done();
	});
});