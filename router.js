var routes = [
    {
        path: '/:keybladeID',
        component: window.viewDragonShowcase,
    },
    {
        path: '/:keybladeID/showcase',
        component: window.viewDragonShowcase,
    },
    {
        path: '/:keybladeID/bio',
        component: window.viewDragonBio,
    },
    {
        path: '/:keybladeID/visuals',
        component: window.viewDragonVisuals,
    },
    {
        path: '/:keybladeID/stats',
        component: window.viewDragonStats,
    },
];
var router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routes,
});
