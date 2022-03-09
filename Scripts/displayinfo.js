//create an object literal for the pet salon
const petSalon={
    name:"Hairy's Clippers",
    address:{
        street:"Doggy Lane",
        number:"1",
        zip:"01453",
        city:"Doggyville",
        State:"Bark"
    },
    workingHours:{
        open:"8:00am",
        close:"6:00pm"
    },
    pets:[//create pets array
        { //first pet
            name:"Hairy",
            age:8,
            gender:"Male",
            type: "Dog",
            service:"grooming",
            breed:"Bichon-Frise",
            ownerName:"Dean",
            contactPhone:"466-6821"
        },
        { //second pet
            name:"Oreo",
            age:4,
            gender:"Female",
            type:"Cat",
            service:"grooming",
            breed:"long-hair",
            ownerName:"Brandon",
            contactPhone:"466-6821"
        },
        { //third pet
            name:"Slither",
            age:2,
            gender:"Female",
            type:"Snake",
            service:"Skin Shaving",
            breed:"Rattle",
            ownerName:"Dean",
            contactPhone:"466-6821"
        }
    ]
}
console.log(petSalon.address.zip);
console.log(petSalon.pets.length);
//display the service in console
console.log(petSalon.pets[0].service);



//display the pet salon info in the footer of html

function displayPetSalonInfo(){
document.getElementById("footer-info").innerHTML=`<p> ${petSalon.name}</p>`;
document.getElementById("footer-info").innerHTML=`<p> ${petSalon.name}</p>`;
};
displayPetSalonInfo();

function displayPetNames(){
    
}