import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com"
})

const USERNAME = import.meta.env.VITE_USERNAME
const REPO = import.meta.env.VITE_REPO

export async function getUserInfo() {
  const response = await api.get(`/users/${USERNAME}`)

  return response.data
}

export async function getRepoIssues(query = "") {
  const response = await api.get(`/search/issues`, {
    params: {
      q: `repo:${USERNAME}/${REPO} ${query}`
    }
  })

  return response.data
}

export async function getIssue(issueId: number) {
  const response = await api.get(`/repos/${USERNAME}/${REPO}/issues/${issueId}`)

  return response.data
}