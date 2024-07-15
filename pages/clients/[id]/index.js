/*
    nous qu'une action soit declenchee au clic sur le bouton: c'est ce qu'on appeelle en NExtJs 'navigation programmatique'. 

    pour le faire, nous aurons besoin d'une autre fonction qui sera declenchee au clic sur le bouton grace a l'evenement onClick du bouton.
*/

import { useRouter } from "next/router";

export default function ClientProjectsPage() {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    // load data...
    // navigate to /clients/em/project-a
    // router.push("/clients/em/project-a"); // ceci est similaire a utiliser le lien <Link> de NextJs a la difference que nous pouvons le declencher programmatiquement

    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "em", clientprojectid: "project-a" },
    });
  }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}
