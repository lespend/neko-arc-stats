import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { useQuery } from "@tanstack/react-query";
import { getTopPlayerByBalance } from "../api";
import { getTopPlayerPostfix } from "@/shared/lib/utils";

const TopPlayerByBalance = () => {
    const { data, isLoading } = useQuery({ queryKey: ["top-by-balance"], queryFn: getTopPlayerByBalance })

    return (
        <Card>
            <CardHeader>
                <CardTitle>Топ игроков по балансу</CardTitle>
            </CardHeader>
            <CardContent className="text-xl">
                <div className="animate-pulse space-y-4">
                    {isLoading &&
                        Array(10).fill(0).map((_, index) => (
                            <div key={index} className="h-3 w-1/2 bg-muted rounded-md"></div>
                        ))
                    }
                </div>
                <ol className="list-decimal pl-6">
                    {data?.map((id, index) => {
                        if (index == 0) {
                            return <li className="text-xl font-bold text-primary">{id} {getTopPlayerPostfix(index)}</li>
                        }
                        return <li>{id} {getTopPlayerPostfix(index)}</li>
                    })}
                </ol>
            </CardContent>
        </Card >
    );
}

export default TopPlayerByBalance;