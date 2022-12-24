import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";

const App = () => {
  return (
    <>
      <ChakraProvider>
        <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </ChakraProvider>
    </>
  );
};

export default App;
