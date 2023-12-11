import { Button, Form, FormGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { insertPost } from "../state/postSlice";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import WithGuard from "../util/withGuard";
import { useFormik } from "formik";


const AddPost = (props) => {
  const { loading, error } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },
    onSubmit: (values) => {
      console.log(values)
      const id = Math.floor(Math.random() * 500);
      dispatch(
        insertPost({ id, title: values.title, description: values.description })
      )
        .unwrap()
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          alert(error);
        });
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={formik.title}
          onChange={formik.handleChange}
        />
      </FormGroup>

      <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="description"
          value={formik.description}
          onChange={formik.handleChange}
        />
      </FormGroup>

      <Loading loading={loading} error={error}>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Loading>
    </Form>
  );
};

export default WithGuard(AddPost);
