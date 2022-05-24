import Projects from "./Projects";

export default function Layout() {
  return (
    <>
      <h1 className="lg:tracking-[-1rem] tracking-[-0.5rem] lg:text-[10rem] text-[5rem]">
        NINE4
      </h1>
      <Projects />
      <h2 className="font-semibold text-2xl mb-3 ml-3">
        Made by{" "}
        <a
          href="https://jacklatimer.dev"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Jack Latimer
        </a>
      </h2>
    </>
  );
}
