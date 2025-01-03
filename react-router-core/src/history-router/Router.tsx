/* eslint-disable react-refresh/only-export-components */
import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from "react";

interface HistoryContext {
    href: string;
    syncView: () => void;
}
const HistoryContext = createContext<HistoryContext | null>(null);

export const useHistoryContext = () => {
    const context = useContext(HistoryContext);
    return { href: context?.href, syncView: context?.syncView };
};

const HistoryRouter: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [href, setHash] = useState<string>(window.location.href);

    function handlePopState() {
        setHash(window.location.href);
    }
    useEffect(() => {
        // 注册popstate
        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, []);

    return (
        <HistoryContext.Provider value={{ href, syncView: handlePopState }}>
            {children}
        </HistoryContext.Provider>
    );
};

export default HistoryRouter;
