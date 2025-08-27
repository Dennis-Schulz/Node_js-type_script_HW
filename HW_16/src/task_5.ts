interface Student {
  name: string;
  grade: number;
}

function printStudentInfo(student: Student): void {
  console.log(`Name: ${student.name}`);
  console.log(`Grade: ${student.grade}`);
}

const student: Student = {
  name: 'John',
  grade: 90,
};

printStudentInfo(student);
