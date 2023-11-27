"use client";

export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen flex-col items-center justify-between w-full relative ">
        <div className="absolute inset-0 z-0">
          <img
            src="../../bg.jpg"
            className="w-full h-full object-cover"
            alt="Background Image"
          />
        </div>
        <div className="relative z-0 flex place-items-center ">
          <div className="relative flex flex-wrap justify-center items-center mb-8 bg-lime-500">
            <h1 className="font-mono text-5xl">Welcome to Fcommerce Store!</h1>
          </div>
          <div className="relative top-52 inset-x-[-28rem] z-10 w-96 bg-yellow-800 ml-60">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum
            tempore minus, assumenda veniam saepe nesciunt quo temporibus.
            Recusandae dignissimos quisquam maiores optio soluta ipsam. Soluta
            nulla, ipsa excepturi corrupti quam dolorum ipsam pariatur earum
            praesentium illo quibusdam minus dicta eligendi nobis delectus harum
            consectetur vero saepe amet id. Optio debitis, voluptates
            consequatur repellat architecto, repellendus numquam exercitationem
            ipsum ad sint distinctio doloremque voluptas ut illum doloribus
            nostrum cupiditate laborum. Fugiat?
            <div className="m-4 ml-64 mt-2">
              <button className="p-2">Browse</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
