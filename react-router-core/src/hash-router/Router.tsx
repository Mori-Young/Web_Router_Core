/* eslint-disable react-refresh/only-export-components */
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

interface HashContext {
    hash: string;
}
const HashContext = createContext<HashContext | null>(null);

export const useHashContext = () => {
    const context = useContext(HashContext);
    return context?.hash;
};

const HashRouter: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [hash, setHash] = useState<string>(window.location.hash);

    useEffect(() => {
        // 注册hashchange
        function handleHashChange() {
            setHash(window.location.hash);
        }
        window.addEventListener("hashchange", handleHashChange);

        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);

    return (
        <HashContext.Provider value={{ hash }}>{children}</HashContext.Provider>
    );
};

export default HashRouter;
