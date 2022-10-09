import logo from './logo.svg';
import './App.css';
import Location from "./location.js"
import data from "./data.js"

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
      <section className = "locations-list">
        {locations}
      </section>
    </div>
  )
}

export default App;
