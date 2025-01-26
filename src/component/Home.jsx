import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePostFunc, getAllPosts } from "../ilb/postSlice";
import Loading from "./Loading";
import PostRow from "./PostRow";

const Home = () => {
  let { posts, loading, error } = useSelector((state) => state.posts);
  let dispatch = useDispatch();
  // console.log(posts);
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);
  let deletePost = useCallback(
    (id) => dispatch(deletePostFunc(id)),
    [dispatch]
  );
  return (
    <>
      {loading && <Loading />}
      {error && <p>{error}</p>}
      <section className="">
        <div className="container overflow-x-scroll sm:overflow-hidden">
          <table className="w-full text-sm text-gray-500 text-center">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Display Posts */}
              {posts.map((post, index) => {
                return (
                  <PostRow
                    post={post}
                    index={index}
                    key={post.id}
                    deletePost={deletePost}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Home;
