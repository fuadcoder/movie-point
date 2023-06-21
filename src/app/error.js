"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.log(error);
    },[error]);
  return (
    <div className="text-center mt-10">
      <h1>Something went wrong</h1>
      <button className="hover:text-purple-500" onClick={() => reset()}>Retry</button>
    </div>
  )
}
