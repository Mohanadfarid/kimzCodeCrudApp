import React, { useEffect, useState } from "react";
import usePostDetails from "../hooks/use-post-details.js";
import Loading from "../components/Loading";
import { Button, Form, FormGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { cleanRecord, edittPost } from "../state/postSlice.js";
import { useNavigate } from "react-router-dom";
import withGuard from "../util/withGuard.js";
import { useFormik } from "formik";
import { postSchema } from "../util/validationSchema.js";

const EditPost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, record } = usePostDetails();



  useEffect(() => {
    return () => {
      dispatch(cleanRecord());
    };
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      title: record?record.title:"",
      description: record?record.description:"",
    },
    enableReinitialize:true,
    validationSchema: postSchema,
    onSubmit: (values) => {
      dispatch(
        edittPost({
          id: record.id,
          title: values.title,
          description: values.description,
        })
      )
        .unwrap()
        .then(() => {
          navigate(`/`);
        })
        .catch((error) => {
          alert(error);
        });
    },
  });

  return (
    <Loading>
      <Form onSubmit={formik.handleSubmit}>
        <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.title}
          />
          <Form.Control.Feedback>{formik.errors.title}</Form.Control.Feedback>
          {formik.errors.title}
        </FormGroup>

        <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            isInvalid={!!formik.errors.title}
          />
          <Form.Control.Feedback>{formik.errors.title}</Form.Control.Feedback>
          {formik.errors.title}
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

export default withGuard(EditPost);
