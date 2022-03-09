console.log("Script")

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
console.log(student.fullName());

function displayStudent(){
    //display student's info on HTML
    document.getElementById("fname").innerHTML=`<p><b>First Name: </b>${student.firstName} </P>`;
    document.getElementById("lname").innerHTML=`<p><b>Last Name: </b>${student.lastName} </P>`;
    document.getElementById("age").innerHTML=`<p><b>Age: </b>${student.age} </P>`;
    document.getElementById("email").innerHTML=`<p><b>Email: </b>${student.email} </P>`;
    document.getElementById("active").innerHTML=`<p><b>Is Student active?: </b>${student.isActive} </P>`;
};
displayStudent();