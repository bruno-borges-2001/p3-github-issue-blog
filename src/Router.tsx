import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts";
import Home from "./pages/Home";
import Post from "./pages/Post";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}