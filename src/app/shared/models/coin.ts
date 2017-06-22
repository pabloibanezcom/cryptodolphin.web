interface IPrice {
    currency: string;
    value: number;
}

export class Coin {
    id: number;
    url: string;
    name: string;
    coinName: string;
    fullName: string;
    sortOrder: number;
    color: string;
    fontcolor: string;
    prices: IPrice[];

    get imgSrc(): string {
        return '/assets/images/coins/' + name;
    }
}
