import { Card, CardHeader, CardTitle, CardContent } from "./card";
import { cn } from "../lib/utils";

interface NumberCardProps {
    title: string;
    icon: React.ReactElement;
    number: string;
    isLoading?: boolean;
    className?: string;
}

const NumberCard = ({ title, icon, number, isLoading, className }: NumberCardProps) => {
    if (isLoading) {
        return (
            <Card className={cn("bg-secondary-foreground col-span-4 border-none", className)}>
                <div className="animate-pulse">
                    <CardHeader className="space-y-4">
                        <div className="w-full h-3 bg-muted-foreground rounded-lg"></div>
                        <div className="w-1/2 h-3 bg-muted-foreground rounded-lg"></div>
                    </CardHeader>
                    <CardContent className="flex gap-4 items-center text-primary mt-4">
                        <div className="w-12 h-12 bg-muted-foreground rounded-full shrink-0"></div>
                        <div className="w-full h-3 bg-muted-foreground rounded-lg"></div>
                    </CardContent>
                </div>
            </Card>
        )
    }

    return (
        <>
            <Card className={cn("bg-secondary-foreground col-span-4 border-none", className)}>
                <CardHeader>
                    <CardTitle className="text-muted font-semibold">{title}</CardTitle>
                </CardHeader>
                <CardContent className="flex gap-2 items-center text-primary">
                    {/* <HandCoins className="w-16 h-16" /> */}
                    {icon}
                    <p className="font-bold text-4xl">{number}</p>
                </CardContent>
            </Card>
            {/* <Card className="bg-secondary col-span-4 border-none">
                <CardHeader>
                    <CardTitle className="text-secondary-foreground font-semibold">Количество пользователей</CardTitle>
                </CardHeader>
                <CardContent className="flex gap-2 items-center">
                    <UserCircle className="w-16 h-16 text-primary" />
                    <p className="text-primary font-bold text-4xl">59.000</p>
                </CardContent>
            </Card> */}
        </>
    );
}

export default NumberCard;