import React, { useEffect } from 'react';
import './login.css';
import useFontAwesome from './useFontAwesome'; // Import the custom hook

const Loginp = () => {
    useFontAwesome(); // Call the hook

    useEffect(() => {
        const container = document.getElementById('container');
        const registerBtn = document.getElementById('register');
        const loginBtn = document.getElementById('login');

        const handleRegisterClick = () => {
            container.classList.add('active');
        };

        const handleLoginClick = () => {
            container.classList.remove('active');
        };

        if (registerBtn && loginBtn) {
            registerBtn.addEventListener('click', handleRegisterClick);
            loginBtn.addEventListener('click', handleLoginClick);
        } else {
            console.error('Elements not found:', { container, registerBtn, loginBtn });
        }

        // Clean up event listeners on component unmount
        return () => {
            if (registerBtn && loginBtn) {
                registerBtn.removeEventListener('click', handleRegisterClick);
                loginBtn.removeEventListener('click', handleLoginClick);
            }
        };
    }, []);

    const handleSignInSubmit = (e) => {
        e.preventDefault();
        window.location.href = 'http://localhost:3001/book'; // Change this to the URL of your React app's home page
    };

    return (
        <div className="container" id="container">
            <div className="form-container sign-up">
                <form>
                    <h1>Admin</h1>
                    <div className="social-icons">
                        <a href="https://www.google.com" target='_blank' rel="noopener noreferrer" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                        <a href="https://www.google.com" target='_blank' rel="noopener noreferrer" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.google.com" target='_blank' rel="noopener noreferrer" className="icon"><i className="fa-brands fa-github"></i></a>
                        <a href="https://www.google.com" target='_blank' rel="noopener noreferrer" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button type="submit">Sign in</button>
                </form>
            </div>
            <div className="form-container sign-in">
                <form onSubmit={handleSignInSubmit}>
                    <h1>Student</h1>
                    <div className="social-icons">
                        <a href="https://www.google.com" target='_blank' rel="noopener noreferrer" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                        <a href="https://www.google.com" target='_blank' rel="noopener noreferrer" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="https://www.google.com" target='_blank' rel="noopener noreferrer" className="icon"><i className="fa-brands fa-github"></i></a>
                        <a href="https://www.google.com" target='_blank' rel="noopener noreferrer" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email password</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="https://www.google.com" target='_blank' rel="noopener noreferrer">Forget Your Password?</a>
                    <button type="submit">Sign In</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Hello, Student</h1>
                        <p>Click here to go to student login</p>
                        <button className="hidden" id="login">Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello, Admin</h1>
                        <p>Click here to go to admin login</p>
                        <button className="hidden" id="register">Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loginp;
