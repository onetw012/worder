import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { showWordInTimeout, notifyAfter } from '../actions';
import Counter from '../components/Counter';

const mapStateToProps = (state, ownProps) => {
    let label, value;
    switch (ownProps.type) {
        case 'SHOW_WORD_IN_TIMEOUT': {
            label = 'Timeout (seconds)';
            value = state.settings.timeout;
            break;
        }
        case 'NOTIFY_AFTER': {
            label = 'Notify after (minutes)';
            value = state.settings.showNotification;
            break;
        }
    }
    return { label, value };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    let fn;
    switch (ownProps.type) {
        case 'SHOW_WORD_IN_TIMEOUT': {
            fn = showWordInTimeout;
            break;
        }
        case 'NOTIFY_AFTER': {
            fn = notifyAfter;
            break;
        }
    }
    return {
        onChange: (value) => {
            dispatch(fn(value));
        }
    }
};


const SettingsItemCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);


export default SettingsItemCounter;
