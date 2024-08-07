import dayjs from "dayjs";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";
import { _PostData } from "../../@types";
import { IArrowUpRightFromSquare, ICalendarDay, IChevronLeft, IComment, IGithub } from "../../assets/icons";
import { getIssue } from "../../services/api";

export default function Post() {
  const params = useParams()
  const navigate = useNavigate()

  const [postData, setPostData] = useState<_PostData | null>(null)

  useEffect(() => {
    if (!params.id) {
      navigate('/', { replace: true })
      return
    }

    if (postData && Number(params.id) === postData.number) return;

    getIssue(Number(params.id)).then(setPostData).catch(() => navigate('/', { replace: true }))
  }, [postData, navigate, params])

  if (!postData) return null

  return (
    <div>
      <header className="min-h-[13.25rem] rounded-base flex flex-col justify-between align-center gap-8 p-8 bg-base-profile">
        <div className="flex justify-between items-center">
          <button onClick={() => navigate('/', { replace: true })} className="text-blue font-bold text-xs hover:underline flex gap-2 items-center">
            <IChevronLeft height={12} width={12} />
            VOLTAR
          </button>

          <a href={postData.html_url} className="text-blue font-bold text-xs hover:underline flex gap-2 items-center">
            VER NO GITHUB<IArrowUpRightFromSquare height={12} width={12} />
          </a>
        </div>

        <h1 className="font-bold text-2xl leading-tight text-base-title">
          <Markdown>{postData.title}</Markdown>
        </h1>

        <div className="flex flex-wrap gap-8 items-center">
          <article className="flex items-center gap-2 text-base-subtitle whitespace-nowrap">
            <IGithub className="h-[18px] w-[18px] text-base-label" />
            {postData?.user.login}
          </article>

          <article className="flex items-center gap-2 text-base-subtitle whitespace-nowrap">
            <ICalendarDay className="h-[18px] w-[18px] text-base-label" />
            {dayjs(postData?.created_at).fromNow()}
          </article>

          <article className="flex items-center gap-2 text-base-subtitle whitespace-nowrap">
            <IComment className="h-[18px] w-[18px] text-base-label" />
            {postData?.comments} comentário{postData?.comments === 1 ? '' : 's'}
          </article>
        </div>
      </header>

      <main className="px-8 py-10 whitespace-pre-wrap">
        <Markdown>
          {postData.body}
        </Markdown>
      </main>
    </div >
  )
}