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
// framework plugins
import BurgerMenuPlugin from '@mapstore/framework/plugins/BurgerMenu';
import CreateNewMapPlugin from '@mapstore/framework/plugins/CreateNewMap';
import DrawerMenuPlugin from '@mapstore/framework/plugins/DrawerMenu';
import ExpanderPlugin from '@mapstore/framework/plugins/Expander';
import HelpPlugin from '@mapstore/framework/plugins/Help';
import HomePlugin from '@mapstore/framework/plugins/Home';
import IdentifyPlugin from '@mapstore/framework/plugins/Identify';
import LanguagePlugin from '@mapstore/framework/plugins/Language';
import LocatePlugin from '@mapstore/framework/plugins/Locate';
import LoginPlugin from '@mapstore/framework/plugins/Login';
import MapFooter from '@mapstore/framework/plugins/MapFooter';
import MapLoadingPlugin from '@mapstore/framework/plugins/MapLoading';
import MapPlugin from '@mapstore/framework/plugins/Map';
import MapSearchPlugin from '@mapstore/framework/plugins/MapSearch';
import MapsPlugin from '@mapstore/framework/plugins/Maps';
import MeasurePlugin from '@mapstore/framework/plugins/Measure';
import MeasureResultsPlugin from '@mapstore/framework/plugins/MeasureResults';
import MetadataExplorerPlugin from '@mapstore/framework/plugins/MetadataExplorer';
import MousePositionPlugin from '@mapstore/framework/plugins/MousePosition';
import NotificationsPlugin from '@mapstore/framework/plugins/Notifications';
import OmniBarPlugin from '@mapstore/framework/plugins/OmniBar';
import PrintPlugin from '@mapstore/framework/plugins/Print';
import QueryPanelPlugin from '@mapstore/framework/plugins/QueryPanel';
import RedirectPlugin from '@mapstore/framework/plugins/Redirect';
import History from '@mapstore/framework/plugins/History';
import SaveAsPlugin from '@mapstore/framework/plugins/SaveAs';
import SavePlugin from '@mapstore/framework/plugins/Save';
import ScaleBoxPlugin from '@mapstore/framework/plugins/ScaleBox';
import SearchPlugin from '@mapstore/framework/plugins/Search';
import SettingsPlugin from '@mapstore/framework/plugins/Settings';
import * as SharePlugin from '@mapstore/framework/plugins/Share';
import SnapshotPlugin from '@mapstore/framework/plugins/Snapshot';
import TOCPlugin from '@mapstore/framework/plugins/TOC';
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
        // framework plugins
        BurgerMenuPlugin,
        CreateNewMapPlugin,
        DrawerMenuPlugin,
        ExpanderPlugin,
        HelpPlugin,
        HomePlugin,
        IdentifyPlugin,
        LanguagePlugin,
        LocatePlugin,
        LoginPlugin,
        MapFooter,
        MapLoadingPlugin,
        MapPlugin,
        MapSearchPlugin,
        MapsPlugin,
        MeasurePlugin,
        MeasureResultsPlugin,
        MetadataExplorerPlugin,
        MousePositionPlugin,
        NotificationsPlugin,
        OmniBarPlugin,
        PrintPlugin,
        QueryPanelPlugin,
        RedirectPlugin,
        RedoPlugi: History,
        SaveAsPlugin,
        SavePlugin,
        ScaleBoxPlugin,
        SearchPlugin,
        SettingsPlugin,
        SharePlugin,
        SnapshotPlugin,
        TOCPlugin,
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
