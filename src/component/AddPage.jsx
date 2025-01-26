import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { insertPost } from "../ilb/postSlice";
import { useNavigate } from "react-router-dom";
const AddPage = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let schema = Yup.object().shape({
    name: Yup.string()
      .required("Should enter title !")
      .min(3, "more then 3 letters (ex : say)"),
    description: Yup.string()
      .required("Should enter desc !")
      .min(5, "more then 5 letters (ex : it's good)"),
  });
  const addPostFunc = (values) => {
    let id = Math.floor(Math.random() * 500);
    let allValue = { ...values, id: id };
    dispatch(insertPost(allValue))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let formik = useFormik({
    initialValues: {
      name: "",
      description: "",
    },
    onSubmit: addPostFunc,
    validationSchema: schema,
  });
  return (
    <section>
      <div className="container">
        <form className="md:w-1/2 mx-auto mt-10" onSubmit={formik.handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="name"
              type="text"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-[18px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {formik.errors.name && formik.touched.name && (
              <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50">
                {formik.errors.name}
              </div>
            )}
          </div>

          <div className="mb-5">
            <label
              htmlFor="desc"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description{" "}
            </label>
            <input
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="description"
              type="text"
              id="desc"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-[18px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {formik.errors.description && formik.touched.description && (
              <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50">
                {formik.errors.description}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="text-white bg-green-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Login{" "}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddPage;
