import React, { Suspense } from "react";
 
import PrivatePage from "./routers/component/PrivatePage";
import PublicPage from "./routers/component/PublicPage";
import "./index.css";
import "./view/styles/index.scss";
 
function App() {
  
  return (
      <MainView statusLogin={true} />
  );
}
const MainView = React.memo(({ statusLogin }: { statusLogin: boolean }) => {
  return (
    <>
      {statusLogin ? (
        <Suspense fallback={<></>}>
          <PrivatePage />
        </Suspense>
      ) : (
        <Suspense fallback={<></>}>
          <PublicPage />
        </Suspense>
      )}
    </>
  );
});
export default App;
