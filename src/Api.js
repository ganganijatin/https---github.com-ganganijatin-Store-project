import React, { useEffect, useState } from "react";
const Api = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    await fetch("https://dummyjson.com/products/")
      .then((response) => response.json())
      .then((data) => {
        setUserList(data.products);
      })
      .catch((err) => console.log(err));
  };
}

export default Api