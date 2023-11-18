'use client';
import Link from 'next/link';
import { Button } from './ui/Button';
import { Input } from './ui/Input';

export const AuthForm = () => {
	return (
		<form className='w-full lg:w-1/2 border px-4 py-8 border-zinc-300 rounded-lg bg-white'>
			<h3 className='text-base lg:text-lg font-medium mb-6 text-center'>
				Keel Twitter Clone
			</h3>
			<fieldset className='mb-4'>
				<label htmlFor='email' className='block text-sm mb-1'>
					Email
				</label>
				<Input type='email' name='email' placeholder='input email' />
			</fieldset>
			<fieldset className='mb-4'>
				<label htmlFor='password' className='block text-sm mb-1'>
					Password
				</label>
				<Input
					type='password'
					name='password'
					placeholder='input password'
				/>
			</fieldset>
			<Button title='Sign up' />
			<p className='text-center text-sm text-gray-800 mt-4'>
				Don't have an account?{' '}
				<Link
					href='/signup'
					className='font-medium hover:text-gray-950'
				>
					Sign up
				</Link>
			</p>
		</form>
	);
};
