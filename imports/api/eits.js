import { Mongo } from "meteor/mongo";

export const EitCollection = new Mongo.Collection("eits");

Meteor.methods({
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
  }
});
