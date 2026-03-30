import React, { Suspense } from "react"

import CustomSpin from './components/CustomSpin'
import "./App.css";

const AppRoutes = React.lazy(() => import('./pages/index'))

function App() {
  return (
    <Suspense fallback={<CustomSpin />}>
      <AppRoutes/>
    </Suspense>
  );
}

export default App;
