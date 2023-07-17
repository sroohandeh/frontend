export class Food{
    id!: string;
    name!: string;
    price!: number;
    tags?: Array<string>;
    cookTime !: string;
    favorite !: boolean;
    origins !: Array<string>;
    stars !: number;
    imageUrl !: string;    
}