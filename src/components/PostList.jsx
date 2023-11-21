import React from "react";
import { Table } from "react-bootstrap";
import PostListitem from "./PostListitem";

export const PostList = ({ data}) => {

  

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
      <PostListitem data={data}/>
      </tbody>
    </Table>
  );
};
export default PostList;
