import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Signup = () => {
	return (
		<>
			<nav className='flex justify-between items-center max-w-full h-16 bg-slate-950 text-white px-5 '>
				<div className='flex items-center'>
					<img src={Logo} alt='' className='w-10 mx-3' />
					<h1 className='font-semibold'>HackNITR</h1>
				</div>
				<div className='flex justify-center items-center'>
					<Link
						to='/'
						className='bg-slate-950 px-5 py-2 rounded-full font-semibold hover:border-2 hover:border-white'>
						Home
					</Link>
					<Link
						to='/docs'
						className='bg-slate-950 px-5 py-2 rounded-full font-semibold hover:border-2 hover:border-white'>
						Docs
					</Link>
					<Link
						to='/signup'
						className='bg-slate-950 px-5 py-2 rounded-full font-semibold hover:border-2 hover:border-white'>
						Sign Up
					</Link>
					<Link
						to='/login'
						className='bg-slate-950 px-5 py-2 rounded-full font-semibold hover:border-2 hover:border-white'>
						Login
					</Link>
				</div>
			</nav>
			<section className='flex justify-center items-center min-h-screen my-10'>
				<div className='w-3/4 h-screen bg-gray-200/50 shadow-white rounded-3xl flex '>
					<div className='p-10 w-1/2 h-full bg-white rounded-l-3xl text-black flex flex-col items-center justify-center'>
						<img src={Logo} alt='' className='w-20 mb-4 m-auto' />
						<h1 className='text-4xl font-semibold mb-1'>Create Account</h1>
						<h1>And gain access to our service</h1>
						<div className='w-full'>
							<label
								className='block text-gray-700 text-sm font-bold mb-2 text-left'
								htmlFor='email'>
								Email
							</label>
							<input
								type='email'
								id='email'
								placeholder='Email'
								className='mb-4 p-2 border rounded w-full'
							/>
							<label
								className='block text-gray-700 text-sm font-bold mb-2 text-left'
								htmlFor='github'>
								Github
							</label>
							<input
								type='email'
								id='email'
								placeholder='Github Username'
								className='mb-4 p-2 border rounded w-full'
							/>
							<label
								className='block text-gray-700 text-sm font-bold mb-2 text-left'
								htmlFor='password'>
								Enter your Password
							</label>
							<input
								type='password'
								id='password'
								placeholder='Password'
								className='mb-4 p-2 border rounded w-full'
							/>
							<label
								className='block text-gray-700 text-sm font-bold mb-2 text-left'
								htmlFor='password'>
								Re-enter your Password to verify
							</label>
							<input
								type='password'
								id='password'
								placeholder='Password'
								className='mb-4 p-2 border rounded w-full'
							/>
							<button className='bg-black text-white p-2 rounded-3xl w-3/4 font-semibold flex justify-center items-center m-auto'>
								Sign Up
							</button>
						</div>
					</div>
					<div className='bg-black w-1/2 min-h-screen flex flex-col justify-center items-center m-auto relative rounded-r-3xl bg-signup-image bg-cover bg-center'></div>
				</div>
			</section>
		</>
	);
};

export default Signup;
