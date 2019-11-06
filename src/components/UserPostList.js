import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {getUserPostsAsync} from "../actions";
import {connect} from "react-redux";

class PostList extends Component {
    componentDidMount() {
        console.log(this.props.userId);
        this.props.getUserPosts(this.props.userId);
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

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        userId: state.router.location.pathname.replace('/posts/','')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserPosts: (userId) => dispatch(getUserPostsAsync(userId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);