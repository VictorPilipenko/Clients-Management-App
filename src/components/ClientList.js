import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getVisibleClients} from '../selectors/clients';
import {bindActionCreators} from 'redux';
import {selectClient} from '../actions/client'
import { List, Image } from 'semantic-ui-react'



class ClientList extends Component {
    componentDidUpdate () {
        window.scrollTo(0, 0);
    }

    renderList() {
        return this.props.clients.map((client) => {
            return (
                <div style={{ marginBottom: 8 }}
                    key={client.id}
                    onClick={() => this.props.selectClient(client)}
                >
                    <List selection verticalAlign='middle'>
                        <List.Item>
                            <Image avatar src={client.general.avatar} width="32" height="32" alt="Awesome" />
                            <List.Content>
                                <List.Header>{client.general.firstName} {client.general.lastName}</List.Header>
                                <List.Description>{client.job.title}</List.Description>
                            </List.Content>
                        </List.Item>
                    </List>

                   
                   
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        clients: getVisibleClients(state)
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({selectClient: selectClient}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ClientList);