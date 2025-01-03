/* eslint-disable react-refresh/only-export-components */
import { createRoot } from "react-dom/client";
const routerPrefix = import.meta.env.VITE_HASH ? "hash" : "history";
const Router = await import(`./${routerPrefix}-router/Router.tsx`).then(
    (m) => m.default
);
const RouteView = await import(`./${routerPrefix}-router/RouteView.tsx`).then(
    (m) => m.default
);
const Link = await import(`./${routerPrefix}-router/Link.tsx`).then(
    (m) => m.default
);

const App = () => {
    return (
        <>
            <h1>{import.meta.env.VITE_HASH ? "Hash" : "History"}</h1>
            <Link to="/home">Home</Link>
            <br />
            <Link to="/about">About</Link>
            <br />
            <RouteView path="/home" render={() => <div>Home</div>} />
            <RouteView path="/about" render={() => <div>About</div>} />
        </>
    );
};

const root = createRoot(document.getElementById("root")!);

root.render(
    <Router>
        <App />
    </Router>
);
