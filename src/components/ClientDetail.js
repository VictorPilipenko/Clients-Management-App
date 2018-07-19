import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Item } from 'semantic-ui-react'


class ClientDetail extends Component {
    render() {
        if (!this.props.client) {
            return (<div>Select a chelobjaka...</div>);
        }
        return (
            <Item.Group>
                <Item>
                    <Item.Image avatar src={this.props.client.general.avatar} width="128" height="128" alt="Awesome" />

                    <Item.Content>
                        <Item.Header>{this.props.client.general.firstName} {this.props.client.general.lastName}</Item.Header>
                        <Item.Meta>
                            <p>company: {this.props.client.job.company} </p>
                            <p>title: {this.props.client.job.title} </p>
                        </Item.Meta>
                
                        <Item.Extra>
                            <p>email: {this.props.client.contact.email} </p>
                            <p>phone: {this.props.client.contact.phone} </p>

                            <p>street: {this.props.client.address.street} </p>
                            <p>city: {this.props.client.address.city} </p>
                            <p>zipCode: {this.props.client.address.zipCode} </p>
                            <p>country: {this.props.client.address.country} </p>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group> 
        );
    }
}

function mapStateToProps(state) {
    return {
        client: state.client
    };
}

export default connect(mapStateToProps)(ClientDetail);
