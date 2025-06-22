import { EtudiantPage } from './pages/etudiant/etudiant.page';
import { EtudiantService } from './service/etudiant-service';
import './style.css'
 
document.addEventListener('DOMContentLoaded', () => {
     const etudiantService = new EtudiantService() ;

  const rootElement = document.querySelector<HTMLDivElement>('#app')!;
  const etudiantPage = new EtudiantPage(rootElement, etudiantService);
  etudiantPage.render();
  etudiantPage.setUpEventListeners?.();

});

  

