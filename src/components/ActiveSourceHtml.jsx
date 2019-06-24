import {connect} from 'react-redux';
import SourceHtml from './SourceHtml';

const mapStateToProps = state => ({
    sources: state
});

const mapDispatchToProps = dispatch => ({
});

const ActiveSourceHtml = connect(mapStateToProps, mapDispatchToProps)(SourceHtml);

export default ActiveSourceHtml;