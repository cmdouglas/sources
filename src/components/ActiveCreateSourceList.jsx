
import {connect} from 'react-redux';
import {updateSource, createSource, deleteSource} from '../actions';
import CreateSourceList from './CreateSourceList';

const mapStateToProps = state => ({
    sources: state
});

const mapDispatchToProps = dispatch => ({
    updateSource: (index, name, value) => (dispatch(updateSource(index, name, value))),
    updateDate: (index, value) => (dispatch(updateSource(index, 'date', value))),
    createSource: () => (dispatch(createSource())),
    deleteSource: (index) => dispatch(deleteSource(index))
});

const ActiveCreateSourceList = connect(mapStateToProps, mapDispatchToProps)(CreateSourceList);

export default ActiveCreateSourceList;