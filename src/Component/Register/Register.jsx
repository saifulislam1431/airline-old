import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import { FaEye, FaEyeSlash} from "react-icons/fa";
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import logo from "../../assets/airplane.png";
import { userContext } from '../../Auth/Auth';


const Register = () => {
    const[type , setType] = useState("password");
    const [IsShow , setIsShow] = useState(false);
    const[error, setError] = useState("")
    const {signUp} = useContext(userContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || '/'; 



    const handleShow =()=>{
        setType("text")
    }

    const handleHide =()=>{
        setType("password")
    }

    const handleRegistration = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.userName.value;
        const confirmPassword = form.confirmPassword.value;
        const password = form.password.value;
        const photo = form.photoUrl.value;
const newUser = {
    email,
    name,
    photo
}
        if(password !== confirmPassword){
            return setError("Password didn't match")
        }
        else if(password.length < 6){
            return setError("Your password should be minimum six in length")
        }

        signUp(email , password)
        .then(res=>{
            const loggedUser = res.user;
            navigate(from , {replace : true});
                setError("")
                form.reset();
                updateProfile(loggedUser , {
                    displayName: name , photoURL: photo
                })
                .then(()=>{
                    fetch("http://localhost:5000/users",{
                        method:"POST",
                        headers:{
                            "content-type":"application/json"
                        },
                        body:JSON.stringify(newUser)
                    })
                    .then(res=>res.json())
                    .then(data=>{
                        if(data.insertedId){
                            toast('Registration Successful', {
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light",
                                });
                        }
                    })
                })
                .catch((error)=>console.log(error.message))
console.log(loggedUser);
        })
        .catch((error)=>{
            toast(error.message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        })
    }
    return (
        <section className='flex items-center justify-center my-10 lg:my-20'>
            <div className='flex flex-col'>
            <div className='mt-10 mb-5 text-center'>

<Link to="/" className='inline-flex items-center gap-2'>
    <img src={logo} alt="Logo" className='w-12' /> <p>
        <span className='brandTitle text-2xl text-left font-bold text-neutral'>SkyZen</span> <br /> <span className='font-semibold text-xs'>Journey through the sky</span>
    </p>
</Link>
</div>
                <div className='text-center my-2'>
                    <h2 className='text-2xl font-medium tracking-wide text-secondary brand-title'>Login to your account</h2>
                </div>

                <form className='flex flex-col' onSubmit={handleRegistration}>

                    <label className='text-neutral text-lg mt-2 mb-1'>User Name:</label>
                    <input type="text" placeholder="Enter Name" name="userName" className='py-2 px-4 w-full lg:w-96 rounded-md placeholder:text-xs placeholder:tracking-wide bg-accent bg-opacity-10 focus:bg-opacity-30 outline-none' required />

                    <label className='text-neutral text-lg mt-2 mb-1'>Photo Url:</label>
                    <input type="url" placeholder="Enter Photo Url" name='photoUrl' className='py-2 px-4 w-full lg:w-96 rounded-md placeholder:text-xs placeholder:tracking-wide bg-accent bg-opacity-10 focus:bg-opacity-30 outline-none' />

                    <label className='text-neutral text-lg mt-2 mb-1'>Email:</label>
                    <input type="email" placeholder="Enter email" name='email' className='py-2 px-4 w-full lg:w-96 rounded-md placeholder:text-xs placeholder:tracking-wide bg-accent bg-opacity-10 focus:bg-opacity-30 outline-none' required />

                    <label className='text-neutral text-lg mt-3 mb-1'>Password:</label>
                    <div className='inline-flex items-center'>
                        <input type={type} placeholder="Enter password" name='password' className='py-2 px-4 w-full lg:w-96 rounded-md placeholder:text-xs placeholder:tracking-wide bg-accent bg-opacity-10 focus:bg-opacity-30 outline-none' required />
                        <div className='relative right-8 cursor-pointer' onClick={() => setIsShow(!IsShow)}>
                            {
                                IsShow ? <FaEyeSlash className='h-5 w-5 text-primary' onClick={handleHide} /> : <FaEye className='h-5 w-5 text-primary' onClick={handleShow} />
                            }
                        </div>
                    </div>

                    <label className='text-neutral text-lg mt-3 mb-1'>Confirm Password:</label>
                    <input type="password" placeholder="Re enter password" name='confirmPassword' className='py-2 px-4 w-full lg:w-96 rounded-md placeholder:text-xs placeholder:tracking-wide bg-accent bg-opacity-10 focus:bg-opacity-30 outline-none' required />
                    <p className='font-medium text-red-600 mt-2'>{error}</p>
                    <button className='myBtn my-5 w-full lg:w-96'>Register</button>
                </form>


                <p className='my-3 font-medium'>Already have an account? <Link to="/login" className='cursor-pointer text-secondary underline'>Sign In</Link></p>

            </div>

        </section>
    );
};

export default Register;