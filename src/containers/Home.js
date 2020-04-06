import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const defaultKey = "f1d74149259a4ad1801eb39a639a1dca";

function Home () {

  const[foodData, setFoodData] = useState({});


  useEffect(() => {
    //Make a get request for the weather by city
    axios

    .get(
      `https://api.spoonacular.com/recipes/search`
        )

    .then(function (response) {
    // handle success

    setFoodData(response.data);
    })
  .catch(function (error) {
    // handle error
    console.log(error);
  });

}, []);

export default Home;


}
