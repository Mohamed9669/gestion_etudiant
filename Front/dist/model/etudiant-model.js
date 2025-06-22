export class NoteModel {
    constructor(id, matiere, note) {
        this.id = id;
        this.matiere = matiere;
        this.note = note;
    }
}
export class ClassModel {
    constructor(id, filiere, niveau) {
        this.id = id;
        this.filiere = filiere;
        this.niveau = niveau;
    }
}
export class EtudiantModel {
    constructor(id, nom, prenom, matricule, classe, notes = []) {
        this.id = id;
        this.nom = nom;
        this.prenom = prenom;
        this.matricule = matricule;
        this.classe = classe;
        this.notes = notes;
    }
}
