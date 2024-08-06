import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com"
})

export async function getUserInfo(username: string) {
  const response = await api.get(`/users/${username}`)

  return response.data
}

export async function getRepoIssues(username: string, repo: string, query?: string) {
  const response = await api.get(`/search/issues`, {
    params: {
      q: `repo:${username}/${repo} ${query}`
    }
  })

  return response.data
}

export async function getIssue(username: string, repo: string, issueId: number) {
  const response = await api.get(`/repos/${username}/${repo}/issues/${issueId}`)

  return response.data
}