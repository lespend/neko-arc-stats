import { api } from "@/shared/api";
import { TopPlayersFilter } from "@/shared/types/stats";


export async function getTopPlayerByRef() {
    const {data} = await api.get<string[]>("/stats/top-players", { params: { filter: TopPlayersFilter.BY_REF } })
    return data
}