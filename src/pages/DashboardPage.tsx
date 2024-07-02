import Logo from "@/entities/Logo/ui/Logo";
import MaxWrapper from "@/shared/ui/MaxWrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import TopPlayers from "@/features/TopPlayers/ui/TopPlayers";
import OnlineChart from "@/entities/OnlineChart/ui/OnlineChart";
import AppInfo from "@/entities/AppInfo/ui/AppInfo";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

const DashboardPage = () => {
    const chartHeight = useMediaQuery("(max-width: 450px)") ? 300 : 500;

    return (
        <MaxWrapper>
            <Logo className="mt-10 ml-5" />
            <div className="grid grid-cols-12 gap-[20px] mt-5">
                <AppInfo/>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <TopPlayers/>
                </div>
                <div className="w-full col-span-12 md:col-span-6 lg:col-span-8">
                    <OnlineChart height={chartHeight}/>
                </div>
            </div>
        </MaxWrapper>
    );
}

export default DashboardPage;