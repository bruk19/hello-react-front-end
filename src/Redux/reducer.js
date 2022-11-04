import axios from "axios";

const GET_MESSAGE = "HELLE_RAILS_REACT/redux/GET_DATA";
const InitialState = [];

export const fetchData = () => async (dispatch) => {
  const result = await axios.get("http://127.0.0.1:3005/api/v1/greetings");
  return dispatch({ type: GET_MESSAGE, payload: result.data.greeting });
};

const greetReducer = (state = InitialState, action) => {
  switch (action.type) {
    case GET_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};

export default greetReducer;