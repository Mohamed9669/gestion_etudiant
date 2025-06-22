import { EtudiantModel } from "../model/etudiant-model.js";

export class TableEtudiantComponent {
    private table: HTMLTableElement;
    private etudiants : EtudiantModel[] ;
    constructor(etudiants: EtudiantModel[] = []) {
        this.etudiants = etudiants;
        this.table = document.createElement("table");
        this.table.className = "table table-bordered align-middle";
        this.render();
    }

    private render(): void {
        this.table.innerHTML = `
       <table class="table table-bordered align-middle">
            <thead>
              <tr>
                <th>Matricule</th>
                <th>NOM</th>
                <th>Filiere</th>
                <th>Niveau</th>
                <th>Classe</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
             
            </tbody>
          </table>
    `;
    this.renderBody();
    }
    private renderBody(): void  {
        const tbody = this.table.querySelector("tbody");
        if (tbody) {
            tbody.innerHTML = ""; // Clear existing rows
            // Here you would typically loop through your data and create rows dynamically
            // For example:
             this.etudiants.forEach(etudiant => {
                 const row = document.createElement("tr");
                 row.innerHTML = `
                     <td>${etudiant.matricule}</td>
                     <td>${etudiant.nom}</td>
                     <td>${etudiant.classe.filiere}</td>
                   <td>${etudiant.classe.niveau}</td>
                     <td>${etudiant.classe.niveau} ${etudiant.classe.filiere}</td>
                     <td><button class="btn btn-outline-secondary action-btn">Voir Notes</button></td>
                 `;
                 tbody.appendChild(row);
             });
        }

    }
    updateData(etudiants: EtudiantModel[]): void {
        this.etudiants = etudiants;
        this.renderBody();
    }
     get element (): HTMLTableElement {
        return this.table;
       }
     
}