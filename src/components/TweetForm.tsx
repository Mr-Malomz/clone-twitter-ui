'use client';
import { useState } from 'react';

export const TweetForm = () => {
	const [tweet, setTweet] = useState<string>('');

	return (
		<form className=''>
			<textarea
				name='tweet'
				cols={30}
				rows={2}
				className='w-full border rounded-lg mb-2 p-4'
				placeholder='What is happening'
				value={tweet}
				onChange={(e) => setTweet(e.target.value)}
			/>
			<div className='flex justify-end'>
				<button className='py-1 px-4 rounded-lg text-white bg-zinc-800 hover:bg-zinc-900'>
					Post
				</button>
			</div>
		</form>
	);
};
