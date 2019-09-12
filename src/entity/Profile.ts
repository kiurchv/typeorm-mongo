import { Column } from "typeorm";

import { Photo } from "./Photo";

export class Profile {
    @Column()
    about: string;

    @Column()
    education: string;

    @Column()
    career: string;

    @Column(_type => Photo)
    photos: Photo[];
}
