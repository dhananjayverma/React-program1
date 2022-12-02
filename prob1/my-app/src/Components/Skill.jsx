// import React from "react";
// export const Skill = ({ items }) => {
//   const item = items.map((elem) => {
//     return React.createElement("li", {}, [elem]);
//   });
//   return (
//     <div className="left">
//       <h3>my skills are :</h3>
//       {item}
//     </div>
//   );
// };


export default function SkillSettt({ skillSet }) {
  return (
    <div className="displayFlex">
      {skillSet.map((item) => (
        <span className="skillItem">
          <img src={item.icon} alt="immg" />
          <span>{item.name}</span>
        </span>
      ))}
    </div>
  );
}
