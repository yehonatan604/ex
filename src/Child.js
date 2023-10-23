import React from "react";
import useApi from "./hooks/useApi";

const Child = () => {
    const { data, setData, getData } = useApi();

    const clear = () => {
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
        </React.Fragment>
    );
}

export default Child;