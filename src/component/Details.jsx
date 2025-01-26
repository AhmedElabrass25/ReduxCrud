import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanPost, getPost } from "../ilb/postSlice";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const Details = () => {
  let { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  let { post, loading, error } = useSelector((state) => state.posts);
  // console.log(post);
  useEffect(() => {
    dispatch(getPost(id));
  }, [dispatch, id]);
  useEffect(() => {
    return () => {
      dispatch(cleanPost());
    };
  }, [dispatch]);
  return (
    <div>
      {loading && <Loading />}
      {error && <p>{error}</p>}
      {post && (
        <div className="mt-20 pt-12 w-full flex items-center flex-col justify-end">
          <p className="text-black mb-3 text-[25px]">Title : {post.name}</p>
          <p className="text-black mb-3 text-[25px]">
            Description : {post.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default Details;
