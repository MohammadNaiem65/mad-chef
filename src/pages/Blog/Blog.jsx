import { motion, useMotionValue, useMotionValueEvent } from 'framer-motion';

const Blog = () => {
	const x = useMotionValue(0);

	useMotionValueEvent(x, 'animationStart', () => {
		console.log('animation started on x');
	});

	useMotionValueEvent(x, 'change', (latest) => {
		console.log('x changed to', latest);
	});

	return (
		<motion.div className='min-h-[calc(100vh-26.95rem)]'>blog</motion.div>
	);
};

export default Blog;
