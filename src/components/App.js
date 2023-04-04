// import React, { useState } from "react";
// import "../styles/App.css";

// export default function App() {
//     return (
//         <div className="App">
//             <h1>Newton School</h1>
//             <div>
//                 <form>
//                     <label>UserName</label>
//                     <input></input>
//                     <label>Password</label>
//                     <input></input>
//                     <button>Login</button>
//                 </form>
//             </div>
//             <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
//             <input type="checkbox" id="switch" />
//             <label for="switch" className="label">
//                 Toggle
//             </label>
//         </div>
//     );
// }

import React, { useState } from "react";
import "../styles/App.css";

export default function App() {
  const [theme, setTheme] = useState("light"); // Initialize state for theme

  // Function to toggle theme
  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Add "light" or "dark" id to the "App" div based on the theme state
  

  return (
    <div className="App" id={theme === "light" ? "light" : "dark"}>

      <h1>Newton School</h1>
      <div>
        <form>
          <label>UserName</label>
          <input></input>
          <label>Password</label>
          <input></input>
          <button>Login</button>
        </form>
      </div>
      <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
      <input type="checkbox" id="switch" onChange={handleThemeToggle} />
      <label htmlFor="switch" className="label">
        Toggle
      </label>
    </div>
  );
}
