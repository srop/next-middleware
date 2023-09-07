// import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:3000';
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// export default axios;
import axios from "axios";


const defaultOptions = {
    baseURL: 'http://localhost:3000',
    // httpsAgent: new https.Agent({
    //     requestCert: true,
    //     rejectUnauthorized: false,
    //     agent: false,
    //     strictSSL: false,
    //   }),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
        "Access-Control-Max-Age":"31536000;includeSubDomains",
        "X-Content-Type-Options":"nosniff"
      },
  };

  // Create instance
  let instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization =  `Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55X2dyb3VwX3V1aWQiOiI2ZDJiYjBiMy1kNjk1LTQ2NzItOGMyMS04MjZjMGY1MDY1MTciLCJndWlkIjoiYmQ0ZTYzNjliMzA1MzVhOTE0OGZjNjc1YWM5MThmMDBiM2Q3OTM3MzEwNWMzMjZkNzViYWY1ZTkyNzllODY1YzZkMzBhZjMxZDllODI4Y2Q3YjdhOWQ1ZWIxY2E1ZDM5MTg0ZDViZjYiLCJpYXQiOjE2OTQwNjY3OTgsInJvbGUiOiJ1c2VyIiwidXVpZCI6IjY2OWEyZjhlLWQ2ODEtNDU2ZC1iMzEyLWFkZWU5Y2FkYzA4ZiJ9.DASXZXoctrQ-0AxjQ2q1lk7K2fNekwBN2TFKGjzaySKIMFz0Ol_QVLEd8Y0SkavFqd8VgIUjDYSfjfwY3pfKPVMt9Jp1LRH3XpkFUls5KfwIsIhX_uUZXoJ057Oqo9dS2s0Ow8oGdVT8cJUJKz1RyUdyueZ0_s5so_mR116radpid7a3Xpra7-bnHwZwq6YShHDTlmVQ1MaRSrf1RsN0kJmtq3g_IGtXUDcAvrhx57OwG5BRqdw5ZoDHdhMtXzeO765AwueDsTv9Bw4Vx6NPAtfPnIt_U639fapwEzBUJ-oK6TiytkVTUiPMRkyS7xflm2nfFvFbM0WOY2p3BQu9Pg`;
    return config;
  });


{/* // Define the custom headers
const customHeaders = {
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Allow-Origin": "*",
  "Content-Security-Policy":
    "default-src 'none'; script-src 'self' 'unsafe-inline'; connect-src * ; img-src 'self'; style-src 'self' 'unsafe-inline' ;base-uri 'self';form-action 'self'; font-src 'self' fonts.gstatic.com",
  "Access-Control-Allow-Methods": "GET, DELETE, POST, PUT",
  "Access-Control-Allow-Headers":
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  "Access-Control-Max-Age": "31536000;includeSubDomains",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "deny",
  "Cache-Control": "no-cache, max-age=0, no-store",
};

// Create an Axios instance with the custom headers
const axiosInstance = axios.create({
  headers: customHeaders,
});

// Use the Axios instance for making requests
axiosInstance
  .get("http://localhost:3000")
  .then((response) => {
    // Handle the response
    console.log(response.data);
  })
  .catch((error) => {
    // Handle errors
    console.error(error);
  }); */}

export default instance;
