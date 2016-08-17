import { connect } from 'react-redux';
import Word from '../components/Word';

const mapStateToProps = (state, ownProps) => {
  const word = state.words[state.currentWord] || {};
  return {
    title: word.title,
    translation: (state.settings.showTranslation ? word.translation : ''),
    description: (state.settings.showDescription ? word.description : ''),
  };
}

const mapDispatchToProps = (dispatch, ownProps) => ({});

const WordContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Word)

export default WordContainer;
