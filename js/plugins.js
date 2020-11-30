/*
 * Copyright 2016, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

// TODO take all plugins from ms2

// custom plugins
import AttributionPlugin from './plugins/Attribution';
import FeatureLoader from './plugins/FeatureLoader';
import FooterPlugin from './plugins/Footer';
import GeoNetworkLinkPlugin from './plugins/GeoNetworkLink';
import HeaderPlugin from './plugins/Header';
import LoginPlugin from './plugins/Login';
import LoginModalPlugin from './plugins/LoginModal';
import PrivacyNote from './plugins/PrivacyNote';
// product plugins
import NavMenu from '@mapstore/framework/product/plugins/NavMenu';
import AboutPlugin from '@mapstore/framework/product/plugins/About';
// framework  plugin
import AddGroupPlugin from '@mapstore/framework/plugins/AddGroup';
import AnnotationsPlugin from '@mapstore/framework/plugins/Annotations';
import AutoMapUpdatePlugin from '@mapstore/framework/plugins/AutoMapUpdate';
import BackgroundSelectorPlugin from '@mapstore/framework/plugins/BackgroundSelector';
// BackgroundSwitcherPlugin from '@mapstore/framework/plugins/BackgroundSwitcher'; NOT_NEEDED
import BurgerMenuPlugin from '@mapstore/framework/plugins/BurgerMenu';
import CRSSelectorPlugin from '@mapstore/framework/plugins/CRSSelector';
import ContentTabs from '@mapstore/framework/plugins/ContentTabs';
import ContextPlugin from '@mapstore/framework/plugins/Context';
import ContextCreatorPlugin from '@mapstore/framework/plugins/ContextCreator';
import ContextManagerPlugin from '@mapstore/framework/plugins/contextmanager/ContextManager';
import CookiePlugin from '@mapstore/framework/plugins/Cookie';
import CreateNewMapPlugin from '@mapstore/framework/plugins/CreateNewMap';
import Dashboard from '@mapstore/framework/plugins/Dashboard';
import DashboardEditor from '@mapstore/framework/plugins/DashboardEditor';
import {
    DashboardSaveAs as DashboardSavePlugin,
    DashboardSaveAs as DashboardSaveAsPlugin
} from '@mapstore/framework/plugins/DashboardSave';
import DashboardsPlugin from '@mapstore/framework/plugins/Dashboards';
import DetailsPlugin from '@mapstore/framework/plugins/Details';
import DrawerMenuPlugin from '@mapstore/framework/plugins/DrawerMenu';
import ExpanderPlugin from '@mapstore/framework/plugins/Expander';
import FeatureEditorPlugin from '@mapstore/framework/plugins/FeatureEditor';
import FeaturedMaps from '@mapstore/framework/plugins/FeaturedMaps';
import FeedbackMaskPlugin from '@mapstore/framework/plugins/FeedbackMask';
import FilterLayerPlugin from '@mapstore/framework/plugins/FilterLayer';
// FloatingLegendPlugin from '@mapstore/framework/plugins/FloatingLegend'; NOT_NEEDED
import FullScreenPlugin from '@mapstore/framework/plugins/FullScreen';
import GeoStoryPlugin from '@mapstore/framework/plugins/GeoStory';
import GeoStoriesPlugin from '@mapstore/framework/plugins/GeoStories';
import GeoStoryEditorPlugin from '@mapstore/framework/plugins/GeoStoryEditor';
import {
    GeoStorySave as GeoStorySavePlugin,
    GeoStorySaveAs as GeoStorySaveAsPlugin
} from '@mapstore/framework/plugins/GeoStorySave';
import GeoStoryNavigationPlugin from '@mapstore/framework/plugins/GeoStoryNavigation';
import GlobeViewSwitcherPlugin from '@mapstore/framework/plugins/GlobeViewSwitcher';
import GoFull from '@mapstore/framework/plugins/GoFull';
// GridContainerPlugin from '@mapstore/framework/plugins/GridContainer'; NOT NEEDED (bound to theme ThemeSwitcherPlugin and MapTypePlugin)
import GroupManagerPlugin from '@mapstore/framework/plugins/manager/GroupManager';
import HelpLinkPlugin from '@mapstore/framework/plugins/HelpLink';
import HelpPlugin from '@mapstore/framework/plugins/Help';
import HomePlugin from '@mapstore/framework/plugins/Home';
import IdentifyPlugin from '@mapstore/framework/plugins/Identify';
import LanguagePlugin from '@mapstore/framework/plugins/Language';
import LocatePlugin from '@mapstore/framework/plugins/Locate';
import ManagerMenuPlugin from '@mapstore/framework/plugins/manager/ManagerMenu';
import ManagerPlugin from '@mapstore/framework/plugins/manager/Manager';
import MapEditorPlugin from '@mapstore/framework/plugins/MapEditor';
import MapExportPlugin from '@mapstore/framework/plugins/MapExport';
import MapFooterPlugin from '@mapstore/framework/plugins/MapFooter';
import MapImportPlugin from '@mapstore/framework/plugins/MapImport';
import MapLoadingPlugin from '@mapstore/framework/plugins/MapLoading';
import MapPlugin from '@mapstore/framework/plugins/Map';
import MapSearchPlugin from '@mapstore/framework/plugins/MapSearch';
import MapsPlugin from '@mapstore/framework/plugins/Maps';
import MapCatalogPlugin from '@mapstore/framework/plugins/MapCatalog';
import MapTemplatesPlugin from '@mapstore/framework/plugins/MapTemplates';
import MeasurePlugin from '@mapstore/framework/plugins/Measure';
import MediaEditorPlugin from '@mapstore/framework/plugins/MediaEditor';
import MetadataExplorerPlugin from '@mapstore/framework/plugins/MetadataExplorer';
import MousePositionPlugin from '@mapstore/framework/plugins/MousePosition';
import NotificationsPlugin from '@mapstore/framework/plugins/Notifications';
import OmniBarPlugin from '@mapstore/framework/plugins/OmniBar';
import PlaybackPlugin from '@mapstore/framework/plugins/Playback';
import PrintPlugin from '@mapstore/framework/plugins/Print';
import QueryPanelPlugin from '@mapstore/framework/plugins/QueryPanel';
import RedirectPlugin from '@mapstore/framework/plugins/Redirect';
import History from '@mapstore/framework/plugins/History';
import RulesDataGridPlugin from '@mapstore/framework/plugins/RulesDataGrid';
import RulesEditorPlugin from '@mapstore/framework/plugins/RulesEditor';
import RulesManagerFooter from '@mapstore/framework/plugins/RulesManagerFooter';
import SaveAsPlugin from '@mapstore/framework/plugins/SaveAs';
import SavePlugin from '@mapstore/framework/plugins/Save';
import ScaleBoxPlugin from '@mapstore/framework/plugins/ScaleBox';
import ScrollTopPlugin from '@mapstore/framework/plugins/ScrollTop';
import SearchPlugin from '@mapstore/framework/plugins/Search';
import SearchServicesConfigPlugin from '@mapstore/framework/plugins/SearchServicesConfig';
import SettingsPlugin from '@mapstore/framework/plugins/Settings';
import * as SharePlugin from '@mapstore/framework/plugins/Share';
import SnapshotPlugin from '@mapstore/framework/plugins/Snapshot';
import StyleEditorPlugin from '@mapstore/framework/plugins/StyleEditor';
import TOCItemsSettingsPlugin from '@mapstore/framework/plugins/TOCItemsSettings';
import TOCPlugin from '@mapstore/framework/plugins/TOC';
import ThematicLayerPlugin from '@mapstore/framework/plugins/ThematicLayer';
// ThemeSwitcherPlugin from '../plugins/ThemeSwitcher'; NOT_NEEDED
import TimelinePlugin from '@mapstore/framework/plugins/Timeline';
import ToolbarPlugin from '@mapstore/framework/plugins/Toolbar';
import TutorialPlugin from '@mapstore/framework/plugins/Tutorial';

import UserExtensionsPlugin from '@mapstore/framework/plugins/UserExtensions';
import UserManagerPlugin from '@mapstore/framework/plugins/manager/UserManager';
import UserSessionPlugin from '@mapstore/framework/plugins/UserSession';
import VersionPlugin from '@mapstore/framework/plugins/Version';
import LayerDownloadPlugin from '@mapstore/framework/plugins/LayerDownload';
import WidgetsBuilderPlugin from '@mapstore/framework/plugins/WidgetsBuilder';
import WidgetsPlugin from '@mapstore/framework/plugins/Widgets';
import WidgetsTrayPlugin from '@mapstore/framework/plugins/WidgetsTray';
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
        FooterPlugin,
        GeoNetworkLinkPlugin,
        HeaderPlugin,
        LoginPlugin,
        LoginModalPlugin,
        PrivacyNote,
        // product plugins
        NavMenu,
        AboutPlugin,
        // framework  plugin
        AddGroupPlugin,
        AnnotationsPlugin,
        AutoMapUpdatePlugin,
        BackgroundSelectorPlugin,

        BurgerMenuPlugin,
        CRSSelectorPlugin,
        ContentTabs,
        ContextPlugin,
        ContextCreatorPlugin,
        ContextManagerPlugin,
        CookiePlugin,
        CreateNewMapPlugin,
        Dashboard,
        DashboardEditor,
        DashboardSavePlugin,
        DashboardSaveAsPlugin,
        DashboardsPlugin,
        DetailsPlugin,
        DrawerMenuPlugin,
        ExpanderPlugin,
        FeatureEditorPlugin,
        FeaturedMaps,
        FeedbackMaskPlugin,
        FilterLayerPlugin,

        FullScreenPlugin,
        GeoStoryPlugin,
        GeoStoriesPlugin,
        GeoStoryEditorPlugin,
        GeoStorySavePlugin,
        GeoStorySaveAsPlugin,
        GeoStoryNavigationPlugin,
        GlobeViewSwitcherPlugin,
        GoFull,

        GroupManagerPlugin,
        HelpLinkPlugin,
        HelpPlugin,
        HomePlugin,
        IdentifyPlugin,
        LanguagePlugin,
        LocatePlugin,
        ManagerMenuPlugin,
        ManagerPlugin,
        MapEditorPlugin,
        MapExportPlugin,
        MapFooterPlugin,
        MapImportPlugin,
        MapLoadingPlugin,
        MapPlugin,
        MapSearchPlugin,
        MapsPlugin,
        MapCatalogPlugin,
        MapTemplatesPlugin,
        MeasurePlugin,
        MediaEditorPlugin,
        MetadataExplorerPlugin,
        MousePositionPlugin,
        NotificationsPlugin,
        OmniBarPlugin,
        PlaybackPlugin,
        PrintPlugin,
        QueryPanelPlugin,
        RedirectPlugin,
        RedoPlugin: History,
        RulesDataGridPlugin,
        RulesEditorPlugin,
        RulesManagerFooter,
        SaveAsPlugin,
        SavePlugin,
        ScaleBoxPlugin,
        ScrollTopPlugin,
        SearchPlugin,
        SearchServicesConfigPlugin,
        SettingsPlugin,
        SharePlugin,
        SnapshotPlugin,
        StyleEditorPlugin,
        TOCItemsSettingsPlugin,
        TOCPlugin,
        ThematicLayerPlugin,

        TimelinePlugin,
        ToolbarPlugin,
        TutorialPlugin,
        UndoPlugin: History,
        UserExtensionsPlugin,
        UserManagerPlugin,
        UserSessionPlugin,
        VersionPlugin,
        LayerDownloadPlugin,
        WidgetsBuilderPlugin,
        WidgetsPlugin,
        WidgetsTrayPlugin,
        ZoomAllPlugin,
        ZoomInPlugin,
        ZoomOutPlugin
    },
    requires: {
        ReactSwipe,
        SwipeHeader
    }
};
