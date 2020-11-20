/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');

const {connect} = require('react-redux');

const ConfigUtils = require('@mapstore/framework/utils/ConfigUtils').default;
const PluginsUtils = require('@mapstore/framework/utils/PluginsUtils').default;
const PropTypes = require('prop-types');

const PluginsContainer = connect((state) => ({
    pluginsConfig: state.plugins || ConfigUtils.getConfigProp('plugins') || null,
    mode: "featureviewer",
    pluginsState: state && state.controls || {},
    monitoredState: PluginsUtils.filterState(state, ConfigUtils.getConfigProp('monitorState') || [])
}))(require('@mapstore/framework/components/plugins/PluginsContainer').default);

class MapViewer extends React.Component {
    static propTypes = {
        params: PropTypes.object,
        loadMapConfig: PropTypes.func,
        plugins: PropTypes.object
    }
    static defaultProps = {
        mode: 'featureviewer',
        loadMapConfig: () => {}
    };
    UNSAFE_componentWillMount() {
        this.props.loadMapConfig();
    }
    render() {
        return (<PluginsContainer mode="featureviewer" key="featureviewer" id="featureviewer" className="viewer"
            plugins={this.props.plugins}
            params={this.props.params}
        />);
    }
}

module.exports = MapViewer;
