// it is a behaviour of javascript where it moves the declaration of variable, functions, and classes to the top of their scope during the compilation phase
// and before the code is executed

class Student{
    constructor(name,age)
    {
        this.age=age
        this.name=name
    }
    show(){
        console.log(`Name:${this.name},Age:${this.age}`);
        
    }
}
const stud1=new Student("Agrima",20);
stud1.show()//Agrima 20


const student={
    Name:"Agrima",
    Age:20,
    ID:1234,
    Department:"CSE"
}
