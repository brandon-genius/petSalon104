//console.log("Script")

// objects//
const student= {
    firstName: "Brandon",
    lastName: "Britt",
    age: 25,
    email: "brandon@gmail.com",
    isActive:true,
    fullName:function(){
        return this.firstName+ "  " + this.lastName;
    }
};
//console.log(student.fullName());

function displayStudent(){
    //display student's info on HTML
    document.getElementById("fname").innerHTML=`<p><b>First Name: </b>${student.firstName} </P>`;
    document.getElementById("lname").innerHTML=`<p><b>Last Name: </b>${student.lastName} </P>`;
    document.getElementById("age").innerHTML=`<p><b>Age: </b>${student.age} </P>`;
    document.getElementById("email").innerHTML=`<p><b>Email: </b>${student.email} </P>`;
    document.getElementById("active").innerHTML=`<p><b>Is Student active?: </b>${student.isActive} </P>`;
};
displayStudent();

//object constructor

function studentC(fName,lName,age,email,isActive){
    this.userFn=fName;
    this.userLn=lName;
    this.userAge=age;
    this.userEmail=email;
    this.isActive=isActive;
}

let student1 = new studentC("Vicky","warren",39,"vick@gmail.com",true);
let student2 = new studentC("Brandon","Britt",30,"BB@gmail.com",true);

function displayStudents(user){
    return `Name: ${user.userFn} \n Email: ${user.userEmail}`;
}

console.log(displayStudents(student2));


