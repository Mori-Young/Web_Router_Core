import { defineConfig } from "vite";
import path from "node:path";

export default ({ mode }) => {
    console.log(
        mode === "hash"
            ? path.resolve(__dirname, "./src/hash-route")
            : path.resolve(__dirname, "./src/history-route")
    );
    return defineConfig({
        root:
            mode === "hash"
                ? path.resolve(__dirname, "./src/hash-route")
                : path.resolve(__dirname, "./src/history-route"),
    });
};
