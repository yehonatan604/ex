import React from "react";
import useApi from "./hooks/useApi";
import Child from "./Child";

const App = () => {
  const { data, setData, getData, login } = useApi();

  const clear = () => {
    if (localStorage.getItem('accessToken')) {
      console.log('logged in!');
    }
    login();
    setData([]);
  }

  return (

    <React.Fragment>
      <>
        <button onClick={clear}>clear</button>
        <button onClick={getData}>get data</button>
        {
          data.map((item, index) => {
            return (
              <div key={index}>
                <hr />
                <p>title: {item.title}</p>
                <p>description: {item.description}</p>
                <p>title: {item.email}</p>
                <hr />
              </div>
            )
          })
        }
      </>
      <Child />
    </React.Fragment>
  );
}

export default App;
