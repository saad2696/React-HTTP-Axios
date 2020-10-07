import React, { Component } from "react";
import axios from "axios";
//axios is promised based library
class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      error: "",
    };
  }
  //perfect place for get request
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: "Error retriving Data",
        });
      });
  }
  render() {
    const { posts, error } = this.state;
    return (
      <div>
        <h1>List of Post from Json Place Holder</h1>
        {posts.length
          ? posts.map((post) => (
              <div key={post.id}>
                Title : {post.title}
                <div>Body : {post.body}</div>
              </div>
            ))
          : null}
          {
              error? <div>{error}</div> : null
          }
      </div>
    );
  }
}

export default PostList;
