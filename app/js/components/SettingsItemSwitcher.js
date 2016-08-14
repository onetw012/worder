import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleShowDescription, toggleShowTranslation } from '../actions';
import Switcher from './Switcher';

const mapStateToProps = (state, ownProps) => {
    let label, checked;
    switch (ownProps.type) {
        case 'TOGGLE_SHOW_DESCRIPTION': {
            label = 'Show description';
            checked = state.settings.showDescription;
            break;
        }
        case 'TOGGLE_SHOW_TRANSLATION': {
            label = 'Show translation';
            checked = state.settings.showTranslation;
            break;
        }

        case 'SHOW_WORD_IN_TIMEOUT': {
        	label = 'Timeout'
        }
    }
    return { label, checked };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    let fn;
    switch (ownProps.type) {
        case 'TOGGLE_SHOW_DESCRIPTION': {
            fn = toggleShowDescription;
            break;
        }
        case 'TOGGLE_SHOW_TRANSLATION': {
            fn = toggleShowTranslation;
            break;
        }
    }
    return {
        onClick: () => {
            dispatch(fn());
        }
    }
};


const SettingsItemSwitcher = connect(
  mapStateToProps,
  mapDispatchToProps
)(Switcher);


export default SettingsItemSwitcher;