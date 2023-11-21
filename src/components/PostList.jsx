import React from "react";
import { Table } from "react-bootstrap";
import PostListitem from "./PostListitem";

export const PostList = ({ data, loading, error }) => {

  

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
      <PostListitem data={data} loading={loading} error={error}/>
      </tbody>
    </Table>
  );
};
export default PostList;
