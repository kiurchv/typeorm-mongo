import "reflect-metadata";
import { createConnection, getMongoManager } from "typeorm";

import { User } from "./entity/User";
import { Profile } from "./entity/Profile";
import { Photo } from "./entity/Photo";


const main = async () => {
  await createConnection();

  const manager = getMongoManager();

  console.log("Inserting a new user into the database...");

  const user = new User();
  user.firstName = "Timber";
  user.lastName = "Saw";
  user.profile = new Profile();
  user.profile.about = "About Trees and Me";
  user.profile.education = "Tree School";
  user.profile.career = "Lumberjack";
  user.profile.photos = [
      new Photo("me-and-trees.jpg", "Me and Trees", 100),
      new Photo("me-and-chakram.jpg", "Me and Chakram", 200),
  ];

  await manager.save(user);
  console.log("Saved a new user with id: " + user.id);



  const photo = new Photo("unknown.jpg", "Upserted photo", 300);
  manager.findOneAndUpdate(User, { firstName: "Timber" }, { $addToSet:  { "profile.photos": photo } });


  console.log("Loading users from the database...");
  const users = await manager.find(User);
  console.log("Loaded users:");
  console.dir(users, { depth: 10 });
}

main();
