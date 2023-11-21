import React, { useEffect } from "react";
import PostList from "../components/PostList";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../state/postSlice";

const Index = () => {
  const {recordes,loading,error} = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch]);

  return (
    <div>
      <PostList data={recordes} loading = {loading} error = {error}/>
    </div>
  );
};

export default Index;
