import usePostDetails from  "../hooks/use-post-details.js"
import Loading from "../components/Loading.jsx"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cleanRecord } from "../state/postSlice.js";

const PostDetails = () => {
    const {loading,error,record} = usePostDetails()
    const dispatch = useDispatch();
    useEffect(() => {
        return()=>{
          dispatch(cleanRecord())
        }
      }, [dispatch]);

    return (
        <div>
            <Loading loading={loading} error={error}>
            <p>Title : {record?.title}</p>
            <p>Description : {record?.description}</p>
            </Loading>
        </div>
    );
}
 
export default PostDetails;
