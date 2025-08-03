'use client'
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export default function LazyLoadOnScroll({ children }: Props) {

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (inView) {
      setShow(true);
    }
  }, [inView]);

  return <div ref={ref}>{show ? children : null}</div>;
}
