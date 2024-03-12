import { Album } from "./models";

export const ALBUMS: Album[] = [];

for(let i = 0; i < 5; i++){
    ALBUMS.push(
        {
            id: i + 1,
            title: `title ${i+1}`,
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum blanditiis fugit error laudantium dicta quia quaerat nisi, accusantium aliquam odio eius incidunt deleniti, fuga quo veniam alias animi iure. Possimus!'
        }
    )
}