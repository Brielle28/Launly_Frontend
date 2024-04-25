import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URI } from "../Api/Api";
import { VerifyEmailInfoAlert } from "../verifyEmailInfoAlert/VerifyEmailInfoAlert";

const EmailVerification = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [verificationStatus, setVerificationStatus] = useState("pending");
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const extractTokenFromURL = () => {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get("token");
    };

    const verifyToken = (token) => {
      const backendEndpoint = `${API_URI}/login/verify/email`;

      axios
        .post(
          backendEndpoint,
          {},
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          setVerificationStatus("success");
        })
        .catch((error) => {
          console.error("Error:", error);
          console.log(
            error.response.data.detail,
            "this is the error for timeout"
          );
          if (error.response.data.details) {
            setErrorMessage(error.response.data.details);
            setShowError(true);
          } else {
            setShowError(false);
          }
          alert(error.response.data.detail);
          setVerificationStatus("error");
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    const token = extractTokenFromURL();
    if (token) {
      verifyToken(token);
    } else {
      console.error("Token not found in URL");
      setVerificationStatus("error");
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!isLoading && verificationStatus === "success") {
      navigate("/login");
    }
  }, [isLoading, verificationStatus, navigate]);

  return (
    <div>
      {isLoading && <p>Verifying...</p>}
      {!isLoading && verificationStatus === "error" && (
        <div className="w-full h-screen flex items-center justify-center px-[100px] text-center">
          <h1 style={{ fontSize: "40px" }}>
            Verification failed. Please try again or contact support.
          </h1>
        </div>
      )}
      {showError && <VerifyEmailInfoAlert errorMessage={errorMessage} />}{" "}
      {/* Pass errorMessage as a prop */}
    </div>
  );
};

export default EmailVerification;














// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { API_URI } from "../Api/Api";

// const EmailVerification = () => {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(true);
//   const [verificationStatus, setVerificationStatus] = useState("pending");

//   useEffect(() => {
//     const extractTokenFromURL = () => {
//       const urlParams = new URLSearchParams(window.location.search);
//       return urlParams.get("token");
//     };

//     const verifyToken = (token) => {
//       const backendEndpoint = `${API_URI}/login/verify/email`;

//       axios
//         .post(
//           backendEndpoint,
//           {},
//           {
//             headers: {
//               accept: "application/json",
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         )
//         .then((response) => {
//           console.log(response);
//           setVerificationStatus("success");
//           // if (response.status === 200) {
//           //     // Token verification successful
//           // } else {
//           //     // Token verification failed
//           //     setVerificationStatus('error');
//           // }
//         })
//         .catch((error) => {
//           // Error occurred during token verification
//           console.error("Error:", error);
//           setVerificationStatus("error");
//         })
//         .finally(() => {
//           // Set isLoading to false once verification is complete
//           setIsLoading(false);
//         });
//     };

//     const token = extractTokenFromURL();
//     if (token) {
//       verifyToken(token);
//     } else {
//       console.error("Token not found in URL");
//       setVerificationStatus("error");
//       setIsLoading(false); // Set isLoading to false if token is not found
//     }
//   }, []);

//   useEffect(() => {
//     // Navigate to login page if verification is successful
//     if (!isLoading && verificationStatus === "success") {
//       navigate("/login");
//     }
//   }, [isLoading, verificationStatus, navigate]);

//   return (
//     <div>
//       {isLoading && <p>Verifying...</p>}
//       {!isLoading && verificationStatus === "error" && (
//         <div className="w-full h-screen flex items-center justify-center px-[100px] text-center">
//           {/* i pray i dont use you  */}
//           <h1 style={{ fontSize: "40px" }}>
//             Verification failed. Please try again or contact support!!!.
//           </h1>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmailVerification;
