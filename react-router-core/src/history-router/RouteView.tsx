import { useHistoryContext } from "./Router";

interface RouteViewProps {
    path: string;
    render: () => React.ReactNode;
}
const RouteView: React.FC<RouteViewProps> = ({ path, render }) => {
    const { href } = useHistoryContext();
    const curHref = href?.slice(
        window.location.origin.length,
        window.location.origin.length + path.length
    );
    return curHref === path ? render() : null;
};

export default RouteView;
