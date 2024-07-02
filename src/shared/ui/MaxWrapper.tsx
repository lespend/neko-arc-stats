import { FC } from "react";

interface MaxWrapperProps {
    children?: React.ReactNode;
}

const MaxWrapper: FC<MaxWrapperProps> = ({children}) => {
    return (
        <div className="max-w-[1180px] m-auto px-4">
            {children}
        </div>
    );
}
 
export default MaxWrapper;