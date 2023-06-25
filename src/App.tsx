import "./App.css";
import AppFrom from "./components/AppFrom";
import AppMentor from "./components/AppMentor";
import AppMentors from "./components/AppMentors";
import AppTheme from "./components/AppTheme";
import AppWrap from "./components/AppWrap";
// import AppXY from "./components/AppXY";

export default function App() {
  return (
    <>
      <AppTheme />
      <hr />
      <AppWrap />
      {/* <AppXY /> */}
      <AppMentor />
      <hr />
      <AppMentors />
      <hr />
      <AppFrom />
    </>
  );
}
