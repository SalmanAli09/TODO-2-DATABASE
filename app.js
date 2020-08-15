alert('YOU CAN CHECK YOUR SAVED DATA IN THE FOLLOWING LINK')

function savedata(){

    var name = document.getElementById("name");

    
    var key = firebase.database().ref('student').push().key
    var student = {
    
        name: name.value
        
    
    }
    
    firebase.database().ref('student/' + key).set(student)
}

function deldata(){
    firebase.database().ref('student').remove()
}
