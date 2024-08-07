import { useContext } from "react";
import { IArrowUpRightFromSquare, IBuilding, IGithub, IUserGroup } from "../../assets/icons";
import { githubContext } from "../../contexts/GithubContext";

export default function UserInfoSection() {
  const { userData } = useContext(githubContext)

  return (
    <section className="min-h-[13.25rem] rounded-base flex justify-center align-center gap-8 p-8 bg-base-profile">
      <aside>
        <img src={userData?.avatar_url} className="rounded-lg aspect-square max-w-[148px]" />
      </aside>
      <div className="flex flex-1 flex-col gap-2">
        <header className="flex justify-between items-start">
          <h1 className="font-bold text-2xl leading-[1.3] text-base-title">{userData?.name}</h1>

          <a href={userData?.html_url} target="_blank" className="text-blue font-bold text-xs hover:underline flex gap-2 items-center">
            GITHUB
            <IArrowUpRightFromSquare height={12} width={12} />
          </a>
        </header>

        <p>{userData?.bio}</p>

        <footer className="flex flex-wrap gap-6 items-center mt-auto">
          <article className="flex items-center gap-2 text-base-subtitle whitespace-nowrap">
            <IGithub className="h-[18px] w-[18px] text-base-label" />
            {userData?.login}
          </article>

          {userData?.company && (
            <article className="flex items-center gap-2 text-base-subtitle whitespace-nowrap">
              <IBuilding className="h-[18px] w-[18px] text-base-label" />
              {userData.company}
            </article>
          )}

          <article className="flex items-center gap-2 text-base-subtitle whitespace-nowrap">
            <IUserGroup className="h-[18px] w-[18px] text-base-label" />
            {userData?.followers} seguidor{userData?.followers === 1 ? '' : 'es'}
          </article>
        </footer>
      </div>
    </section>
  )
}