import routes from "@/routes";
import { Navbar } from "@/widgets/layout";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";


function App() {
  const { pathname } = useLocation();

  return (
    <>
      {!(pathname == '/sign-in' || pathname == '/sign-up') && (
        <div className="fixed container left-2/4 z-10 mx-0 -translate-x-2/4 p-4 my-5">
          <Navbar routes={routes} />
        </div>
      )
      }
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="#" replace />} />
      </Routes>
    </>
  );
}

export default App;
