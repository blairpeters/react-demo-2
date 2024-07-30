import React from "react";

const StudentDetails = (props) => {
  return (
    <div>
      <div className="App">
        <li key={props.student.id}>
          Your fullname is:{props.student.firstName} {props.student.lastName}
        </li>
      </div>
    </div>
  );
};

export default StudentDetails;
