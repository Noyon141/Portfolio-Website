"use client";

import { useEffect, useRef, useState } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

interface LocomotiveProviderProps {
  children?: React.ReactNode;
}
const LocomotiveProvider: React.FC<LocomotiveProviderProps> = ({
  children,
}) => {
  const containerRef = useRef(null);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        lerp: 0.1,
        multiplier: 1.5,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <div data-scroll-container ref={containerRef}>
        {children}
      </div>
    </LocomotiveScrollProvider>
  );
};

export default LocomotiveProvider;
