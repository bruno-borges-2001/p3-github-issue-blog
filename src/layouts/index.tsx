import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="max-w-[56rem] mx-auto px-4 w-full -mt-[5.5rem]">
        <Outlet />
      </main>
    </>
  )
}