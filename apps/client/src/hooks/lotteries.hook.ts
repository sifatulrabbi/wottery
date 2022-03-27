import {useRecoilState} from "recoil";
import axios from "axios";
import {lotteriesState} from "../atoms";

export function useLotteries() {
    const [lotteries, setLotteries] = useRecoilState(lotteriesState);

    async function getLotteries(
        type: "free" | "premium" | "" = "",
    ): Promise<void> {
        try {
            const res = await axios.get(
                "http://localhost:8080/api/lotteries/" + type,
            );
            if (res.status !== 200 || !res.data) {
                throw new Error("Data not found");
            }
            setLotteries(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    return {lotteries, getLotteries};
}
