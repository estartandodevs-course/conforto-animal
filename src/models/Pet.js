import User from './User'
export class Pet{
    constructor(name="", imgSrc="", sexo="", breed="", castrated="", dewormed=""){
        this.age = ''
        this.breed= breed
        this.castrated = castrated
        this.description = ''
        this.dewormed = dewormed
        this.imgSrc = imgSrc
        this.name = name
        this.sexo= sexo
        this.isAdopted = false   
        this.location = {lat: "", lng:""}
        this.key = ""
        this.adopter = new User()
        this.donor= new User()
    }
}

export default Pet