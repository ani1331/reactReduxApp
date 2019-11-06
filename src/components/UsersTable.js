import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Icon from '../icon/filter.svg';
import {getUsersAsync} from "../actions";
import {connect} from 'react-redux';
import '../style/main.css';


class UsersTable extends Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
            return (
                <div className="App">
                    <table className="table table-striped"
                           style={{
                               width: "auto",
                               borderRadius: "1em",
                               overflow: "hidden",
                               margin: "2% auto",
                           }}>
                        <thead className="thead">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.users.map(user => (
                            <tr key={user.id}>
                                <td>
                                    <img className="ml-1" alt="icon" src={Icon}/>
                                    <Link to={`/posts/${user.id}`}>{user.name}</Link>
                                </td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(getUsersAsync())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);
