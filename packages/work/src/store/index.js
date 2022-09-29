export default function initStore(store) {
    if (!store) return;

    store.registerModule("work", {
        state: {}
    });
}
