// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  // const element=React.createElement('h1',{classNameName'hh'},'Good Morning');
  const element = <h1 className="gr">Hello World</h1>;
  console.log(element);

  return (
    <>
      <Navbar />
      {/* <Navbar title="TextUtils"/> */}
      <div className="container my-3">
        <TextForm heading="Enter your Text here"/>
   

      </div>
    </>
  );
}

export default App;
