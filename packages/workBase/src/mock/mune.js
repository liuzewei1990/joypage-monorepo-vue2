export default [
    // dashboard
    {
        name: "dashboard",
        parentId: 0,
        id: 1,
        meta: {
            title: "mnknm吃多少吃多少",
            icon: "dashboard",
            show: true
        },
        keyd: "RouteView",
        redirect: "/dashboard/workplace"
    },
    {
        name: "workplace",
        parentId: 1,
        id: 7,
        meta: {
            title: "menu.dashboard.monitor",
            show: true
        },
        keyd: "Workplace"
    },
    {
        name: "monitor",
        path: "https://www.baidu.com/",
        parentId: 1,
        id: 3,
        meta: {
            title: "menu.dashboard.workplace",
            target: "_blank",
            show: true
        }
    },
    {
        name: "Analysis",
        parentId: 1,
        id: 2,
        meta: {
            title: "menu.dashboard.analysis",
            show: true
        },
        keyd: "Analysis",
        path: "/dashboard/analysis"
    },

    // form
    {
        name: "form",
        parentId: 0,
        id: 10,
        meta: {
            icon: "form",
            title: "menu.form"
        },
        redirect: "/form/base-form",
        keyd: "RouteView"
    },
    {
        name: "basic-form",
        parentId: 10,
        id: 6,
        meta: {
            title: "menu.form.basic-form"
        },
        keyd: "BasicForm"
    },
    {
        name: "step-form",
        parentId: 10,
        id: 5,
        meta: {
            title: "menu.form.step-form"
        },
        keyd: "StepForm"
    },
    {
        name: "advanced-form",
        parentId: 10,
        id: 4,
        meta: {
            title: "menu.form.advanced-form"
        },
        keyd: "AdvanceForm"
    },

    // list
    {
        name: "list",
        parentId: 0,
        id: 10010,
        meta: {
            icon: "table",
            title: "menu.list",
            show: true
        },
        redirect: "/list/table-list",
        keyd: "RouteView"
    },
    {
        name: "table-list",
        parentId: 10010,
        id: 10011,
        path: "/list/table-list/:pageNo([1-9]\\d*)?",
        meta: {
            title: "menu.list.table-list",
            show: true
        },
        keyd: "TableList"
    },
    {
        name: "basic-list",
        parentId: 10010,
        id: 10012,
        meta: {
            title: "menu.list.basic-list",
            show: true
        },
        keyd: "StandardList"
    },
    {
        name: "card",
        parentId: 10010,
        id: 10013,
        meta: {
            title: "menu.list.card-list",
            show: true
        },
        keyd: "CardList"
    },
    {
        name: "search",
        parentId: 10010,
        id: 10014,
        meta: {
            title: "menu.list.search-list",
            show: true
        },
        redirect: "/list/search/article",
        keyd: "SearchLayout"
    },
    {
        name: "article",
        parentId: 10014,
        id: 10015,
        meta: {
            title: "menu.list.search-list.articles",
            show: true
        },
        keyd: "SearchArticles"
    },
    {
        name: "project",
        parentId: 10014,
        id: 10016,
        meta: {
            title: "menu.list.search-list.projects",
            show: true
        },
        keyd: "SearchProjects"
    },
    {
        name: "application",
        parentId: 10014,
        id: 10017,
        meta: {
            title: "menu.list.search-list.applications",
            show: true
        },
        keyd: "SearchApplications"
    },

    // profile
    {
        name: "profile",
        parentId: 0,
        id: 10018,
        meta: {
            title: "menu.profile",
            icon: "profile",
            show: true
        },
        redirect: "/profile/basic",
        keyd: "RouteView"
    },
    {
        name: "basic",
        parentId: 10018,
        id: 10019,
        meta: {
            title: "menu.profile.basic",
            show: true
        },
        keyd: "ProfileBasic"
    },
    {
        name: "advanced",
        parentId: 10018,
        id: 10020,
        meta: {
            title: "menu.profile.advanced",
            show: true
        },
        keyd: "ProfileAdvanced"
    },

    // result
    {
        name: "result",
        parentId: 0,
        id: 10021,
        meta: {
            title: "menu.result",
            icon: "check-circle-o",
            show: true
        },
        redirect: "/result/success",
        keyd: "PageView"
    },
    {
        name: "success",
        parentId: 10021,
        id: 10022,
        meta: {
            title: "menu.result.success",
            hiddenHeaderContent: true,
            show: true
        },
        keyd: "ResultSuccess"
    },
    {
        name: "fail",
        parentId: 10021,
        id: 10023,
        meta: {
            title: "menu.result.fail",
            hiddenHeaderContent: true,
            show: true
        },
        keyd: "ResultFail"
    },

    // Exception
    {
        name: "exception",
        parentId: 0,
        id: 10024,
        meta: {
            title: "menu.exception",
            icon: "warning",
            show: true
        },
        redirect: "/exception/403",
        keyd: "RouteView"
    },
    {
        name: "403",
        parentId: 10024,
        id: 10025,
        meta: {
            title: "menu.exception.not-permission",
            show: true
        },
        keyd: "Exception403"
    },
    {
        name: "404",
        parentId: 10024,
        id: 10026,
        meta: {
            title: "menu.exception.not-find",
            show: true
        },
        keyd: "Exception404"
    },
    {
        name: "500",
        parentId: 10024,
        id: 10027,
        meta: {
            title: "menu.exception.server-error",
            show: true
        },
        keyd: "Exception500"
    },

    // account
    {
        name: "account",
        parentId: 0,
        id: 10028,
        meta: {
            title: "menu.account",
            icon: "user",
            show: true
        },
        redirect: "/account/center",
        keyd: "RouteView"
    },
    {
        name: "center",
        parentId: 10028,
        id: 10029,
        meta: {
            title: "menu.account.center",
            show: true
        },
        keyd: "AccountCenter"
    },
    // 特殊三级菜单
    {
        name: "settings",
        parentId: 10028,
        id: 10030,
        meta: {
            title: "menu.account.settings",
            hideHeader: true,
            hideChildren: true,
            show: true
        },
        redirect: "/account/settings/basic",
        keyd: "AccountSettings"
    },
    {
        name: "BasicSettings",
        path: "/account/settings/basic",
        parentId: 10030,
        id: 10031,
        meta: {
            title: "account.settings.menuMap.basic",
            show: false
        },
        keyd: "BasicSetting"
    },
    {
        name: "SecuritySettings",
        path: "/account/settings/security",
        parentId: 10030,
        id: 10032,
        meta: {
            title: "account.settings.menuMap.security",
            show: false
        },
        keyd: "SecuritySettings"
    },
    {
        name: "CustomSettings",
        path: "/account/settings/custom",
        parentId: 10030,
        id: 10033,
        meta: {
            title: "account.settings.menuMap.custom",
            show: false
        },
        keyd: "CustomSettings"
    },
    {
        name: "BindingSettings",
        path: "/account/settings/binding",
        parentId: 10030,
        id: 10034,
        meta: {
            title: "account.settings.menuMap.binding",
            show: false
        },
        keyd: "BindingSettings"
    },
    {
        name: "NotificationSettings",
        path: "/account/settings/notification",
        parentId: 10030,
        id: 10034,
        meta: {
            title: "account.settings.menuMap.notification",
            show: false
        },
        keyd: "NotificationSettings"
    }
];
