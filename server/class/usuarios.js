class Usuarios{

    constructor() {
        this.personas = [];
    }

    agregarPersona( id, nombre, sala ){
        let persona = {id,nombre,sala};
        this.personas.push(persona);
        return this.personas;
    }

    getPersona( id ){
        let persona = this.personas.filter( pers => {
            return pers.id === id;//CON ESTA CONDICION DIGO QUE REGRESE EN LA VARIABLE persona LOS VALORES DONDE EL OBJETO ID SEA IGUAL A LA CONDICIOPN
        })[0];//NOTA: EL [0] ME AYUDA A VALIDAR QUE SOLO ME REGRESE SOLO UN REGISTRO Y NO VARIOS

        return persona;
    }

    getPersonas(){
        return this.personas;
    }

    getPersonasPorSala( sala ){
        let personasEnSala = this.personas.filter( persona => {
            return persona.sala === sala;
        });

        return personasEnSala;
    }

    borrarPersona( id ){
        let personaBorrada = this.getPersona(id);
        this.personas = this.personas.filter( pers =>{
            return pers.id != id;//CON ESTO DIGO QUE REGRESO EN LA VARIABLE this.personas TODOS LOS OBJETOS QUE SU ID SEA DIFERENTE A LA VARIABLE ID QUE RECIBO
        })

        return personaBorrada;
    }

}

module.exports = {
    Usuarios
}