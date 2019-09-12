import {Entity, ObjectID, ObjectIdColumn, Column} from "typeorm";

import { Profile } from "./Profile";

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column(_type => Profile)
  profile: Profile;
}
