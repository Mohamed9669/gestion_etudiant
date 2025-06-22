import { EtudiantModel } from "../model/etudiant-model.js";

export class EtudiantService{
    private readonly apiUrl : string = 'http://localhost:3000/etudiants';
    constructor() {
        // Initialisation avec des données fictives
    }

    public async getEtudiants(): Promise<EtudiantModel[]> {
        const response = await fetch(this.apiUrl);
        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des étudiants');
        }
        return response.json();
    }
    public async getEtudiantById(id: number): Promise<EtudiantModel> {
        const response = await fetch(`${this.apiUrl}/${id}`);
        if (!response.ok) {
            throw new Error(`Erreur lors de la récupération de l'étudiant avec l'ID ${id}`);
        }
        return response.json();
    }
    public async addEtudiant(etudiant: EtudiantModel): Promise<EtudiantModel> {
        const response = await fetch(this.apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(etudiant)
        });
        if (!response.ok) {
            throw new Error('Erreur lors de l\'ajout de l\'étudiant');
        }
        return response.json();
    }
    public async updateEtudiant(id: number, etudiant: EtudiantModel): Promise<EtudiantModel> {
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(etudiant)
        });
        if (!response.ok) {
            throw new Error(`Erreur lors de la mise à jour de l'étudiant avec l'ID ${id}`);
        }
        return response.json();
    }

}