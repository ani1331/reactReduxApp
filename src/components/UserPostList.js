import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {getUserPostsAsync} from "../actions";
import {connect} from "react-redux";

class PostList extends Component {
    componentDidMount() {
        this.props.getUserPosts(this.props.match.params.id);
    }

    render() {
        return (
            <div className="App">
                <table className="table table-striped" style={{
                    width: "80%",
                    borderRadius: "1em",
                    overflow: "hidden",
                    margin: "2% auto",
                }}>
                    <thead className="thead" style={{backgroundColor: "#2F4F4F"}}>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Body</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.posts.map(post => (
                        <tr key={post.id}>
                            <td>
                                <Link to={`/comments/${post.id}`}>{post.title}</Link>
                            </td>
                            <td>{post.body}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        posts: state.posts
        // post: state.posts.find(user => user.id === +props.match.params.id )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserPosts: () => dispatch(getUserPostsAsync())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);