import React, { useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { insertPost } from "../state/postSlice";

export const AddPost = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  const dispatch = useDispatch();
  const formHandler = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random()*500)
    dispatch(insertPost({id,title,description}))
  };
  return (
    <Form onSubmit={formHandler}>
      <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
      </FormGroup>

      <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
      </FormGroup>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddPost;
