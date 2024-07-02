import NumberCard from "@/shared/ui/NumberCard";
import { useQuery } from "@tanstack/react-query";
import { CalendarCheck, HandCoins, UserCircle } from "lucide-react";
import { getBalance, getDayOfCreated, getUsers } from "../api";

const AppInfo = () => {
    const formatter = new Intl.NumberFormat("en");
    let {data: balance, isLoading: isBalanceLoading} = useQuery({queryKey: ["balance"], queryFn: getBalance})
    let {data: users, isLoading: isUsersLoading} = useQuery({queryKey: ["users"], queryFn: getUsers})
    let {data: day, isLoading: isDayLoading} = useQuery({queryKey: ["dayOfCreated"], queryFn: getDayOfCreated})

    balance = Number(balance)
    users = Number(users)
    day = Number(day)

    return (
        <>
            <NumberCard className="col-span-12 lg:col-span-4" isLoading={isBalanceLoading} title="Суммарный баланс пользователей" icon={<HandCoins className="w-14 h-14" />} number={formatter.format(balance)} />
            <NumberCard className="col-span-12 lg:col-span-4" isLoading={isUsersLoading} title="Общее количество пользователей" icon={<UserCircle className="w-14 h-14" />} number={formatter.format(users)} />
            <NumberCard className="col-span-12 lg:col-span-4" isLoading={isDayLoading} title="Прошло дней со старта проекта" icon={<CalendarCheck className="w-14 h-14" />} number={formatter.format(day)} />
        </>
    );
}

export default AppInfo;