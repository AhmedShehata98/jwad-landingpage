import React from "react";

function LoaderModule() {
  return (
    <div className="fixed z-50 inset-0 bg-main bg-opacity-70 flex items-center justify-center">
      <div className="size-72 max-sm:size-[90%] max-md:size-[60%] max-lg:size-1/2 flex items-center justify-center gap-6 flex-col bg-gray-100 rounded-md py-4 px-8">
        <span className="inline-block loader"></span>
        <p className="text-base text-slate-500 font-medium mt-3">
          يتم الانتهاء من بعض الاشياء
        </p>
        <h5 className="font-semibold capitalize text-xl text-slate-800">
          لحظة واحدة ...
        </h5>
      </div>
    </div>
  );
}

export default LoaderModule;
