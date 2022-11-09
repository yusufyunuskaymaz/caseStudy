import Featured from "./components/featured/Featured";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar"
import Video from "./components/video/Video";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Featured/>
      <Video />
    </div>
  );
}
export default App;
