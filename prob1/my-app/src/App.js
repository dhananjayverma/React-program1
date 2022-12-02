// import "./App.css";
// import Button from "./Components/Button";
// // import Avatar from "./Components/Avatar";
// import Avatar1 from "./Components/Avatar1";

// import { Skills } from "./Components/Skills";
// const usersDetails = [
//   {
//     id: 1,
//     first_name: "Dhananjay",
//   last_name: "Kumar",
//   avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS6tYgK9WlfzTDNdVvNlIVjD7BPbbBzOtHa4IUojGz&s",
//    rounded: true,
//    hideName:true

//   },
//   {
//     id:2,
//     first_name: "Dhananjay",
//     last_name: "Kumar",
//   avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS6tYgK9WlfzTDNdVvNlIVjD7BPbbBzOtHa4IUojGz&s",
//    rounded:false,
//    hideName:false
//   }
// ];

// const avatars = usersDetails.map(({ id, avatar, first_name, rounded,hideName }) => (
//   <Avatar1 
//   key={id} 
//   src={avatar}
//    name={first_name} 
//    rounded={rounded}
//    hideName={hideName}/>
// ));

// export default function App() {
//   const func1 = () => alert("this is new way..");
//   return (
//     <div className="App">
//       <h1>Dhananjay kumar verma</h1>

//       {avatars}
//       <Button text="click here" onClick={func1}></Button>
    
    
//     </div>
//   );
// }

// import React from 'react'
// import {Skill}from "./Components/Skill";

// export default function App() {
//   return (
//     <div>
//       <Skill items={["Dsa","Python","java","c++","c"]}/>
//     </div>
//   )
// }




//  button propert

// import React from 'react'
// import "./App.css";
// import Button from "./Components/Button";
// export default function App() {
//   const fun1=()=>alert("hey dhananjay ...you are Rockstar!")
//   const fun2=()=>console.log("good going yr ...")
//   return (
//     <div>
//     <h1>Dhananjay verma</h1>
//       <Button text="Masai" onClick={fun1}></Button>
//     <Button text="Masai" onClick={fun2}></Button>
//     </div>
//   )
// }




// user profile...........

import Skill from "./Components/Skill";
import Header from "./Components/header";
const app = (props) => {
  const { name, avatar_url, title, skillSet } = props;
  return (
    <div className="mainDiv">
      <div>
        <Header name={name} />
        <h3>{title}</h3>
        <Skill skillSet={skillSet} />
      </div>
      <img src={avatar_url} alt="alt" />
    </div>
  );
};
export default app;