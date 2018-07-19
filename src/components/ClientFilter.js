import React from 'react';
import { connect } from 'react-redux';
import { filterText } from '../actions/filters';
import { Input } from 'semantic-ui-react'

const ClientFilters = (props) => (
    <div style={{ marginBottom: 15 }}>
        <Input icon='users' iconPosition='left' placeholder='Search...' type='text' value={props.filters.text}
            onChange={(e) => {
                props.dispatch(filterText(e.target.value));
            }}></Input>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ClientFilters);
