import { useEffect, useState } from "react";

const DeviceAnimationSetting = (minWidth) => {
  const [isLargeScreen, setIsLargeScreen] = useState(
    window.innerWidth >= minWidth
  );

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= minWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [minWidth]);

  return isLargeScreen;
};

export default DeviceAnimationSetting;
