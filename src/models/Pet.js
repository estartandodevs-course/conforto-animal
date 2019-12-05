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
    }
}

export default Pet