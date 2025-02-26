import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Loading from "./components/Load/Loading";

// pages
const Homepage = React.lazy(() => import ("./pages/Homepage/Homepage"));
const Projectpage = React.lazy(() => import ("./pages/Projectpage/Projectpage"));
const Photospage = React.lazy(() => import ("./pages/Photospage/Photospage"));
const Notfound = React.lazy(() => import ("./pages/Notfoundpage/Notfoundpage"));

function App() {
  return (
    <>
      <body className="dark:bg-zinc-950 antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-20 lg:mb-40">
        <Router>
          <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" Component={Homepage} />
            <Route path="/project" Component={Projectpage} />
            <Route path="/photos" Component={Photospage} />
            <Route path="*" Component={Notfound} />
          </Routes>
          </Suspense>
        </Router>
      </body>
    </>
  );
}


export default App;
