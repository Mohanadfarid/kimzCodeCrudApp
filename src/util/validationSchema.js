
import * as Yup from "yup";
export const postSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, "please insert at leas 2 character!")
      .max(50, "please insert at max 50 character!")
      .required("title is required"),
    description: Yup.string().required("Required"),
  });