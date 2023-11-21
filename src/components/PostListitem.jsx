import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const PostListitem = ({data,loading,error}) => {

    const recordes = data?.map((post) => {
        return (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>
              <ButtonGroup aria-label="Basic example">
                <Button variant="success">Edit</Button>
                <Button variant="danger">Delete</Button>
              </ButtonGroup>
            </td>
          </tr>
        );
      });

    return (
        <>
            {loading ? (
          <td colSpan={3}>loading plz wait</td>
        ) : error ? (
          <td colSpan={3}>{error}</td>
        ) : (
          recordes
        )}
        </>
    );
}

export default PostListitem;
