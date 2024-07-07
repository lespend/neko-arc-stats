import { api } from "@/shared/api";
import { OnlineChartData } from "@/shared/types/chart";

function getWeekDay(date: Date) {
    let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"]
    return days[date.getDay()];
}

export async function getOnlineChart() {
    const { data: res } = await api.get<OnlineChartData[]>("/stats/online-chart")
    if (res) {
        for (let i = 0; i < res.length; i++) {
            let date = new Date(res[i].date)
            res[i].name = getWeekDay(date)
        }
    }
    return res
}