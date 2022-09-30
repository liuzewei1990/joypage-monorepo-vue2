import work from "./json2";
export default {
    workId: "10001",
    workMode: "",
    title: "",
    width: "100%",
    height: "100%",
    coverImg: "",
    viewIndex: 0,
    views: [
        {
            viewId: "20001",
            title: "",
            elements: [
                { elId: "30001", x: 0, y: 47, w: 8, h: 51, i: "30001", elStyle: {}, coType: "vue", coName: "Table", coProps: {}, coEvent: [], coMethods: [], moved: false },
                {
                    elId: "30002",
                    x: 13,
                    y: 80,
                    w: 17,
                    h: 69,
                    i: "30002",
                    elStyle: {},
                    coType: "vue",
                    coName: "WebComponent",
                    coProps: { name: "purehtml", url: "http://127.0.0.1:5500/productionTest/minapp1/index.html" },
                    coEvent: [],
                    coMethods: [],
                    moved: false
                },
                { elId: "30003", x: 0, y: 98, w: 8, h: 51, i: "30003", elStyle: {}, coType: "vue", coName: "Table", coProps: {}, coEvent: [], coMethods: [], moved: false },
                {
                    elId: "30004",
                    x: 8,
                    y: 0,
                    w: 22,
                    h: 80,
                    i: "30005",
                    elStyle: {},
                    coType: "vue",
                    coName: "WebIframe",
                    coProps: { name: "app2", url: "http://127.0.0.1:5500/productionTest/minapp2/index.html" },
                    coEvent: [],
                    coMethods: [],
                    moved: false
                },
                { elId: "30006", x: 0, y: 0, w: 8, h: 47, i: "30006", elStyle: {}, coType: "vue", coName: "Calendar", coProps: { fullscreen: false }, coEvent: [], coMethods: [], moved: false },
                { elId: "30007", x: 8, y: 80, w: 5, h: 69, i: "30007", elStyle: {}, coType: "vue", coName: "Card", coProps: { fullscreen: false }, coEvent: [], coMethods: [], moved: false },
                {
                    elId: "30008",
                    x: 0,
                    y: 160,
                    w: 30,
                    h: 166,
                    i: "30008",
                    elStyle: {},
                    coType: "vue",
                    coName: "Work",
                    coProps: {
                        work: work
                    },
                    coEvent: [],
                    coMethods: [],
                    moved: false
                }
            ]
        }
    ]
};
