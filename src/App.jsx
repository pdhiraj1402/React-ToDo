// import React, { useState } from "react";

// const Form = () => {
//   // Single state object to manage all form fields
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: "",
//     password: ""
//   });

//   // Generic change handler for updating form fields
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,  // Spread the previous state
//       [name]: value  // Dynamically update the field based on the name
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Log the form data (in real cases, you can submit it to a backend)
//     alert(JSON.stringify(formData, null, 2));
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//           />
//         </div>
//         <br />
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//             required
//           />
//         </div>
//         <br />
//         <div>
//           <label>Age:</label>
//           <input
//             type="number"
//             name="age"
//             value={formData.age}
//             onChange={handleChange}
//             placeholder="Enter your age"
//           />
//         </div>
//         <br />
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="Enter your password"
//             required
//           />
//         </div>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };

// export default Form;

import "./components/EV.css"
import {Todo} from "./projects/Todo/Todo.jsx";

const App = () =>
{
  return(
    <section>
    <Todo/>
    </section>
  )
}

export default App;
