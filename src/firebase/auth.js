import firebase from './firebase.js'

// export const authListener = ()=>{
//     firebase.auth().onAuthStateChanged((user)=> {         
//         if (user) {
//             this.setState({user: user})
//             console.log(this.state.user)

//             console.log("User is signed in.")
//             console.log(this.state.user)
//         }
//         // else{
//         //     localStorage.removeItem("user", user.displayName)
//         // }
//     });   
// }

export const Authenticated= ()=>{firebase.auth().onAuthStateChanged((user)=> {  
    console.log(user)      
    if (user) {
    }
  })}

export const userAuthenticated = ()=>{
    const user = localStorage.getItem("user")
    if(user) {
        return true
    }else{
        return false
    }
}

export const LoginFacebook = ()=>{
    let provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) =>{
        localStorage.setItem("displayName", result.user.displayName)
        localStorage.setItem("photoURL", result.user.photoURL)
        localStorage.setItem("user", result.user)
        console.log(result.user); 
        document.location.reload(true);       
        return true
      })
      .catch(function(error) {
        // // Handle Errors here.
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // // The email of the user's account used.
        // var email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // // ...
    });
}

export const LogOutFacebook =()=>{
    firebase.auth().signOut().then(function(result) {
        localStorage.removeItem("displayName")
        localStorage.removeItem("photoURL")
        localStorage.removeItem("user")
        console.log("logout successful")
    }).catch(function(error) {
        console.log(error)
    });
}