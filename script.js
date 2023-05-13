/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map((student)=>{
    if(student.marks>50){
      console.log(student);
    }
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach((student)=>{
    if(student.marks>50){
      console.log(student);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  let student={id:4,name:"susan",age:"20",marks:45};
  arr.push(student);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr.map((student)=>{
    if(student.marks<50){
      arr.pop(student);
    }
  });
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr1 = [
    { id: 4, name: "sam", age: "20", marks: 75 },
    { id: 5, name: "ram", age: "21", marks: 45 },
    { id: 6, name: "dan", age: "22", marks: 49 },
  ];

  arr=arr.concat(arr1);
  console.log(arr);
}
