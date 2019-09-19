const Hobbits = require("./hobbitsModel");
const db = require("../data/dbConfig");

describe("hobbits model", () => {
  // beforeEach cleans up the table, resets the database with truncate()
  beforeEach(async () => {
    await db("hobbits").truncate();
  });

  it("should set environment to testing", () => {
    // expect(process.env.NODE_ENV).toBe("production");
    // expect(process.env.DB_ENV).toBe("production");
    expect(process.env.DB_ENV).toBe("testing");
  });

  describe("insert()", () => {
    it("should insert hobbits into database", async () => {
      // insert a record (hobbit)
      await Hobbits.insert({ name: "Reese" });
      // act - brining in the hobbits db with dbConfig
      let hobbits = await db("hobbits");
      console.log("hobbits", hobbits);
      // check (assert) the record was inserted
      //   expect(hobbits).toHaveLength(0) -- make test fail first
      expect(hobbits).toHaveLength(1); // -- test passes
    });

    it("should find the hobbit using the inserted id", async () => {
      // insert a record (hobbit)
      const [id] = await Hobbits.insert({ name: "Reese" });
      console.log("hobbit id", id);
      // act - brining in the hobbits db with dbConfig
      let hobbit = await db("hobbits")
        .where({ id })
        .first();
      // check (assert) the record was inserted
      //   expect(hobbit.name).toBe("Sam"); -- make it fail
      expect(hobbit.name).toBe("Reese"); // -- test passes
    });
  });
});

// DB_ENV is from this script in package.json =>
// "test": "cross-env DB_ENV=testing jest --watch",
// and this in dbConfig =>
// const environment = process.env.DB_ENV || 'development'; in dbConfig
// using this to grab testing configuration from knexfile.js

// if deleting - insert, test that you have 1. then delete, test that you have 0
