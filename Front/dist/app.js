var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { FormEtudiantComponent } from "./components/form-etudiant.js";
import { EtudiantService } from "./service/etudiant-service.js";
import { TableEtudiantComponent } from "./components/table-etudiant.js";
class App {
    constructor() {
        this.etudiants = [];
        this.etudiantService = new EtudiantService();
        this.initComponent();
    }
    initData() {
        return __awaiter(this, void 0, void 0, function* () {
            this.etudiants = yield this.etudiantService.getEtudiants();
        });
    }
    initComponent() {
        return __awaiter(this, void 0, void 0, function* () {
            const containerForm = document.querySelector("#form-etudiant");
            const tableEtudiant = document.querySelector("#table-etudiant");
            yield this.initData();
            const formEtudiantComponent = new FormEtudiantComponent((etudiant) => {
                this.saveEtudiant(etudiant);
                tableEtudiantComponent.updateData(this.etudiants);
            });
            containerForm.appendChild(formEtudiantComponent.element);
            const tableEtudiantComponent = new TableEtudiantComponent();
            tableEtudiantComponent.updateData(this.etudiants);
            tableEtudiant.appendChild(tableEtudiantComponent.element);
        });
    }
    saveEtudiant(etudiant) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.etudiantService.addEtudiant(etudiant);
            this.etudiants.push(etudiant);
        });
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const app = new App();
});
