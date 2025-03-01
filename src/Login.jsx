import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from "./assets/123.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";

const LoginPage =() => {
    const [passwordVisible, setPasswordVisible]= useState(false);
    const togglePasswordVisibility = () =>{
        setPasswordVisible(!passwordVisible);
    };
return (
    <div className="d-flex align-items-center justify-content-center min-vh-100"
    style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize:"cover",
        backgroundPosition:"center",
    }}
    >
     <div
     className="p-5 rounded-3 shadow-lg w-25 d-flex flex-column justify-content-center"
     style={{
        minHeight: "450px",
        minWidth:"400px",
        backgroundColor: "rgb(255, 255, 255, 0.5)",
        backdropFilter: "blur(10px)",
     }}>
        <h3 className="text-center mb-4">Login to your account</h3>
        <form>
            <div className=" mb-3 postion-relative">
                <div className="position-relative">
                    <input
                    type="email"
                    className="form-control rounded-pill p-2 ps-4 pe-5"
                    placeholder="Enter your email"
                    />
                    <span className="position-absolute top-50 end-0 translate-middle-y me-3">
                        <i className="bi bi-envelope"></i>
                    </span>
                </div>
            </div>
            <div className=" mb-3 postion-relative">
                <div className="position-relative">
                    <input
                    type={passwordVisible ? "text": "password"}
                    className="form-control rounded-pill p-2 ps-4 pe-5"
                    placeholder="Enter your password"
                    />
                    <span className="position-absolute top-50 end-0 translate-middle-y me-3"
                        onClick={togglePasswordVisibility}
                        style={{cursor:" pointer"}}
                        >
                            <i className={passwordVisible ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                    </span>
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="rememberMe"/>
                <label className="form-check-label" htmlFor="remeberMe">Remember me</label>
            </div>
            <a href="#" className="text-primary">Forget Password?</a>
            </div>
            <button type="submit" className="btn btn-primary w-100 rounded-pill">
                Login
            </button>
            
        </form>
        <p className="text-center mt-3">Don't have an account? <a href="#" className="text-primary">sign up</a></p>
     </div>
    </div>
);
};

export default LoginPage;