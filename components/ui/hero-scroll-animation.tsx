'use client';

import { useScroll, useTransform, motion, MotionValue } from 'motion/react';
import React, { useRef, forwardRef } from 'react';
import { Star } from 'lucide-react';

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

const reviews = [
  {
    text: 'Excellent service! Got my UK student visa approved in record time. The team handled every document perfectly.',
    name: 'Rahul Mehta',
    designation: 'Business Traveler',
  },
  {
    text: 'Very professional and smooth process from start to finish. My Australia study permit was approved on the first attempt.',
    name: 'Priya Sharma',
    designation: 'Student',
  },
  {
    text: 'Highly recommend to anyone applying for international visas. They made the whole process stress-free and transparent.',
    name: 'Amit Patel',
    designation: 'Tourist',
  },
  {
    text: 'The team guided us at every step. Truly reliable. My IELTS score improved from 5.5 to 7.5 after their coaching.',
    name: 'Sneha Joshi',
    designation: 'Working Professional',
  },
];

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className='sticky font-semibold top-0 h-screen bg-gradient-to-t to-[#dadada] from-[#ebebeb] flex flex-col items-center justify-center text-black'
    >
      <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]' />

      <h1 className='2xl:text-7xl text-6xl px-8 font-semibold text-center tracking-tight leading-[120%]'>
        What Our Clients Say 💬 <br /> Scroll Please 👇
      </h1>
    </motion.section>
  );
};

const Section2: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className='relative h-screen bg-gradient-to-t to-[#1a1919] from-[#06060e] text-white'
    >
      <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]' />

      <article className='container mx-auto relative z-10 h-full flex flex-col justify-center'>
        <h2 className='text-5xl leading-[100%] py-10 font-semibold tracking-tight'>
          Real Stories, <br /> Real Results
        </h2>

        <div className='grid grid-cols-4 gap-4'>
          {reviews.map((review) => (
            <div
              key={review.name}
              className='bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-6 flex flex-col gap-4 hover:bg-white/10 transition-colors duration-300'
            >
              {/* Stars */}
              <div className='flex gap-1'>
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className='w-4 h-4 fill-amber-400 text-amber-400'
                  />
                ))}
              </div>

              {/* Review text */}
              <p className='text-gray-300 text-sm leading-relaxed flex-1'>
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Reviewer */}
              <div className='border-t border-white/10 pt-4'>
                <p className='text-white font-semibold text-sm'>{review.name}</p>
                <p className='text-amber-400 text-xs font-medium mt-0.5'>{review.designation}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </motion.section>
  );
};

const Component = forwardRef<HTMLElement>((props, ref) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <>
      <main ref={container} className='relative h-[200vh] bg-black'>
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
        <footer className='group bg-[#06060e]'>
          <h1 className='text-[16vw] translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear'>
            ui-layout
          </h1>
          <div className='bg-black text-white h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full' />
        </footer>
      </main>
    </>
  );
});

Component.displayName = 'Component';

export default Component;
