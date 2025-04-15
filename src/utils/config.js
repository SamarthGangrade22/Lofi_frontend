//export const backendUrl ="https://lofi-backend-xaxm.onrender.com";
// src/config.js
console.log("ENV BACKEND:", process.env.REACT_APP_BACKEND_URL);
export const backendUrl = process.env.REACT_APP_BACKEND_URL;
