import axios from 'axios';

axios.get("https://fakestoreapi.com/products").then(function (response) {
  console.log("response", response);
},
  function (error) {
    console.log(error);
  });


// var promise = axios.get("https://fake8storeapi.com/products");
// console.log(promise);