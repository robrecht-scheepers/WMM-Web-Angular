export interface Transaction {
    id?: string;
    date: any;
    amount: number;
    category: {
        id: string
        name: string
    }
}