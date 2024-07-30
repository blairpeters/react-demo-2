import React from "react";
import StudentDetails from "./StudentDetails";

function Example(students) {
  console.log(students);
  //   const DisplayStudents = students.map((student) => (
  //     <StudentDetails key={student.id} student={student} />
  //   ));
  return (
    <div>
      {students.students.map((student) => (
        <StudentDetails key={student.id} student={student} />
      ))}
      ;
    </div>
  );
}

export default Example;
