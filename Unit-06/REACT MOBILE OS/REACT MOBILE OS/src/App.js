import ManufacturersList from "./components/ManufacturersList";
import OperatingSystemList from "./components/OperatingSystemList";
import "./styles.css";

export default function App() {
  const OSList = ["ANdroid", "Blackberry", "iphone", "Windows Phone"];
  const Mfgs = ["Samsung", "HTC", "Micromax", "Apple"];
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>

      <ul>
        <OperatingSystemList OSList={OSList} />
      </ul>
      <h1>Mobile Manufacturers</h1>
      <ul>
        <ManufacturersList Mfgs={Mfgs} />
      </ul>
    </div>
  );
}
