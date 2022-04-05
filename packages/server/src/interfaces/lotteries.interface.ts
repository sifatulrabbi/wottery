export interface ILottery {
    id: string;
    name: string;
    price: number;
    description: string;
    start_date: Date;
    end_date: Date;
    prizes: {
        first: string;
        second: string;
        third: string;
    };
}
