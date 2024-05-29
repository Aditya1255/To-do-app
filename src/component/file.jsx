export default function File(props) {
  let handleDelete = (value) => {
    props.manageDelete(value);
  };
  let handleEdit = (index, value) => {
    props.manageEdit(index, value);
    props.passEdit(true);
  };

  return (
    <>
      <ul className="list-group mt-5">
        <div>
          {props.todo.length > 0 ? (
            props.todo.map((value, index) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={index}
              >
                {value}
                <div className="d-flex justify-content-center align-items-center">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      handleEdit(index, value);
                    }}
                    disabled={props.editData.index == -1 ? false : true}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => {
                      handleDelete(value);
                    }}
                    disabled={props.editData.index == -1 ? false : true}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li className="list-group-item">No Todo</li>
          )}
        </div>
      </ul>
    </>
  );
}
