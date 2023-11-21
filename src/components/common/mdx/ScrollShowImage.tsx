'use client'
import {motion} from 'framer-motion';
import ZoomImage from './ZoomImage';

export default function ScrollShowImage ({
    ...props
  }: React.ComponentProps<"img">) {
        return <motion.span
        className='relative'
        initial={{opacity:0.1}}
        whileInView={{opacity:1}}
        viewport={{ once: true }}
        transition={{duration:.6, ease: [0.33, 1, 0.68, 1]}}
        >
        <ZoomImage {...props} />
    </motion.span>;
}