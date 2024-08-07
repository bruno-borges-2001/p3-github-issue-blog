import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import { GithubProvider } from "./contexts/GithubContext";

export default function App() {
  return (
    <GithubProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </GithubProvider>
  )
}