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
        path: '/:keybladeID/visuals',
        component: window.viewDragonVisuals,
    },
    {
        path: '/:keybladeID/details',
        component: window.viewSpeciesDetails,
    },
];
var router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routes,
});
