import React, { memo } from "react";
import { Table } from "react-bootstrap";
import PostListitem from "./PostListitem";

export const PostList = ({ data,deleteRecored}) => {

  

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
      <PostListitem data={data} deleteRecored={deleteRecored}/>
      </tbody>
    </Table>
  );
};
export default memo(PostList);
