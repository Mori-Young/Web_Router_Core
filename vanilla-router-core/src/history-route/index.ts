const root = document.getElementById("root");

// 构造示例结构
function createLink(href: string) {
    const anchor = document.createElement("a");
    anchor.href = `/${href}`;
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

window.addEventListener("DOMContentLoaded", handleContentLoaded);
window.addEventListener("popstate", syncView);
function handleContentLoaded() {
    // 重写a标签点击事件
    const linkList = document.querySelectorAll("a");
    function handleLinkClick(e: Event) {
        // 阻止默认行为
        e.preventDefault();
        // 修改url
        history.pushState(
            null,
            "",
            (e.target as Element)?.getAttribute("href")
        );
        // 触发视图同步
        syncView();
    }
    linkList.forEach((el) => {
        el.addEventListener("click", handleLinkClick);
    });

    // 首次加载同步视图
    syncView();
}

function syncView() {
    switch (location.pathname) {
        case "/home":
            routerView.innerHTML = "Home";
            return;
        case "/about":
            routerView.innerHTML = "About";
            return;
        default:
            return;
    }
}

const btn = document.createElement("button");
btn.innerHTML = "跳转Home";
btn.addEventListener("click", () => {
    window.location.href = "/home";
});
root?.appendChild(btn);
