/*
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/
const {startLoading, updateFeatureLoader} = require('@js/epics/featureloader');
const {addCustomEditors, addCustomViewer} = require('@js/epics/initCustomEditors');

module.exports = {
    printingEnabled: true,
    pages: [{
        name: "home",
        path: "/",
        component: require('@js/pages/Home')
    }, {
        name: "viewer",
        path: "/viewer",
        component: require('@mapstore/framework/product/pages/MapViewer').default
    }, {
        name: "featureviewer",
        path: "/featureviewer/:mapType/:layer/:cql_filter",
        component: require('@js/pages/FeatureViewer')
    }, {
        name: "wmsviewer",
        path: "/wmsfeatureviewer/:mapType/:layer/:cql_filter",
        component: require('@js/pages/FeatureViewer')
    }, {
        name: "mapviewer",
        path: "/viewer/:mapType/:mapId",
        component: require('@mapstore/framework/product/pages/MapViewer').default
    }, {
        name: "mapviewer",
        path: "/viewer/:mapId",
        component: require('@mapstore/framework/product/pages/MapViewer').default
    }, {
        name: "mapviewer",
        path: "/viewer/:mapType/:mapId/context/:contextId", // TODO CHECK
        component: require('@mapstore/framework/product/pages/MapViewer').default // IF IT IS NEEDED TO USE MAPSTORE PAGE
    }, {
        name: 'context',
        path: "/context/:contextName",
        component: require('@mapstore/framework/product/pages/Context').default
    }, {
        name: 'context',
        path: "/context/:contextName/:mapId",
        component: require('@mapstore/framework/product/pages/Context').default
    }, {
        name: 'context-creator',
        path: "/context-creator/:contextId",
        component: require('@mapstore/framework/product/pages/ContextCreator').default
    }, {
        name: "manager",
        path: "/manager",
        component: require('@js/pages/Manager')
    }, {
        name: "manager",
        path: "/manager/:tool",
        component: require('@js/pages/Manager')
    }, {
        name: "context-manager",
        path: "/context-manager",
        component: require('@mapstore/framework/product/pages/ContextManager').default
    }, {
        name: "dashboard",
        path: "/dashboard",
        component: require('@mapstore/framework/product/pages/Dashboard').default
    }, {
        name: "dashboard",
        path: "/dashboard/:did",
        component: require('@mapstore/framework/product/pages/Dashboard').default
    }, {
        name: "rulesmanager",
        path: "/rules-manager",
        component: require('@mapstore/framework/product/pages/RulesManager').default
    }, {
        name: "geostory",
        path: "/geostory/:gid",
        component: require('@mapstore/framework/product/pages/GeoStory').default
    }, {
        name: "geostory",
        path: "/geostory/shared/:gid",
        component: require('@mapstore/framework/product/pages/GeoStory').default
    }],
    // pluginsDef: require('@js/plugins.js'),
    initialState: {
        defaultState: {
            mapInfo: {enabled: true, infoFormat: 'text/html'},
            mousePosition: {enabled: false, "crs": "EPSG:4326"},
            controls: {
                styler: {
                    enabled: true
                },
                help: {
                    enabled: false
                },
                print: {
                    enabled: false
                },
                toolbar: {
                    active: null,
                    expanded: false
                },
                drawer: {
                    enabled: false,
                    menu: "1"
                },
                saveAs: {
                    allowedRoles: ["ADMIN"]
                },
                RefreshLayers: {
                    enabled: false,
                    options: {
                        bbox: true,
                        search: true,
                        title: false,
                        dimensions: false
                    }
                }
            },
            maps: {
                mapType: "openlayers"
            },
            maptype: {
                mapType: "openlayers"
            },
            catalog: {
                format: "wms",
                "supportedFormats": [{"name": "wms", "label": "WMS"}, {"name": "csw", "label": "CSW"}]
            }
        },
        mobile: {
            mapInfo: {enabled: true, infoFormat: 'text/html' },
            mousePosition: {enabled: false, crs: "EPSG:4326", showCenter: true},
            "maps": {
                "mapType": "openlayers"
            },
            "maptype": {
                "mapType": "openlayers"
            },
            catalog: {
                format: "wms",
                "supportedFormats": [{"name": "wms", "label": "WMS"}, {"name": "csw", "label": "CSW"}]
            }
        }
    },
    themeCfg: {
        theme: "comge"
    },
    appReducers: {
        security: require('@mapstore/framework/reducers/security').default
    },
    appEpics: {
        "FEATUREVIEWER:startLoading": startLoading,
        "FEATUREVIEWER:updateFeatureLoader": updateFeatureLoader,
        addCustomEditors,
        addCustomViewer
    },
    storeOpts: {
        persist: {
            whitelist: ['security']
        }
    }
};
