"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: Error;
};

function Error({ error }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div>
      <h1>Opps!</h1>
      <h2>Something went wrong!</h2>
    </div>
  );
}

export default Error;
