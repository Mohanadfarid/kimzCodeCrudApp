import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const PostListitem = ({data,deleteRecored}) => {

    const recordes = data?.map((post) => {
        return (
          <tr key={post.id}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>
              <ButtonGroup aria-label="Basic example">
                <Button variant="success">Edit</Button>
                <Button onClick={()=>deleteRecored(post.id)} variant="danger">Delete</Button>
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
