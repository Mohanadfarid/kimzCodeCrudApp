import React, { useEffect } from "react";
import PostList from "../components/PostList";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../state/postSlice";
import Loading from "../components/Loading";

const Index = () => {
  const { recordes, loading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <Loading loading={loading} error={error}>
        <PostList data={recordes} />
      </Loading>
    </div>
  );
};

export default Index;
