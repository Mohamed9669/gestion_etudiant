import { FormEtudiantComponent } from "./components/form-etudiant.js";
import { EtudiantService } from "./service/etudiant-service.js";
import { TableEtudiantComponent } from "./components/table-etudiant.js";
import { EtudiantModel } from "./model/etudiant-model.js";

class App {
    private etudiantService: EtudiantService;
    private etudiants : EtudiantModel[] = []; // Replace with actual model type if available
     // Replace with actual service type if available
    constructor() {
        this.etudiantService = new EtudiantService() ;
        
      
        this.initComponent();
    }
async initData(): Promise<void> {
       this.etudiants = await this.etudiantService.getEtudiants()
        
    }
    
 async initComponent() {
       const containerForm = document.querySelector("#form-etudiant")!;
       const tableEtudiant = document.querySelector("#table-etudiant")!;
      //alert(containerForm);
       await this.initData();
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
    async saveEtudiant(etudiant: EtudiantModel): Promise<void> {
        await this.etudiantService.addEtudiant(etudiant);
        this.etudiants.push(etudiant);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const app = new App();
});