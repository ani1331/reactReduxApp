import React, {Component} from 'react';
import {getPostCommentsAsync} from "../actions";
import {connect} from "react-redux";

class CommentList extends Component {
    componentDidMount() {
        this.props.getCommentList(this.props.postId);
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
                    <thead className="thead" style={{backgroundColor: "#4682B4"}}>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Body</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.comments.map(comment => (
                        <tr key={comment.id}>
                            <td>{comment.name}</td>
                            <td>{comment.email}</td>
                            <td>{comment.body}</td>
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
        comments: state.comments,
        postId: state.router.location.pathname.replace('/comments/','')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCommentList: (postId) => dispatch(getPostCommentsAsync(postId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
