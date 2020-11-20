/*
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const ReactDOM = require('react-dom');
const {connect} = require('react-redux');
const {createSelector} = require('reselect');
const {startLoading, updateFeatureLoader} = require('@js/epics/featureloader');
const {ensureIntl} = require('@mapstore/framework/utils/LocaleUtils');
const startApp = () => {
    const StandardApp = require('@mapstore/framework/components/app/StandardApp').default;
    const {pages, pluginsDef, initialState, storeOpts, printingEnabled} = require('@js/appConfigllpp');
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
    const appStore = require('@mapstore/framework/stores/StandardStore').default.bind(null, initialState, {
        mode: (state = 'embedded') => state,
        maps: require('@mapstore/framework/reducers/maps').default,
        security: require('@mapstore/framework/reducers/security').default
    }, {
        "FEATUREVIEWER:startLoading": startLoading,
        "FEATUREVIEWER:updateFeatureLoader": updateFeatureLoader
    });
    const appConfig = {
        appStore,
        storeOpts,
        pluginsDef,
        initialActions: [],
        appComponent: StandardRouter,
        printingEnabled
    };
    ReactDOM.render(
        <StandardApp {...appConfig} mode="desktop"/>,
        document.getElementById('container')
    );
};
if (!global.Intl ) {
    // Ensure Intl is loaded, then call the given callback
    ensureIntl(startApp);
} else {
    startApp();
}
