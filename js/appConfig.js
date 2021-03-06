/*
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/
const {startLoading, updateFeatureLoader} = require('./epics/featureloader');
const {addCustomEditors, addCustomViewer} = require('./epics/initCustomEditors');

module.exports = {
    printingEnabled: true,
    pages: [{
        name: "home",
        path: "/",
        component: require('./pages/Home')
    }, {
        name: "viewer",
        path: "/viewer",
        component: require('../MapStore2/web/client/product/pages/MapViewer')
    }, {
        name: "featureviewer",
        path: "/featureviewer/:mapType/:layer/:cql_filter",
        component: require('./pages/FeatureViewer')
    }, {
        name: "wmsviewer",
        path: "/wmsfeatureviewer/:mapType/:layer/:cql_filter",
        component: require('./pages/FeatureViewer')
    }, {
        name: "mapviewer",
        path: "/viewer/:mapType/:mapId",
        component: require('../MapStore2/web/client/product/pages/MapViewer')
    }, {
        name: "mapviewer",
        path: "/viewer/:mapId",
        component: require('../MapStore2/web/client/product/pages/MapViewer')
    }, {
        name: "mapviewer",
        path: "/viewer/:mapType/:mapId/context/:contextId", // TODO CHECK
        component: require('../MapStore2/web/client/product/pages/MapViewer') // IF IT IS NEEDED TO USE MAPSTORE PAGE
    }, {
        name: 'context',
        path: "/context/:contextName",
        component: require('../MapStore2/web/client/product/pages/Context').default
    }, {
        name: 'context',
        path: "/context/:contextName/:mapId",
        component: require('../MapStore2/web/client/product/pages/Context').default
    }, {
        name: 'context-creator',
        path: "/context-creator/:contextId",
        component: require('../MapStore2/web/client/product/pages/ContextCreator').default
    }, {
        name: "manager",
        path: "/manager",
        component: require('./pages/Manager')
    }, {
        name: "manager",
        path: "/manager/:tool",
        component: require('./pages/Manager')
    }, {
        name: "context-manager",
        path: "/context-manager",
        component: require('../MapStore2/web/client/product/pages/ContextManager').default
    }, {
        name: "dashboard",
        path: "/dashboard",
        component: require('../MapStore2/web/client/product/pages/Dashboard')
    }, {
        name: "dashboard",
        path: "/dashboard/:did",
        component: require('../MapStore2/web/client/product/pages/Dashboard')
    }, {
        name: "rulesmanager",
        path: "/rules-manager",
        component: require('../MapStore2/web/client/product/pages/RulesManager')
    }, {
        name: "geostory",
        path: "/geostory/:gid",
        component: require('../MapStore2/web/client/product/pages/GeoStory').default
    }, {
        name: "geostory",
        path: "/geostory/shared/:gid",
        component: require('../MapStore2/web/client/product/pages/GeoStory').default
    }],
    pluginsDef: require('./plugins.js'),
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
        security: require('../MapStore2/web/client/reducers/security')
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
