/* eslint-disable react/prop-types */
import { memo } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { deletePostFunc } from "../ilb/postSlice";

const PostRow = ({ post, index, deletePost }) => {
  let dispatch = useDispatch();
  const handleDelete = async (id) => {
    if (window.confirm(`Are you sure you want to delete this post`)) {
      await dispatch(deletePost(id));
    }
  };
  return (
    <>
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td className="px-6 py-4">{index + 1}</td>

        <td className="px-6 py-4">
          <Link to={`details/${post.id}`}>{post.name}</Link>
        </td>

        <td className="px-6 py-4">
          <div className="flex gap-3 flex-wrap items-center justify-center">
            <Link
              to={`edit/${post.id}`}
              className="Btn bg-yellow-600 text-white"
            >
              Edit
            </Link>
            <button
              className="Btn bg-red-600 text-white"
              onClick={() => handleDelete(post.id)}
            >
              Delete
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default memo(PostRow);
