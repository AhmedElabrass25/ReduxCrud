import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import AddPage from "./component/AddPage";
import Edit from "./component/Edit";
import NotFound from "./component/NotFound";
import Details from "./component/Details";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
