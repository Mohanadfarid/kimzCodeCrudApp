import React from "react";
import { ButtonGroup, Table, Button } from "react-bootstrap";

export const PostList = ({ data, loading, error }) => {
  
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
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th style={{ width: "70%" }}>Title</th>
          <th style={{ width: "10%" }}></th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <td colSpan={3}>loading plz wait</td>
        ) : error ? (
          <td colSpan={3}>{error}</td>
        ) : (
          recordes
        )}
      </tbody>
    </Table>
  );
};
export default PostList;
