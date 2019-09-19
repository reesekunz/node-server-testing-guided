const request = require("supertest");

const server = require("./server");

// describe helps you organize how output is displayed on terminal
describe("server.js", () => {
  describe("GET /", () => {
      // method 1 - returning
    it("returns 200 as expected", () => {
      // make GET request to /endpoint on server
      // need to return so JEST knows its a promise (needs to wait for result) - otherwise test would return false positive
      return request(server)
        .get("/")
        .then(response => {
          // check (assert) that we get an http status code 200
          // expect(response.status).toBe(500); - first you want to test to see that it fails
          expect(response.status).toBe(200); // after testing to see that it fails, test what you actually expect to pass
        });
    });
// method 2 - async and await
    it("should return { api: 'up }", async () => {
      const response = await request(server).get("/");

      expect(response.body.api).toBe("up");
      // same as
      expect(response.body).toEqual({ api: "up" });
    });

    // method 3
    it("returns JSON", done => {
      request(server)
        .get("/")
        .then(response => {
          //   expect(response.type).toMatch(/xml/i); - make it fail first
          expect(response.type).toMatch(/json/i);

          done();
        });
    });
  });
});
