/*
    nous voulons avoir plusieur manieres de recuperer les donnees necessaires pour afficher la page (blog posts) avec le meme composant. cad qu'avec diffrents segments du path, nous afficherons le meme composant.

    pour cela, nous definirons 'collect all routes' ou 'catch all routes' en utilisant les crochets [...un_nom] dans le nom du fichier de la page.

    la notation 'blog/[...slug]' signifie que nous voulons capturer tous les segments du path apres le segment 'blog' et les stocker dans un tableau appele 'slug'. ce tableau contiendra tous les segments du path apres 'blog'. chaque segment du path sera un element du tableau 'slug'.
*/

import {useRouter} from 'next/router';

export default function BlogPostsPage() {
  const router = useRouter();
  console.log(router.query);
  
  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}