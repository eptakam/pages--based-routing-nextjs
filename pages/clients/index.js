import Link from "next/link";

export default function ClientsPage() {
  const clients = [
    { id: "em", name: "Emmanuel" },
    { id: "pi", name: "Pierre" },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
            {/* NextJs donne egalement la possibilite de passer un objet a l'atribut href de la balise Link au lieu d'une chaine de caractere. voir ci-dessous */}
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
