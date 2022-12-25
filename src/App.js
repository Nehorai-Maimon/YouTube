import { createContext, useState } from "react";
import Layout from "./Components/Layout";

export const searchContext = createContext("default")

function App() {
  const [input, setInput] = useState("hello")
  const [videoUrl, setVideoUrl] = useState()

  return (
    <searchContext.Provider value={{ input, setInput, videoUrl, setVideoUrl }}>
      <Layout />
    </searchContext.Provider>
  );
}

export default App;