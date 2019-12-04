import firebase from './firebase.js'


export const Authenticated = ()=>{firebase.auth().onAuthStateChanged((user)=> {    
    return user ? user : null
    })
}

export const GetStorageUser = ()=>{
    const user = {
        name : localStorage.getItem("displayName"),
        photoURL: localStorage.getItem("photoURL"),
        email: localStorage.getItem("email")
    }
    if(localStorage.getItem("email"))
    return user 
}

export const LoginFacebook = ()=>{
    let provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) =>{
        localStorage.setItem("displayName", result.user.displayName)
        localStorage.setItem("photoURL", result.user.photoURL +'?type=square&width=120&height=120')
        localStorage.setItem("email", result.user.email)
        document.location.reload(true);       
        return true
      })
      .catch(function(error) {
        console.log(error)        
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
        localStorage.removeItem("email")
        document.location.reload(true);       
    }).catch(function(error) {
        console.log(error)
    });
}

export const LoginGoogle = ()=>{
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) =>{
          console.log(result);          
        localStorage.setItem("displayName", result.user.displayName)
        localStorage.setItem("photoURL", result.user.photoURL)
        localStorage.setItem("email", result.user.email)
        document.location.reload(true);       
        return true
      })
      .catch(function(error) {
        console.log(error)        
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

export const LogOutGoogle =()=>{
    firebase.auth().signOut().then(function(result) {
        localStorage.removeItem("displayName")
        localStorage.removeItem("photoURL")
        localStorage.removeItem("email")
        document.location.reload(true);       
    }).catch(function(error) {
        console.log(error)
    });
}