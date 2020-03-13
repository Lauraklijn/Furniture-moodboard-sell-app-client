import axios from "axios";

export const PRODUCT_CREATE_SUCCESS = "PRODUCT_CREATE_SUCCESS";
export const PRODUCT_FETCHED = "PRODUCT_FETCHED";

function productFetched(products) {
  return {
    type: PRODUCT_FETCHED,
    payload: {
      products: products
    }
  };
}

// //Matched endpoint with server api (events/id/tickets), to see only the tickets from that event
// export const loadProducts = () => (dispatch, getState) => {
//   axios
//     .get(`http://localhost:4000/userprofile/:id/products`)
//     .then(function(response) {
//       dispatch(productFetched(response.data));
//     });
// };

///-------------Test with userId

export const loadProducts = userId => (dispatch, getState) => {
  console.log("dispatch action", dispatch);
  axios
    .get(`http://localhost:5050/events/${userId}/products`)
    .then(function(response) {
      dispatch(productFetched(response.data));
    });
};
// Create Product

// function createProductSucces(product) {
//   return {
//     type: PRODUCT_CREATE_SUCCESS,
//     payload: {
//       product
//     }
//   };
// }

// export const createProduct = (
//   title,
//   description,
//   image,
//   price
//   //userId
// ) => async (dispatch, getState) => {
//   //const token = getState().userData.jwt;
//   // console.log("What is token in create ticket??", token);
//   // console.log("checking action ", eventId);

//   const response = await axios({
//     method: "POST",
//     url: "http://localhost:4000/userprofile/:id/products",
//     //headers: { Authorization: `Bearer ${token.token}` },
//     data: {
//       title,
//       description,
//       image,
//       price
//       //userId
//     }
//   });
//   //console.log("check ticket response", response.data);

//   dispatch(createProductSucces(response.data));
// };

export function createProduct(title, image, description, price, userId) {
  return function(dispatch, getState) {
    console.log("WHAT IS NAME ETC?", title, image, description, price, userId);
    return axios
      .post(`http://localhost:4000/userprofile/${userId}/products`, {
        title,
        image,
        description,
        price
      })
      .then(response => {
        console.log("WHAT IS RESPONSE.DATA", response);
        // history.push("/");

        dispatch(productCreated(response.data));
      });
  };
}
function productCreated(payload) {
  return { type: PRODUCT_CREATE_SUCCESS, payload };
}
