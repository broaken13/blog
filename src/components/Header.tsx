export default function Header() {
  return (
    <header className="border-b border-neutral-200 px-4 py-4 flex justify-between content-center">
      <h1 className="text-5xl font-title">Bryson Oakley</h1>
      <div className="flex content-center">
        <a
          href="emailto:brysonoakley2019@gmail.com"
          className="pr-8 text-2xl content-center"
        >
          Email me!
        </a>
        <a
          href="https://www.linkedin.com/in/bryson-oakley/"
          className="pr-8 text-2xl content-center"
        >
          LinkedIn
        </a>
        <a
          href="https://www.github.com/broaken13"
          className="pr-8 text-2xl content-center"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}
