import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PostListitem = ({data,deleteRecored}) => {

  const deleteHandler = (post)=>{
    if (window.confirm(`Do you really want to delete post ${post.title}?`)){
      deleteRecored(post.id)
    }
  }

    const recordes = data?.map((post) => {
        return (
          <tr key={post.id}>
            <td># {post.id}</td>
            <td><Link to={`post/${post.id}`}>{post.title}</Link></td>
            <td>
              <ButtonGroup aria-label="Basic example">
                <Button variant="success">Edit</Button>
                <Button onClick={()=>deleteHandler(post)} variant="danger">Delete</Button>
              </ButtonGroup>
            </td>
          </tr>
        );
      });

    return (
        <>
        {recordes}
        </>
    );
}

export default PostListitem;
