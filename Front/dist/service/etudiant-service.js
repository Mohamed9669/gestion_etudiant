var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class EtudiantService {
    constructor() {
        this.apiUrl = 'http://localhost:3000/etudiants';
    }
    getEtudiants() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(this.apiUrl);
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des étudiants');
            }
            return response.json();
        });
    }
    getEtudiantById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.apiUrl}/${id}`);
            if (!response.ok) {
                throw new Error(`Erreur lors de la récupération de l'étudiant avec l'ID ${id}`);
            }
            return response.json();
        });
    }
    addEtudiant(etudiant) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(this.apiUrl, {
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
        });
    }
    updateEtudiant(id, etudiant) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${this.apiUrl}/${id}`, {
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
        });
    }
}
