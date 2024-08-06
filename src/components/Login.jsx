import React, { useState } from 'react';
import axios from "axios";
import { API_END_POINT } from '../utils/constant';
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from '../redux/userSlice';

const Login = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector(store => store.app.isLoading);

    const loginHandler = () => {
        setIsLogin(!isLogin);
    };

    const getInputData = async (e) => {
        e.preventDefault();
        dispatch(setLoading(true));
        try {
            const user = isLogin ? { email, password } : { fullName, email, password };
            const endpoint = isLogin ? `${API_END_POINT}/login` : `${API_END_POINT}/register`;
            
            const res = await axios.post(endpoint, user, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
            });

            if (res.data.success) {
                toast.success(res.data.message);
                if (isLogin) {
                    dispatch(setUser(res.data.user));
                    navigate("/browse");
                } else {
                    setIsLogin(true);
                }
            } else {
                throw new Error('Unexpected response');
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || 'An error occurred');
            console.log(error);
        } finally {
            dispatch(setLoading(false));
        }

        setFullName("");
        setEmail("");
        setPassword("");
    };

    return (
        <div>
            <form onSubmit={getInputData} className='form'>
                <h1>{isLogin ? "Login" : "Signup"}</h1>
                {!isLogin && <input value={fullName} onChange={(e) => setFullName(e.target.value)} type='text' placeholder='Fullname' />}
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
                <button type='submit'>{isLoading ? "loading..." : (isLogin ? "Login" : "Signup")}</button>
                <p onClick={loginHandler}>{isLogin ? "Signup" : "Login"}</p>
            </form>
        </div>
    );
};

export default Login;

