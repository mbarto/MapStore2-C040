/*
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

const {connect} = require('react-redux');
const {createSelector} = require('reselect');
const pages = [{
    name: "embedviewer",
    path: "/:mapId",
    component: require('@js/pages/Embedded')
}, {
    name: "viewer",
    path: "/featureviewer/:mapType/:layer/:cql_filter",
    component: require('@js/pages/FeatureViewer')
}, {
    name: "mapviewer",
    path: "/viewer/:mapType/:mapId",
    component: require('@mapstore/framework/product/pages/MapViewer').default
}, {
    name: "wmsviewer",
    path: "/wmsfeatureviewer/:mapType/:layer/:cql_filter",
    component: require('@js/pages/FeatureViewer')
}];
const routerSelector = createSelector(state => state.locale, (locale) => ({
    locale: locale || {},
    version: "no-version",
    themeCfg: {
        theme: "comge",
        path:  __MAPSTORE_PROJECT_CONFIG__.themePath
    },
    pages
}));
const StandardRouter = connect(routerSelector)(require('@mapstore/framework/components/app/StandardRouter').default);

require('@mapstore/framework/product/main').default(
    require('@js/appConfigEmbedded'),
    require('@js/apiPlugins.js'),
    (cfg) => ({
        ...cfg,
        appComponent: StandardRouter
    })
);
