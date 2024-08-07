import dayjs from "dayjs"
import { useContext, useEffect, useState } from "react"
import Markdown from 'react-markdown'
import { NavLink } from "react-router-dom"
import { _Post } from "../../@types"
import { githubContext } from "../../contexts/GithubContext"

export default function PostListSection() {
  const { fetchIssues } = useContext(githubContext)

  const [searchValue, setSearchValue] = useState("")

  const [posts, setPosts] = useState<_Post[]>([])

  useEffect(() => {
    if (searchValue.length === 0) {
      fetchIssues(searchValue).then(setPosts)
      return
    }

    const timeout = setTimeout(() => {
      fetchIssues(searchValue).then(setPosts)
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [fetchIssues, searchValue])

  return (
    <section className="mt-[4.5rem]">
      <header className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg text-base-subtitle">Publicações</h2>
          <p className="text-sm text-base-span">6 publicações</p>
        </div>

        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Buscar conteúdo"
          className="bg-base-input rounded-md px-4 py-3 border border-base-border placeholder:text-base-label"
        />
      </header>

      <ul className="grid grid-cols-2 gap-8 mt-12">
        {posts.map(el => <Post key={el.id} post={el} />)}
      </ul>
    </section>
  )
}

function Post({ post }: { post: _Post }) {
  return (
    <NavLink to={`/${post.number}`} className="p-8 bg-base-post rounded-base">
      <header className="flex justify-between items-start gap-2">
        <Markdown className="font-bold text-xl text-base-title">{post.title}</Markdown>
        <p className="whitespace-nowrap text-sm text-base-span">{dayjs(post.created_at).fromNow()}</p>
      </header>

      <Markdown className="line-clamp-4 mt-5 whitespace-pre-wrap">
        {post.body}
      </Markdown>
    </NavLink>
  )
}