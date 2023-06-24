import "./App.css";
import AppFrom from "./components/AppFrom";
import AppMentor from "./components/AppMentor";
import AppMentors from "./components/AppMentors";
// import AppXY from "./components/AppXY";

function App() {
  return (
    <>
      {/* <AppXY /> */}
      <AppMentor />
      <hr />
      <AppMentors />
      <hr />
      <AppFrom />
    </>
  );
}

export default App;
