import logo from './logo.svg';
import './App.css';
import Location from "./components/location.js"
import data from "./data.js"
import Navbar from "./components/navbar.js"

function App() {
  const locations = data.map(item => {
    return (
      <Location 
          key = {item.title}
          {...item}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <section className = "locations-list">
        {locations}
      </section>
    </div>
  )
}

export default App;
