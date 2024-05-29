import Search from "./component/search";
import File from "./component/file";
import { useState } from "react";
function App() {
  //state to handle todo array
  let [arr, setArr] = useState([]);
  let [edit, setEdit] = useState(false);
  const [editData, setEditData] = useState({ index: -1, value: null });

  //function which helps to pass props from children to parent (search to app)
  let handleArr = (data) => {
    setArr([...arr, data]);
  };

  //getting value from child element, deleting that value from array and updating array
  let manageDelete = (value) => {
    let filterArr = arr.filter((item) => item != value);
    setArr([...filterArr]);
  };
  let manageEdit = (index, value) => {
    setEditData({ index: index, value: value });
  };
  let passEdit = (value) => {
    console.log("YE VALUE HAI", value);
    setEdit(value);
  };

  let handleUpdate = (index, value) => {
    console.log("ye wala", index, value);
    arr.splice(index, 1, value);
    setArr([...arr]);
    setEditData({ index: -1, value: null });
  };

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
    </div>
  );
}

export default App;
