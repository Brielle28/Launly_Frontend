import axios from "axios";

// export const API_URI = "http://37.27.42.7:9000/api/v1";
export const API_URI = "https://api.laundrex.com.ng/api/v1"


export const bookawash = (book) => axios.post(API_URI + "/bookings/booking", book, {
    headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  });

