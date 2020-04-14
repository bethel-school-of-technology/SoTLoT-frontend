export class User {
    id: number;
    username: string;
    recipes: [{
        id: number;
        name: string;
        ingredients: string[];
        instructions: string[];
        desc: string;
        cookTime: string;
        difficulty: string;
        servingSize: number;
        imageLink: string;
    }]
}

