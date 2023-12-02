import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="min-h-screen overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="../../bg.jpg"
            className="w-full h-full object-cover"
            alt="Background Image"
          />
        </div>
        <div className="flex justify-center mt-10">
          <div className="flex flex-wrap justify-center items-center">
            <h1 className="font-mono text-5xl">Welcome to Fcommerce Store!</h1>
          </div>
        </div>
        <div className="flex justify-start mt-36 ml-36 w-[400px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum tempore
          minus, assumenda veniam saepe nesciunt quo temporibus. Recusandae
          dignissimos quisquam maiores optio soluta ipsam. Soluta nulla, ipsa
          excepturi corrupti quam dolorum ipsam pariatur earum praesentium illo
          quibusdam minus dicta eligendi nobis delectus harum consectetur vero
          saepe amet id. Optio debitis, voluptates consequatur repellat
          architecto, repellendus numquam exercitationem ipsum ad sint
          distinctio doloremque voluptas ut illum doloribus nostrum cupiditate
          laborum. Fugiat?
        </div>
        <div className="flex justify-start mt-5 ml-36">
          <Link
            href={"/pages/product"}
            className="p-2 bg-indigo-400 rounded-lg hover:bg-indigo-500 active:bg-indigo-600"
          >
            Browse
          </Link>
        </div>
      </div>
    </main>
  );
}
