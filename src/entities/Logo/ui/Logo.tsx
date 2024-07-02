import { cn } from "@/shared/lib/utils";
import { FC } from "react";
import logo from "../assets/neko-logo.gif"

interface LogoProps {
    className: string;
}

const Logo: FC<LogoProps> = ({className}) => {
    return (
        <div className={cn(className, "flex items-center gap-2")}>
            <img src={logo} alt="Логотип" className="w-16 h-16 md:w-24 md:h-24"/>
            <h1 className="text-2xl md:text-4xl font-bold text-secondary-foreground mt-3">Neko Ton Stats</h1>
        </div>
    );
}
 
export default Logo;