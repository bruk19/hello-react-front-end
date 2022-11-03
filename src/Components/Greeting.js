import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/greeting";
const Greeting = () => {
  const greetingList = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  });

  return (
    <div className="App">
      <div>message</div>
      <p>{greetingList.message}</p>
    </div>
  );
};

export default Greeting;