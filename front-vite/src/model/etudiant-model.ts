
export interface NoteModel {
   
         id: number;
         matiere: string;
         note: number;
   
}
export interface ClassModel{
    
         id: number;
         filiere: string;
         niveau: string;
         libelle ?: (filiere: string, niveau: string) => string;
}
export interface EtudiantModel {
   
         id: number;
         nom: string;
         prenom: string;
         matricule: string;
         classe: ClassModel;
         notes ?: NoteModel[];
   
}
