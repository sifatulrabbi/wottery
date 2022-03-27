export interface ILottery {
    id: string;
    title: string;
    summary: string;
    price: number;
    type: "free" | "premium";
    in_at: string;
    exp_at: string;
}
