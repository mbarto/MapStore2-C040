/*
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */


// custom plugins
import AttributionPlugin from './plugins/Attribution';
import FeatureLoader from './plugins/FeatureLoader';
import LavoriPubbliciPlugin from './plugins/LavoriPubblici';
// framework plugins
import BackgroundSelectorPlugin from '@mapstore/framework/plugins/BackgroundSelector';
import BurgerMenuPlugin from '@mapstore/framework/plugins/BurgerMenu';
import DrawerMenuPlugin from '@mapstore/framework/plugins/DrawerMenu';
import FeedbackMaskPlugin from '@mapstore/framework/plugins/FeedbackMask';
import HelpPlugin from '@mapstore/framework/plugins/Help';
import LanguagePlugin from '@mapstore/framework/plugins/Language';
import LocatePlugin from '@mapstore/framework/plugins/Locate';
import LoginPlugin from '@mapstore/framework/plugins/Login';
import MapLoadingPlugin from '@mapstore/framework/plugins/MapLoading';
import MapPlugin from '@mapstore/framework/plugins/Map';
import MapSearchPlugin from '@mapstore/framework/plugins/MapSearch';
import MapsPlugin from '@mapstore/framework/plugins/Maps';
import NotificationsPlugin from '@mapstore/framework/plugins/Notifications';
import OmniBarPlugin from '@mapstore/framework/plugins/OmniBar';
import RedirectPlugin from '@mapstore/framework/plugins/Redirect';
import History from '@mapstore/framework/plugins/History';
import SearchPlugin from '@mapstore/framework/plugins/Search';
import SearchServicesConfig from '@mapstore/framework/plugins/SearchServicesConfig';
import ToolbarPlugin from '@mapstore/framework/plugins/Toolbar';
import TutorialPlugin from '@mapstore/framework/plugins/Tutorial';
import ZoomAllPlugin from '@mapstore/framework/plugins/ZoomAll';
import ZoomInPlugin from '@mapstore/framework/plugins/ZoomIn';
import ZoomOutPlugin from '@mapstore/framework/plugins/ZoomOut';

import ReactSwipe from 'react-swipeable-views';
import SwipeHeader from '@mapstore/framework/components/data/identify/SwipeHeader';

export default {
    plugins: {
        // custom plugins
        AttributionPlugin,
        FeatureLoader,
        LavoriPubbliciPlugin,
        // framework plugins
        BackgroundSelectorPlugin,
        BurgerMenuPlugin,
        DrawerMenuPlugin,
        FeedbackMaskPlugin,
        HelpPlugin,
        LanguagePlugin,
        LocatePlugin,
        LoginPlugin,
        MapLoadingPlugin,
        MapPlugin,
        MapSearchPlugin,
        MapsPlugin,
        NotificationsPlugin,
        OmniBarPlugin,
        RedirectPlugin,
        RedoPlugin: History,
        SearchPlugin,
        SearchServicesConfig,
        ToolbarPlugin,
        TutorialPlugin,
        UndoPlugin: History,
        ZoomAllPlugin,
        ZoomInPlugin,
        ZoomOutPlugin
    },
    requires: {
        ReactSwipe,
        SwipeHeader
    }
};
