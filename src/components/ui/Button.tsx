import { FC } from 'react';
import { useFormStatus } from 'react-dom';

type IButton = {
    title: string
}

export const Button:FC<IButton> = ({title}) => {
	const { pending } = useFormStatus();
	return (
		<button
			disabled={pending}
			className='py-1 px-4 w-full h-10 rounded-lg text-white bg-zinc-800 hover:bg-zinc-900'
		>
			{pending ? 'Please wait...' : title}
		</button>
	);
};
