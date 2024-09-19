import React from "react";

const students= [
    {
        id: 1,
        name: "Inje",
    },
    {
        id: 2,
        name: "Steve",
    },
    {
        id: 3,
        name: "Bill",
    },
    {
        id: 4,
        name: "jeff",
    },
];

function AttendanceBook(props){
    return (
        <ul>
            {students.map((student)=>{
                <li key={student.id}></li>;
            })}

            {students.map((student,index)=>{
                <li key={`student-id-${student.id}`}>{student.name}</li>;
            })}

            {students.map((student,index)=>{
                <li key={index}>{student.name}</li>;
            })}
        </ul>    
        
    );
}

export default AttendanceBook;    