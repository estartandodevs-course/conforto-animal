import { BehaviorSubject } from "rxjs";
import { firebase } from "../../firebase";

export class PetService {
  Dogs = new BehaviorSubject([]);
  Cats = new BehaviorSubject([]);

  constructor() {
    this.getDogs();
    this.getCats();
  }

  getDogs = () => {
    firebase
      .database()
      .ref("pets/dog")
      .on("value", snapshot => {
        let res = snapshot.val();
        let dogs = Object.keys(res).map(key => res[key] = {...res[key], key, classPet: 'dog'});
        this.Dogs.next(dogs);
      });
  };

  getCats = async () => {
    await firebase
      .database()
      .ref("pets/cat")
      .on("value", snapshot => {
        let res = snapshot.val();
        let cats = Object.keys(res).map(key => res[key] = {...res[key], key, classPet: 'cat'});
        this.Cats.next(cats);
      });
  };

  insertPet(pet, classPet) {
    return firebase
      .database()
      .ref("pets")
      .child(classPet || "dog")
      .push(pet);
  }

  updatePet(pet){
    firebase.database().ref(`pets/${pet.classPet}`).child(pet.key).set(pet)    
  }
}
