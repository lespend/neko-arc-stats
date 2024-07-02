import { api } from "@/shared/api";

export async function getBalance() {
    const {data} = await api.get<number>("/stats/balance")
    return data
}

export async function getUsers() {
    const {data} = await api.get<number>("/stats/users")
    return data
}

export async function getDayOfCreated() {
    const {data} = await api.get<string>("/stats/created-date")
    const createdDate = new Date(data);
    const nowDate = new Date()
    console.log(createdDate, nowDate)
    const timeDiff = Number(nowDate) - Number(createdDate)
    console.log(timeDiff, timeDiff / (1000 * 3600 * 24))
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24))
    return diffDays
}