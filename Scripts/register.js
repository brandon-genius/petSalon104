//create constructor
let x=0;
function Pet(name,age,gender,type,service,owner,contactPhone){
    this.petName=name;
    this.petAge=age;
    this.petGender=gender;
    this.petType=type;
    this.petService=service;
    this.petOwner=owner;
    this.petContact=contactPhone;
    this.id=x++;
}

//get info from inputs
let inputPetName = document.getElementById("txtpetName").value;
let inputPetAge = document.getElementById("txtpetAge").value;
let inputPetGender = document.getElementById("txtgender").value;
let inputPetType = document.getElementById("txtpetType").value;
let inputPetService = document.getElementById("txtpetService").value;
let inputPetOwner = document.getElementById("txtpetOwner").value;
let inputPetContact = document.getElementById("txtpetNumber").value;

function isValid(aPet){
    //returnfalse when pet is not valid
    //return true if pet is valid
    let valid=true
    if(aPet.petName.length==0){
        valid=false;
        console.log("Invalid Name")
    }
    if(aPet.petAge.length==0){
        valid=false;
        console.log("Invalid Age")
    }
    if(aPet.petService.length=0){
        valid=false
        console.log("Invalid Service")
    }

    return valid;
}




function register(){
    console.log(inputPetName.value,inputPetAge.value,inputPetGender.value,inputPetType.value,inputPetService.value,inputPetOwner.value,inputPetContact.value);
    //create object
    let thePet = new Pet(inputPetName.value,inputPetAge.value,inputPetGender.value,inputPetType.value,inputPetService.value,inputPetOwner.value,inputPetContact.value);
    console.log(thePet);

    if(isValid(thePet)){
        //push object
        petSalon.pets.push(thePet);
        displayPetsTable();
    }
}


function displayPetsTable(){
    let row="";
    for(let i=0;i<petSalon.pets.length;i++){
        row+=`
            <tr id="${petSalon.pets[i].id}">
            <td>${petSalon.pets[i].petName}</td>
            <td>${petSalon.pets[i].petAge}</td>
            <td>${petSalon.pets[i].petGender}</td>
            <td>${petSalon.pets[i].petType}</td>
            <td>${petSalon.pets[i].petService}</td>
            <td>${petSalon.pets[i].petOwner}</td>
            <td>${petSalon.pets[i].petContact}</td>
            <td> <button onclick="deletePet(${petSalon.pets[i].id});">Delete</button></td>
            </tr> `;
    }
    document.getElementById("petTable").innerHTML=row;
}

function deletePet(petId){
    console.log("Delete pet", petId);
    //travel array to search petId
    for( i=0; i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        if(pet.id==petId){
            deleteIndex=i;
            console.log("I found the pet", deleteIndex);
        }
    }
    petSalon.pets.splice(deleteIndex,1);
    document.getElementById(petId).remove();
}
function searchPet(){
    let searchString=document.getElementById("txtSearch").value;
    console.log(searchString);
    for( i=0; i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        if(pet.petName.toLowerCase()==searchString.toLowerCase() || 
        pet.petGender.toLowerCase()==searchString.toLowerCase() ||
        pet.petType.toLowerCase()==searchString.toLowerCase() ||
        pet.petService.toLowerCase()==searchString.toLowerCase()||
        pet.petOwner.toLowerCase()==searchString.toLowerCase()){
            console.log("I Found the Pet");
            document.getElementById(pet.id).classList.add('bg-color');
        }
        else{
            document.getElementById(pet.id).classList.remove('bg-color');
        }
    }
}

function init(){
    //create some pets
    let hairy = new Pet("Hairy", 5,"male","dog","haircut","Dean",12345);
    let Oreo = new Pet("Oreo", 5,"female","cat","nail clipping","Brandon",4666821);
    petSalon.pets.push(hairy,Oreo);
    displayPetsTable();
}

window.onload=init;