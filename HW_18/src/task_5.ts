interface Person{
    firstName: string;
    lastName: string;
}

interface Student extends Person{
    grade: number;
}

const student: Student = {
    firstName: 'John',
    lastName: 'Doe',
    grade: 90,
};

function showStudent(student: Student): void{
    for (const key in student){
        console.log(`${key}: ${student[key as keyof Student]}`);
    }
}

showStudent(student);