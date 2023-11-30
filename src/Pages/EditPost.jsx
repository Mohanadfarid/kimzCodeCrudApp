import React, { useEffect, useState } from "react";
import usePostDetails from "../hooks/use-post-details.js";
import Loading from "../components/Loading";
import { Button, Form, FormGroup } from "react-bootstrap";


const EditPost = () => {
  const { loading, error, record } = usePostDetails();

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");

  useEffect(() => {
    if(record && !title && !description){
      settitle(record?.title)
      setdescription(record?.description)
    }
  }, [record, title, description]);

  const formHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Loading>
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

        <Loading loading={loading} error={error}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Loading>
      </Form>
    </Loading>
  );
};

export default EditPost;
