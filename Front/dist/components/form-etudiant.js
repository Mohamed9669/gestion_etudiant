import { ClassModel, EtudiantModel } from "../model/etudiant-model.js";
export class FormEtudiantComponent {
    constructor(onSubmit) {
        this.onSubmit = onSubmit;
        this.form = document.createElement("form");
        this.render();
        this.setUpEventListeners();
    }
    setUpEventListeners() {
        this.onSubmitForm();
    }
    onSubmitForm() {
        this.form.addEventListener("submit", (event) => {
            event.preventDefault();
            this.onSubmit(new EtudiantModel(1, "nom", "prenom", "DATA-IA", new ClassModel(1, "filiere", "classe"), []));
            this.alertComponent();
            this.clearForm();
        });
    }
    clearForm() {
        this.form.reset();
    }
    render() {
        this.form.innerHTML = ` 

      <div class="card p-4 form-section">
      <div class="d-flex justify-content-end"><button class="btn btn-outline-info btn-sm">Refresh</button></div>
       <div class="row mb-3 g-3">
          <div class="col">
            <label class="form-label">Nom</label>
            <input type="text" class="form-control" placeholder="Nom" id="nom">
          </div>
          <div class="col">
            <label class="form-label">Prenom</label>
            <input type="text" class="form-control" placeholder="Prenom" id="prenom">
          </div>
          </div>
       
        
        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Filiere</label>
            <select class="form-select" id="filiere">
              <option>DATA-IA</option>
              <option>Genie Logiciel</option>
              <option>Developpement Web Mobile</option>
            </select>
          </div>
          <div class="col">
            <label class="form-label">Niveau</label>
            <select class="form-select" id="niveau">
              <option>L1</option>
              <option>L2</option>
              <option>L3</option>
            </select>
          </div>
        </div>
        <!-- Matières et notes dynamiques -->
        <div id="notes-section">
          <div class="row align-items-end mb-2">
            <div class="col-5">
              <label class="form-label">Matiere</label>
              <select class="form-select">
                <option>PHP</option>
                <option>Java</option>
                <option>Python</option>
              </select>
            </div>
            <div class="col-4">
              <label class="form-label">Note</label>
              <input type="number" class="form-control" value="0">
            </div>
            <div class="col-3 d-flex align-items-end">
              <button class="btn btn-outline-danger w-100">&times;</button>
            </div>
            <div class="form-text">Help text</div>
          </div>
          <div class="row align-items-end mb-2">
            <div class="col-5">
              <select class="form-select">
                <option>PHP</option>
                <option>Java</option>
                <option>Python</option>
              </select>
            </div>
            <div class="col-4">
              <input type="number" class="form-control" value="0">
            </div>
            <div class="col-3 d-flex align-items-end">
              <button class="btn btn-outline-danger w-100">&times;</button>
            </div>
            <div class="form-text">Help text</div>
          </div>
        </div>
        <div class="mb-3">
          <button class="btn btn-outline-success btn-sm" type="button">Add Note</button>
        </div>
        <button  type="submit" class="btn btn-dark w-100">Ajouter un etudiant</button>
      </div>
    `;
    }
    get element() {
        return this.form;
    }
    alertComponent() {
        const containerAlert = document.getElementById("showAlert");
        const alert = document.createElement("div");
        alert.className = "alert alert-warning";
        alert.textContent = "Aucun étudiant trouvé.";
        containerAlert.appendChild(alert);
        setTimeout(() => {
            alert.remove();
        }, 3000);
    }
}
