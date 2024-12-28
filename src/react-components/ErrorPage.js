import React from "react";
import "E:/React Project/youtube-clone/src/App.css"; // Add custom animations and gradients as needed

const ErrorPage = () => {
  return (
    <div className="relative h-screen bg-black">
      <div
        className="absolute inset-0 pointer-events-none opacity-20 bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://media.giphy.com/media/3o7qE2KFaCY1xVIqu4/giphy.gif')",
        }}
      ></div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-black/30 to-transparent bg-[length:auto_4px]"></div>
      <div className="absolute inset-0 pointer-events-none animate-scan-line bg-gradient-to-b from-transparent via-green-900/50 to-transparent bg-[length:100%_100vh]"></div>

      <div className="relative mx-auto max-w-screen-md px-4 py-16 text-green-500">
        <div className="uppercase text-center">
          <h1 className="text-6xl font-bold">
            Error <span className="text-white">404</span>
          </h1>
          <p className="output mt-4">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <p className="output mt-2">
            Please try to{" "}
            <a href="#1" className="text-white">
              go back
            </a>{" "}
            or{" "}
            <a href="#2" className="text-white">
              return to the homepage
            </a>
            .
          </p>
          <p className="output mt-2">Good luck.</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
