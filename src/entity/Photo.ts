import { Column } from "typeorm";

export class Photo {

    @Column()
    url: string;

    @Column()
    description: string;

    @Column()
    size: number;

    constructor(url: string, description: string, size: number) {
        this.url = url;
        this.description = description;
        this.size = size;
    }
}
