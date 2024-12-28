import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Header from "./react-components/Header";
import MainContainer from "./react-components/MainContainer";
import Body from "./react-components/Body";
import WatchVideo from "./react-components/WatchVideo";
import ErrorPage from "./react-components/ErrorPage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/watch",
        element: <WatchVideo />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="App flex flex-col h-screen">
      <Header />
      <RouterProvider router={AppRouter} /> {/* <MainContainer /> */}
    </div>
  );
}

export default App;
