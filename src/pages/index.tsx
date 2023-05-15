import { signIn, signOut, useSession } from "next-auth/react";

const Home = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <main>Loading...</main>;
  }

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-5xl pt-4">Resum&eacute; Maker</h1>
      <p className="text-md text-gray-400 pt-1">created by Duds, the Kid</p>
      {session ? (
        <h3 className="text-xl text-blue-400 pt-2">Welcome {session.user.name}</h3>
      ) : null}
      <div className="pt-10">
      {session ? (
        <button
          type="button"
          className="mx-auto block rounded-md bg-neutral-800 px-6 py-3 text-center hover:bg-neutral-700"
          onClick={() => void signOut().catch(console.log)}
          >
          Log out
        </button>
      ) : (
        <button
        type="button"
          className="mx-auto block rounded-md bg-neutral-800 px-6 py-3 text-center hover:bg-neutral-700"
          onClick={() => void signIn().catch(console.log)}
          >
          Login
        </button>
      )}
      </div>
    </main>
  );
};

export default Home;
