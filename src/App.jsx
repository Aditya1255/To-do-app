import React, { useState, useCallback, useEffect } from "react";
import Search from "./component/search";
import File from "./component/file";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  let [arr, setArr] = useState([]);
  let [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState({ index: -1, value: null });

  useEffect(() => {
    console.log("App component rendered");
  }, [arr]);

  let handleArr = (data) => {
    setArr([...arr, data]);
  };

  const manageDelete = useCallback(
    (value) => {
      console.log("manageDelete called with value:", value);
      let filterArr = arr.filter((item) => item !== value);
      setArr(filterArr); // No need to spread the array again
      toast.warning("Todo Deleted Successfully");
    },
    [arr]
  );

  const manageEdit = useCallback((index, value) => {
    console.log("manageEdit called with index and value:", index, value);
    setEditData({ index, value });
  }, []);

  const passEdit = useCallback((value) => {
    console.log("passEdit called with value:", value);
    setEdit(value);
  }, []);

  const handleUpdate = useCallback(
    (index, value) => {
      console.log("handleUpdate called with index and value:", index, value);
      const newArr = [...arr];
      newArr.splice(index, 1, value);
      setArr(newArr);
      setEditData({ index: -1, value: null });
    },
    [arr]
  );

  return (
    <div className="container">
      <Search
        handle={handleArr}
        editData={editData}
        handleUpdate={handleUpdate}
      />
      <File
        todo={arr}
        manageDelete={manageDelete}
        passEdit={passEdit}
        manageEdit={manageEdit}
        editData={editData}
      />
      <ToastContainer />
    </div>
  );
}

export default App;
