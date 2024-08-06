import UserInfoSection from "./UserInfoSection";

export default function Home() {
  return (
    <div>
      <UserInfoSection />

      <section className="mt-[4.5rem]">
        <header className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-lg text-base-subtitle">Publicações</h2>
            <p className="text-sm text-base-span">6 publicações</p>
          </div>

          <input placeholder="Buscar conteúdo" className="bg-base-input rounded-md px-4 py-3 border border-base-border placeholder:text-base-label" />
        </header>

        <ul className="grid grid-cols-2 gap-8 mt-12">
          <li className="p-8 bg-base-post rounded-base">
            <header className="flex justify-between items-start gap-2">
              <h3 className="font-bold text-xl text-base-title">JavaScript data types and data structures</h3>
              <p className="whitespace-nowrap text-sm text-base-span">Há 1 dia</p>
            </header>

            <p className="line-clamp-4 mt-5">
              Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

              Dynamic typing
              JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

              let foo = 42; // foo is now a number
              foo = 'bar'; // foo is now a string
              foo = true; // foo is now a boolean
            </p>
          </li>
        </ul>
      </section>
    </div>
  )
}