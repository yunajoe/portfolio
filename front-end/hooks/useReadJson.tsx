import { useState } from "react";

function useReadJson(filename: string) {
  const [fileName, setFileName] = useState(filename);
  
  return <div></div>;
}

export default useReadJson;
