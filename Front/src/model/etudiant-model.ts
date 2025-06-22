
export class NoteModel {
    constructor(
        public id: number,
        public matiere: string,
        public note: number
    ) {}  
}
export class ClassModel{
    constructor(
        public id: number,
        public filiere: string,
        public niveau: string,
       
    ) {}
}
export class EtudiantModel {
    constructor(
        public id: number,
        public nom: string,
        public prenom: string,
        public matricule: string,
        public classe: ClassModel,
        public notes : NoteModel[] = []
    ) {}
}
