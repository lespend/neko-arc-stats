import TopPlayerByBalance from "@/entities/TopPlayerByBalance/ui/TopPlayerByBalance";
import TopPlayerByRef from "@/entities/TopPlayerByRef/ui/TopPlayerByRef";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";

const TopPlayers = () => {
    return (
        <Tabs defaultValue="referals" className="space-y-2">
            <TabsList className="flex px-2 py-2 bg-secondary rounded-md">
                <TabsTrigger value="referals" className="px-6 py-2 w-1/2 data-[state=active]:bg-background rounded-md transition-all">По рефералам</TabsTrigger>
                <TabsTrigger value="balance" className="px-6 py-2 w-1/2 data-[state=active]:bg-background rounded-md transition-all">По балансу</TabsTrigger>
            </TabsList>
            <TabsContent value="referals">
                <TopPlayerByRef/>
            </TabsContent>
            <TabsContent value="balance">
                <TopPlayerByBalance/>
            </TabsContent>
        </Tabs>
    );
}

export default TopPlayers;