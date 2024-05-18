import "./App.css";
import LeftContent from "./components/leftContent/LeftContent";
import RightContent from "./components/rightContent/RightContent";

function App() {
    return (
        <div className="wrapper">
            <div>
                <LeftContent />
            </div>
            <div>
                <RightContent />
            </div>
        </div>
    );
}

export default App;
