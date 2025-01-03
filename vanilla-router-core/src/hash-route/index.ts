const root = document.getElementById("root");

// 构造示例结构
function createLink(href: string) {
    const anchor = document.createElement("a");
    anchor.href = `#/${href}`;
    anchor.innerHTML = href + " ";
    return anchor;
}

const homeLink = createLink("home");
const aboutLink = createLink("about");

const routerView = document.createElement("div");
routerView.setAttribute("id", "router-view");

root?.appendChild(homeLink);
root?.appendChild(aboutLink);
root?.appendChild(routerView);

// 注册hashchange事件
window.addEventListener("hashchange", handleHashChange);
// 注册DOMContentLoaded事件，在页面第一次加载时渲染正确视图
window.addEventListener("DOMContentLoaded", handleHashChange);

function handleHashChange() {
    // 渲染对应视图
    switch (location.hash) {
        case "#/home":
            routerView.innerHTML = "HOME";
            break;
        case "#/about":
            routerView.innerHTML = "About";
            break;
        default:
            return;
    }
}

const btn = document.createElement("button");
btn.innerHTML = "跳转Home";
btn.addEventListener("click", () => {
    window.location.href = "#/home";
});
root?.appendChild(btn);
