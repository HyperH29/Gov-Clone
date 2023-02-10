import './App.css';
import Navbar0 from './components/Navbar';
import Header from './components/Header';
import Search from './components/Search';
import Topics from './components/Topics';
import Footer from './components/Footer';
import {Button, Stack} from "react-bootstrap";
import Features from "./components/Features";
import Activity from "./components/Activity";
function App() {
  return (
    //   This is the main app
    <div className="App">
            <Navbar0/>
            <Header/>
            <Search/>
    {/* Search Sections */}
        <Stack className="p-3 m-5">
            <h2 className={"pb-4 container-md"}>Topics</h2>
            <Topics/>
            <Topics/>
            <Topics/>
        </Stack>
        {/* Activity Section*/}
        <div className={"py-4 container-md row mx-auto justify-content-around border-3 border-dark border-top"}>
        <h2>Government activity</h2>
        <p>Find out what the government is doing and how to get involved</p>
            {/* Activity Cards have been set in a row and columns using bootstrap */}
            <div className={"col-2"}>
                <Activity title={"Lorem Ipsum"} text={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}/>
                <Activity title={"Lorem Ipsum"} text={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}/>
                <Activity title={"Lorem Ipsum"} text={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}/>
            </div>
            <div className={"col-2"}>
                <Activity title={"Lorem Ipsum"} text={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}/>
                <Activity title={"Lorem Ipsum"} text={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}/>
            </div>
            <div className={"col-2"}>
                <Activity title={"Lorem Ipsum"} text={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}/>
                <Activity title={"Lorem Ipsum"} text={"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}/>
            </div>
            <div className={"col-2"}>
                <Features img={"https://img.icons8.com/color/42/null/42.png"}/>
            </div>
        </div>
        {/*Featured Section */}
        <div className={"pb-5  container-md row mx-auto justify-content-around border-3 border-dark border-top  "}>
            <h2 className={"py-5"}>Featured</h2>
            <Features img={"https://img.icons8.com/color/48/null/calculate.png"}/>
            <Features img={"https://img.icons8.com/color/96/null/prescription-pill-bottle.png"}/>
            <Features img={"https://img.icons8.com/color/96/null/property.png"}/>
        </div>
        {/* Footer Section */}
        <div className={"h-50 w-100 p-3 pt-4  bg-light container-md flex-row border-top border-dark boarder-1 "}>
            <Stack gap={3} direction={"horizontal"}>
                <h4 className={"text-black  "}>Was this page helpful?</h4>
                <Button variant="outline-dark">Yes</Button>
            <Button variant="outline-dark">No</Button>
            </Stack>
        </div>
        <Footer/>
    </div>
  );
}
export default App;
