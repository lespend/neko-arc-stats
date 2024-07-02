import { useEffect, useState } from "react"

export const useMediaQuery = (mediaQuery: string) => {
    const [matches, setMatches] = useState<boolean>(false);
    useEffect(() => {
        const mediaQueryList = window.matchMedia(mediaQuery);
    
        const documentChangeHandler = () => setMatches(mediaQueryList.matches)
        documentChangeHandler()
        
        window.addEventListener("resize", documentChangeHandler);
    
        return () => {
            window.removeEventListener("resize", documentChangeHandler)
        }
    }, [mediaQuery])
    return matches
}