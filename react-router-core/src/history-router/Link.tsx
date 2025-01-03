import { useHistoryContext } from "./Router";

interface LinkProps {
    to: string;
    children: React.ReactNode;
}
const Link: React.FC<LinkProps> = ({ to, children }) => {
    const { syncView } = useHistoryContext();

    function handleLinkClick(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        window.history.pushState(null, "", to);
        syncView?.();
    }
    return (
        <a href={to} onClick={handleLinkClick}>
            {children}
        </a>
    );
};

export default Link;
