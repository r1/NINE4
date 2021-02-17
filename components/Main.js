import TextLoop from "react-text-loop";

export default function Main() {
  return (
    <section className="text-black body-font lg:pt-14">
      <div className="container px-5 mx-auto lg:px-4 lg:py-4">
        <div className="flex flex-col w-full mb-2 text-left md:text-center ">
          <h1 className="mb-1 text-6xl font-bold tracking-tighter text-center text-white lg:text-8xl md:text-7xl">
            A free template site for{" "}
            <TextLoop>
              <span className="text-purple-600">Developers‏‏‎</span>
              <span className="text-blue-600">Businesses</span>
              <span className="text-red-600">Hobbyists‏‏‎‏‏</span>
            </TextLoop>
          </h1>
          <br></br>
          <p className="mx-auto text-xl font-normal leading-relaxed fs521 dark:text-gray-300 lg:w-2/3">
            nine4 is a free to use template website for websites made with
            Next.js and styled with Tailwind CSS
          </p>
        </div>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
        <img
          className="object-cover object-center w-3/4 mb-10 g327 border rounded-lg shadow-md"
          alt="hero"
          src="./images/nine4-1.png"
        ></img>
      </div>
    </section>
  );
}
