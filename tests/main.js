import { userInfo } from "os";
import { Meteor } from "meteor/meteor";
import { EitCollection } from "../imports/api/eits";
import { Random } from "meteor/random";
import { assert } from "chai";

describe("eitmanagementapp", function() {
  const database = EitCollection;

  before(() => {
    Meteor.users.remove({});
    Accounts.createUser({ username: "testuser", password: "testuser" });
    loggedInUser = Meteor.users.findOne({ username: "testuser" });
    fakeUserId = Random.id();
  });

  beforeEach(() => {
    database.remove({});
    eitId = database.insert({
      firstname: "John",
      surname: "Doe",
      age: 19,
      country: "Canada",
      mentor: loggedInUser._id
    });
  });

  it("package.json has correct name", async function() {
    const { name } = await import("../package.json");
    assert.strictEqual(name, "eitmanagementapp");
  });

  it("can add eit", function() {
    const newEit = {
      firstname: "Jane",
      lastname: "Doe",
      email: "janedoe@gmail.com",
      bio: "Hi there, I am Jane Doe"
    };

    database.insert(newEit);

    assert.equal(database.find({}).count(), 2);
  });

  it("can view eit", function() {
    const id = database.find({}).fetch()[0]._id;
    assert.equal(database.findOne({_id:id})._id, id);
  });

  it("cannot add eit if not logged in", function() {
    if (!loggedIn) {
      return;
    }

    const newEit = {
      firstname: "John",
      lastname: "Doe",
      email: "johndoe@gmail.com",
      bio: "Hi there, I am John Doe"
    };

    assert(database.find({}.count(), 1));
  });

  it("can edit eit", function() {
    const eit = database.find({}).first();
    const id = eit.id;
    const updatedEit = {
      firstname: "Melina",
      lastname: "Johannsen",
      email: "melinajoha@gmail.com",
      bio: "I am Melina Joha"
    };

    if (eit.firstname === updatedEit.firstname) {
      throw new Error(
        "Existing firstname is thesame as new firstname. Change new firstname."
      );
    }

    database.update(id, updatedEit);

    const retrievedEit = database.findOne(id);

    assert(retrievedEit.firstname, updatedEit.firstname);
  });

  it("cannot edit eit if not logged in", function() {
    if (!user.loggedIn) {
      throw new Error("You must be logged in to edit eit");
    }

    const eit = database.find({}).first();
    const id = eit.id;
    const updatedEit = {
      firstname: "Melina",
      lastname: "Johannsen",
      email: "melinajoha@gmail.com",
      bio: "I am Melina Joha"
    };

    if (eit.firstname === updatedEit.firstname) {
      throw new Error(
        "Existing firstname is thesame as new firstname. Change new firstname."
      );
    }

    database.update(id, updatedEit);

    const retrievedEit = database.findOne(id);

    assert(retrievedEit.firstname, updatedEit.firstname);
  });

  it("can delete eit", function() {
    const eit = database.find({}).first();
    const id = eit.id;

    database.remove(id);

    assert(database.findOne(id), {});
  });

  it("cannot delete eit if not logged in", function() {
    if (!user.loggedIn) {
      throw new Error("You must be logged in to delete");
    }
    const eit = database.find({}).first();
    const id = eit.id;

    database.remove(id);

    assert(database.findOne(id), {});
  });

  it("cannot edit someone else's eit", function() {
    const randomUser = RandomUser();
    const currentUser = user;

    if (randomUser.id === currentUser.id) {
      throw new Error("Random user must be different from current user");
    }

    const eit = database.find({ user: randomUser });

    if (eit.count() === 1) {
      // user logs in
      login(user_id);

      // edit eit

      const eit = database.find({}).first();
      const id = eit.id;
      const updatedEit = {
        firstname: "Melina",
        lastname: "Johannsen",
        email: "melinajoha@gmail.com",
        bio: "I am Melina Joha"
      };

      if (eit.firstname === updatedEit.firstname) {
        throw new Error(
          "Existing firstname is thesame as new firstname. Change new firstname."
        );
      }

      database.update(id, updatedEit);

      const retrievedEit = database.findOne(id);

      assert(retrievedEit.firstname, updatedEit.firstname);
    }
  });

  it("cannot delete someone else's eit", function() {
    // get random user id
    const randomUserId = RandomUser();
    // use random user id to fetch eit that belongs to it
    const eit = database.find({ userId: randomUserId }).first();
    // ensure current user id is not thesame as random user id
    if (currentUserId === randomUserId) {
      throw new Error("Current user cannot be thesame as random user");
    }
    // current user logs in
    login(userId);
    // if fetched eit does not belong to current user, throw an error
    if (eit.user.id !== currentUserId) {
      throw new Error("You cannot delete someone else's eit");
    }
    // else delete fetched eit
    const id = eit.id;

    database.remove(id);

    assert(database.findOne(id), {});
  });

  if (Meteor.isClient) {
    it("client is not server", function() {
      assert.strictEqual(Meteor.isServer, false);
    });
  }

  if (Meteor.isServer) {
    it("server is not client", function() {
      assert.strictEqual(Meteor.isClient, false);
    });
  }
});
