import type { BaseComponent } from "../../core/component/base.component";
import type { EtudiantModel } from "../../model/etudiant-model";
import  { EtudiantService } from "../../service/etudiant-service";
import  { FormEtudiantComponent } from "./features/form-etudiant";
import  { TableEtudiantComponent } from "./features/table-etudiant";

export class EtudiantPage implements BaseComponent {
    private rootElement: HTMLElement;
    private etudiants: EtudiantModel[] = [];
    
    constructor(rootElement: HTMLElement,private etudiantService: EtudiantService) {
        this.rootElement = rootElement;
        this.rootElement.className = 'etudiant-page';
        this.render();
    }

    render(): void {
        this.rootElement.innerHTML = `
                        <div class="container py-4">
            <div class="row g-4">
                <!-- Formulaire -->
                <div id="showAlert"></div>
                
            <div class="col-lg-4" id="form-etudiant">

            </div>
                <!-- Liste des étudiants -->
                <div class="col-lg-8">
                <div class="card p-4">
                    <h3 class="mb-4">Liste des Etudiants</h3>
                    <div class="table-responsive" id="table-etudiant"></div>
                    
                    </div>
                </div>
                </div>
            </div>
            </div>
        `;

       // Initialize the form and table components
      const containerForm = this.rootElement.querySelector("#form-etudiant")!;
       const tableEtudiant = this.rootElement.querySelector("#table-etudiant")!;
      //alert(containerForm);
      
        const formEtudiantComponent : FormEtudiantComponent = new FormEtudiantComponent((etudiant: EtudiantModel) => {
           this.saveEtudiant(etudiant);
           tableEtudiantComponent.updateData(this.etudiants);
        });
        containerForm.appendChild(formEtudiantComponent.element);
        //Premiere approche pour afficher les données
        //const tableEtudiantComponent: TableEtudiantComponent = new TableEtudiantComponent(this.etudiants);
        //Seconde approche pour afficher les données
        const tableEtudiantComponent: TableEtudiantComponent = new TableEtudiantComponent();
        tableEtudiantComponent.updateData(this.etudiants);
        tableEtudiant.appendChild(tableEtudiantComponent.element);  
        // Additional initialization logic can go here
    }

    get element(): HTMLElement {
        return this.rootElement;
    }

    setUpEventListeners?(): void {
        // Optional: Set up event listeners if needed
    }
    async saveEtudiant(etudiant: EtudiantModel): Promise<void> {
        await this.etudiantService.addEtudiant(etudiant);
        this.etudiants.push(etudiant);
    }

    destroy?(): void {
        // Optional: Clean up resources when the component is no longer needed
    }

}