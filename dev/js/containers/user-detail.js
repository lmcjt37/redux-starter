import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {
    render() {
        if (!this.props.user) {
            return (<div>Select a character...</div>);
        }
        return (
            <div>
                <img src={this.props.user.thumbnail} height="150"/>
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>{this.props.user.description}</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    };
}

export default connect(mapStateToProps)(UserDetail);
