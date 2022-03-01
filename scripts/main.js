function read_display_quote(){

    //console.log("inside the function")
    // get into the right collection
    db.collection("quotes").doc("tuesday")
    .onSnapshot(tuesdayDoc => {
        console.log(tuesdayDoc.data());
        document.getElementById("quote-of-day").innerHTML=tuesdayDoc.data().quotes;
    })
}



read_display_quote();


function insertName(){
    // check if logged in
    firebase.auth().onAuthStateChanged(user =>{
        if (user){
            currentUser = db.collection("users").doc(user.uid);
            currentUser.get().then(userDoc =>{

                var user_Name = userDoc.data().name;
                console.log(user_Name);
                document.getElementById("name-main").innerHTML=user_Name;
                // $("#name-main").text(user_Name);
            })
            console.log(user.uid); // give id who user who logged in
        }

    })

}
insertName();