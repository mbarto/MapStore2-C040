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
        LavoriPubbliciPlugin: require('./plugins/LavoriPubblici'),
        // framework plugins
        BackgroundSelectorPlugin: require('@mapstore/framework/plugins/BackgroundSelector').default,
        BurgerMenuPlugin: require('@mapstore/framework/plugins/BurgerMenu').default,
        DrawerMenuPlugin: require('@mapstore/framework/plugins/DrawerMenu').default,
        // FeatureGridPlugin: require('@mapstore/framework/plugins/FeatureGrid').default,
        FeedbackMaskPlugin: require('@mapstore/framework/plugins/FeedbackMask').default,
        HelpPlugin: require('@mapstore/framework/plugins/Help').default,
        LanguagePlugin: require('@mapstore/framework/plugins/Language').default,
        LocatePlugin: require('@mapstore/framework/plugins/Locate').default,
        LoginPlugin: require('@mapstore/framework/plugins/Login').default,
        MapLoadingPlugin: require('@mapstore/framework/plugins/MapLoading').default,
        MapPlugin: require('@mapstore/framework/plugins/Map').default,
        MapSearchPlugin: require('@mapstore/framework/plugins/MapSearch').default,
        MapsPlugin: require('@mapstore/framework/plugins/Maps').default,
        NotificationsPlugin: require('@mapstore/framework/plugins/Notifications').default,
        OmniBarPlugin: require('@mapstore/framework/plugins/OmniBar').default,
        RedirectPlugin: require('@mapstore/framework/plugins/Redirect').default,
        RedoPlugin: require('@mapstore/framework/plugins/History').default,
        SearchPlugin: require('@mapstore/framework/plugins/Search').default,
        SearchServicesConfig: require('@mapstore/framework/plugins/SearchServicesConfig').default,
        ToolbarPlugin: require('@mapstore/framework/plugins/Toolbar').default,
        TutorialPlugin: require('@mapstore/framework/plugins/Tutorial').default,
        UndoPlugin: require('@mapstore/framework/plugins/History').default,
        ZoomAllPlugin: require('@mapstore/framework/plugins/ZoomAll').default,
        ZoomInPlugin: require('@mapstore/framework/plugins/ZoomIn').default,
        ZoomOutPlugin: require('@mapstore/framework/plugins/ZoomOut').default
    },
    requires: {
        ReactSwipe: require('react-swipeable-views').default,
        SwipeHeader: require('@mapstore/framework/components/data/identify/SwipeHeader').default
    }
};
