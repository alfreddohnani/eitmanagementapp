import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

export const EitCollection = new Mongo.Collection("eits");

if (Meteor.isServer) {
  Meteor.publish('eits', function eitPublication(){
    return EitCollection.find();
  })
}

Meteor.methods({
  "eits.insert"(data) {
    check(data.firstname, String);
    check(data.lastname, String);
    check(data.email, String);
    check(data.bio, String);

    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

    EitCollection.insert({
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      bio: data.bio,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username
    });
  },
  "eits.update"(id, neweit) {
    
    EitCollection.update(id, {
      $set: {
        firstname: neweit.firstname,
        lastname: neweit.lastname,
        email: neweit.email,
        bio: neweit.bio
      }
    });
  },
  "eits.delete"(id) {
    EitCollection.remove(id);
  },
  "eits.setChecked"(id, setChecked) {
    check(id, String);
    check(setChecked, Boolean);

    EitCollection.update(id, { $set: { checked: setChecked } });
  }
});
