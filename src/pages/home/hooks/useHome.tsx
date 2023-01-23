import { useState } from "react";

export const useHome = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return {
    showSidebar,
    setShowSidebar,
  };
};
