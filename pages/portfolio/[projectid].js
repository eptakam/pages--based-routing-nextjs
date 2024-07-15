/*
    Pour acceder exactement a l'url (valeurs) que nous avons besoin pour afficher la page, nous utiliserons le hook useRouter de next/router qui retourne un objet.

    la methode .query nous donne acces a la valeur concrete de ce segment de l'url. on peut donc l'utiliser 'router.query.projectid' pour envoyer une requete a un serveur pour recuperer les donnees necessaires pour afficher la page, sachant que router = useRouter().
*/

import { useRouter } from "next/router";

export default function PortfolioProjectPage() {
  const router = useRouter();
  console.log(router.pathname); // /portfolio/[projectid]
  console.log(router.query); // { projectid: 'value' }

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}
