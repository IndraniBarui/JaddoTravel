import React, { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "true");
    setShowBanner(false);
  };
 const handleClose = () => {
    setShowBanner(false);
  };
  return (
    showBanner && (
      <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex flex-col md:flex-row items-center justify-between z-50 shadow-lg">
        <p className="text-sm md:text-base mb-2 md:mb-0">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
        </p>
         <div className="flex items-center gap-6">
        <button
          onClick={handleAccept}
          className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm font-semibold"
        >
          Accept
        </button>
        <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white text-xl font-bold"
          >
            ×
          </button>
          </div>
      </div>
    )
  );
}
