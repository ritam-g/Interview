import React, { useEffect } from "react";
import axios from "axios";

const App = () => {
  useEffect(() => {
    const runAuthFlow = async () => {
      try {
        // 🔹 REGISTER
        const registerRes = await axios.post(
          "https://reqres.in/api/register",
          {
            email: "eve.holt@reqres.in",
            password: "pistol",
          }
        );

        console.log("REGISTER RESPONSE:", registerRes.data);

        // 🔹 LOGIN
        const loginRes = await axios.post(
          "https://reqres.in/api/login",
          {
            email: "eve.holt@reqres.in",
            password: "pistol",
          }
        );

        console.log("LOGIN RESPONSE:", loginRes.data);

        // 🔹 SAVE TOKEN
        localStorage.setItem("token", loginRes.data.token);

        console.log("TOKEN SAVED:", loginRes.data.token);
      } catch (err) {
        console.log("ERROR:", err.response?.data || err.message);
      }
    };

    runAuthFlow();
  }, []);

  return <div>Check Console (Register → Login Flow)</div>;
};

export default App;