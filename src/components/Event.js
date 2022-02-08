import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import { ADD_OPERATION_LOG, DELETE_EVENT } from "../actions";
import { timeCurrentIso8601 } from "../utils";

const Event = ({ event }) => {
  const { dispatch } = useContext(AppContext);

  {
    const id = event.id;
    const handleClickDelete = () => {
      const result = window.confirm(
        `イベント(id=${id})を本当に削除しても良いですか？`
      );
      if (result) {
        dispatch({ type: DELETE_EVENT, id });
        dispatch({
          type: ADD_OPERATION_LOG,
          description: `イベント(id=${id})削除しました)`,
          operatedAt: timeCurrentIso8601(),
        });
      }
    };
    return (
      <tr>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
        <td>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleClickDelete}
          >
            削除
          </button>
        </td>
      </tr>
    );
  }
};
export default Event;
