import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom'
import {BoilerPlate} from "@components/BoilerPlate";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navigate to={'/'} />}>
      <Route index element={<BoilerPlate />} />
    </Route>
  )
)