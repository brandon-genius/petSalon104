//create constructor
function Pet(name,age,gender,type,service,owner,contactPhone){
    this.petName=name;
    this.petAge=age;
    this.petGender=gender;
    this.petType=type;
    this.petService=service;
    this.petOwner=owner;
    this.petContact=contactPhone;
}

//get info from inputs
let inputPetName = document.getElementById("txtpetName").value;
let inputPetAge = document.getElementById("txtpetAge").value;
let inputPetGender = document.getElementById("txtgender").value;
let inputPetType = document.getElementById("txtpetType").value;
let inputPetService = document.getElementById("txtpetService").value;
let inputPetOwner = document.getElementById("txtpetOwner").value;
let inputPetContact = document.getElementById("txtpetNumber").value;

//create some pets





function register(){
    console.log(inputPetName.value,inputPetAge.value,inputPetGender.value,inputPetType.value,inputPetService.value,inputPetOwner.value,inputPetContact.value);
    //create object
    let thePet = new Pet(inputPetName.value,inputPetAge.value,inputPetGender.value,inputPetType.value,inputPetService.value,inputPetOwner.value,inputPetContact.value);
    console.log(thePet);
    //push object
    petSalon.pets.push(thePet);
    //display obj in console

}