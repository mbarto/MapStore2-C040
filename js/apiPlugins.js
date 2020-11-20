/*
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
module.exports = {
    plugins: {
        // custom plugins
        AttributionPlugin: require('./plugins/Attribution'),
        FeatureLoader: require('./plugins/FeatureLoader'),
        // framework plugins
        BurgerMenuPlugin: require('@mapstore/framework/plugins/BurgerMenu').default,
        CreateNewMapPlugin: require('@mapstore/framework/plugins/CreateNewMap').default.default,
        DrawerMenuPlugin: require('@mapstore/framework/plugins/DrawerMenu').default,
        ExpanderPlugin: require('@mapstore/framework/plugins/Expander').default,
        HelpPlugin: require('@mapstore/framework/plugins/Help').default,
        HomePlugin: require('@mapstore/framework/plugins/Home').default,
        IdentifyPlugin: require('@mapstore/framework/plugins/Identify').default,
        LanguagePlugin: require('@mapstore/framework/plugins/Language').default,
        LocatePlugin: require('@mapstore/framework/plugins/Locate').default,
        LoginPlugin: require('@mapstore/framework/plugins/Login').default,
        MapFooter: require('@mapstore/framework/plugins/MapFooter').default,
        MapLoadingPlugin: require('@mapstore/framework/plugins/MapLoading').default,
        MapPlugin: require('@mapstore/framework/plugins/Map').default,
        MapSearchPlugin: require('@mapstore/framework/plugins/MapSearch').default,
        MapsPlugin: require('@mapstore/framework/plugins/Maps').default,
        MeasurePlugin: require('@mapstore/framework/plugins/Measure').default,
        MeasureResultsPlugin: require('@mapstore/framework/plugins/MeasureResults').default,
        MetadataExplorerPlugin: require('@mapstore/framework/plugins/MetadataExplorer').default,
        MousePositionPlugin: require('@mapstore/framework/plugins/MousePosition').default,
        NotificationsPlugin: require('@mapstore/framework/plugins/Notifications').default,
        OmniBarPlugin: require('@mapstore/framework/plugins/OmniBar').default,
        PrintPlugin: require('@mapstore/framework/plugins/Print').default,
        QueryPanelPlugin: require('@mapstore/framework/plugins/QueryPanel').default,
        RedirectPlugin: require('@mapstore/framework/plugins/Redirect').default,
        RedoPlugin: require('@mapstore/framework/plugins/History').default,
        SaveAsPlugin: require('@mapstore/framework/plugins/SaveAs').default,
        SavePlugin: require('@mapstore/framework/plugins/Save').default.default,
        ScaleBoxPlugin: require('@mapstore/framework/plugins/ScaleBox').default,
        SearchPlugin: require('@mapstore/framework/plugins/Search').default,
        SettingsPlugin: require('@mapstore/framework/plugins/Settings').default,
        SharePlugin: require('@mapstore/framework/plugins/Share'),
        SnapshotPlugin: require('@mapstore/framework/plugins/Snapshot').default,
        TOCPlugin: require('@mapstore/framework/plugins/TOC').default,
        ToolbarPlugin: require('@mapstore/framework/plugins/Toolbar').default,
        TutorialPlugin: require('@mapstore/framework/plugins/Tutorial').default,
        UndoPlugin: require('@mapstore/framework/plugins/History').default,
        ZoomAllPlugin: require('@mapstore/framework/plugins/ZoomAll').default,
        ZoomInPlugin: require('@mapstore/framework/plugins/ZoomIn').default,
        ZoomOutPlugin: require('@mapstore/framework/plugins/ZoomOut'.default)
    },
    requires: {
        ReactSwipe: require('react-swipeable-views').default,
        SwipeHeader: require('../MapStore2/web/client/components/data/identify/SwipeHeader').default
    }
};
