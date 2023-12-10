import React, { useCallback, useEffect } from "react";
import PostList from "../components/PostList";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, fetchPosts } from "../state/postSlice";
import Loading from "../components/Loading";

const Index = () => {
  const { recordes, loading, error } = useSelector((state) => state.posts);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const deleteRecored = useCallback(
    (id) => {
      dispatch(deletePost(id));
    },
    [dispatch]
  );
  return (
    <div>
      <Loading loading={loading} error={error}>
        <PostList data={recordes} deleteRecored={deleteRecored} isLoggedIn={isLoggedIn}/>
      </Loading>
    </div>
  );
};

export default Index;
