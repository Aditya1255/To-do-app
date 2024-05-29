import { useEffect, useState } from "react";
export default function Search(props) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  //updates inputvalue whenever it changes
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    props.editData.value ? setInputValue(props.editData.value) : "";
  }, [props.editData]);

  //pass input value to parent using callback function.
  let addTodo = () => {
    if (inputValue) {
      if (props.editData.index == -1) {
        props.handle(inputValue);
        setInputValue("");
        setError(false);
      } else {
        props.handleUpdate(props.editData.index, inputValue);
        setInputValue("");
        setError(false);
      }
    } else {
      setError(true);
      setInputValue("");
    }
  };

  return (
    <>
      <div className="mt-5 d-flex">
        <input
          className="form-control"
          type="text"
          placeholder="Enter Todo"
          aria-label="readonly input example"
          value={inputValue}
          onChange={handleInputChange}
          required
        ></input>
        <button type="button" className="btn btn-primary " onClick={addTodo}>
          {props.editData.index == -1 ? "Add" : "Update"}
        </button>
      </div>
      {error && <p className="text-danger mt-2">Please add Todo</p>}
    </>
  );
}
