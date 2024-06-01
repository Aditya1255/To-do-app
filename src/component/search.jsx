import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Search(props) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    if (props.editData.value) {
      setInputValue(props.editData.value);
    }
  }, [props.editData]);

  let addTodo = () => {
    if (inputValue) {
      if (props.editData.index === -1) {
        props.handle(inputValue);
        setInputValue("");
      } else {
        props.handleUpdate(props.editData.index, inputValue);
        setInputValue("");
      }
    } else {
      toast.error("Please Enter Todo");
    }
  };

  return (
    <>
      <div className="mt-5 d-flex">
        <input
          className="form-control"
          type="text"
          placeholder="Enter Todo"
          value={inputValue}
          onChange={handleInputChange}
          required
        />
        <button type="button" className="btn btn-primary" onClick={addTodo}>
          {props.editData.index === -1 ? "Add" : "Update"}
        </button>
      </div>
      <ToastContainer />
    </>
  );
}
