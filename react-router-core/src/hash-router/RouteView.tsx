import { useHashContext } from "./Router";

interface RouteViewProps {
    path: string;
    render: () => React.ReactNode;
}
const RouteView: React.FC<RouteViewProps> = ({ path, render }) => {
    const hash = useHashContext();
    return hash === "#" + path ? render() : null;
};

export default RouteView;
