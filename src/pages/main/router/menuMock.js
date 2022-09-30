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
        key: "RouteView",
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
        key: "Workplace"
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
        key: "Analysis",
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
        key: "RouteView"
    },
    {
        name: "basic-form",
        parentId: 10,
        id: 6,
        meta: {
            title: "menu.form.basic-form"
        },
        key: "BasicForm"
    },
    {
        name: "step-form",
        parentId: 10,
        id: 5,
        meta: {
            title: "menu.form.step-form"
        },
        key: "StepForm"
    },
    {
        name: "advanced-form",
        parentId: 10,
        id: 4,
        meta: {
            title: "menu.form.advanced-form"
        },
        key: "AdvanceForm"
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
        key: "RouteView"
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
        key: "TableList"
    },
    {
        name: "basic-list",
        parentId: 10010,
        id: 10012,
        meta: {
            title: "menu.list.basic-list",
            show: true
        },
        key: "StandardList"
    },
    {
        name: "card",
        parentId: 10010,
        id: 10013,
        meta: {
            title: "menu.list.card-list",
            show: true
        },
        key: "CardList"
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
        key: "SearchLayout"
    },
    {
        name: "article",
        parentId: 10014,
        id: 10015,
        meta: {
            title: "menu.list.search-list.articles",
            show: true
        },
        key: "SearchArticles"
    },
    {
        name: "project",
        parentId: 10014,
        id: 10016,
        meta: {
            title: "menu.list.search-list.projects",
            show: true
        },
        key: "SearchProjects"
    },
    {
        name: "application",
        parentId: 10014,
        id: 10017,
        meta: {
            title: "menu.list.search-list.applications",
            show: true
        },
        key: "SearchApplications"
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
        key: "RouteView"
    },
    {
        name: "basic",
        parentId: 10018,
        id: 10019,
        meta: {
            title: "menu.profile.basic",
            show: true
        },
        key: "ProfileBasic"
    },
    {
        name: "advanced",
        parentId: 10018,
        id: 10020,
        meta: {
            title: "menu.profile.advanced",
            show: true
        },
        key: "ProfileAdvanced"
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
        key: "PageView"
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
        key: "ResultSuccess"
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
        key: "ResultFail"
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
        key: "RouteView"
    },
    {
        name: "403",
        parentId: 10024,
        id: 10025,
        meta: {
            title: "menu.exception.not-permission",
            show: true
        },
        key: "Exception403"
    },
    {
        name: "404",
        parentId: 10024,
        id: 10026,
        meta: {
            title: "menu.exception.not-find",
            show: true
        },
        key: "Exception404"
    },
    {
        name: "500",
        parentId: 10024,
        id: 10027,
        meta: {
            title: "menu.exception.server-error",
            show: true
        },
        key: "Exception500"
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
        key: "RouteView"
    },
    {
        name: "center",
        parentId: 10028,
        id: 10029,
        meta: {
            title: "menu.account.center",
            show: true
        },
        key: "AccountCenter"
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
        key: "AccountSettings"
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
        key: "BasicSetting"
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
        key: "SecuritySettings"
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
        key: "CustomSettings"
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
        key: "BindingSettings"
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
        key: "NotificationSettings"
    }
];
