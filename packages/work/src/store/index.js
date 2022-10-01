import layout from "./modules/layout";
import menu from "./modules/menu";

export default function initStore(store) {
    if (!store) {
        throw new Error("work插件需依赖store实例");
    }

    store.registerModule("menu", menu);
    store.registerModule("layoutConfig", layout);
}
