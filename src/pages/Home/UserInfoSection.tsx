import { IArrowUpRightFromSquare, IBuilding, IGithub, IUserGroup } from "../../assets/icons";

export default function UserInfoSection() {
  return (
    <section className="min-h-[13.25rem] rounded-base flex justify-center align-center gap-8 p-8 bg-base-profile">
      <aside>
        <img src="https://github.com/bruno-borges-2001.png" className="rounded-lg aspect-square max-w-[148px]" />
      </aside>
      <div className="flex flex-1 flex-col gap-2">
        <header className="flex justify-between items-start">
          <h1 className="font-bold text-2xl leading-[1.3] text-base-title">Bruno Borges</h1>

          <a href="https://github.com/bruno-borges-2001" target="_blank" className="text-blue font-bold text-xs hover:underline flex gap-2 items-center">
            GITHUB
            <IArrowUpRightFromSquare height={12} width={12} />
          </a>
        </header>

        <p>In cillum quis consectetur amet veniam qui magna esse excepteur fugiat elit do officia eiusmod. Aute non in adipisicing eiusmod ut. Aliqua irure amet cillum est. Minim labore et pariatur eu.</p>

        <footer className="flex flex-wrap gap-6 items-center mt-auto">
          <article className="flex items-center gap-2 text-base-subtitle whitespace-nowrap">
            <IGithub className="h-[18px] w-[18px] text-base-label" />
            bruno-borges-2001
          </article>

          <article className="flex items-center gap-2 text-base-subtitle whitespace-nowrap">
            <IBuilding className="h-[18px] w-[18px] text-base-label" />
            Fetchly
          </article>

          <article className="flex items-center gap-2 text-base-subtitle whitespace-nowrap">
            <IUserGroup className="h-[18px] w-[18px] text-base-label" />
            1 seguidor
          </article>
        </footer>
      </div>
    </section>
  )
}