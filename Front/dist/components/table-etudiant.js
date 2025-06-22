export class TableEtudiantComponent {
    constructor(etudiants = []) {
        this.etudiants = etudiants;
        this.table = document.createElement("table");
        this.table.className = "table table-bordered align-middle";
        this.render();
    }
    render() {
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
    renderBody() {
        const tbody = this.table.querySelector("tbody");
        if (tbody) {
            tbody.innerHTML = "";
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
    updateData(etudiants) {
        this.etudiants = etudiants;
        this.renderBody();
    }
    get element() {
        return this.table;
    }
}
