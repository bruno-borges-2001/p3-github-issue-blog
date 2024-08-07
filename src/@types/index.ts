export interface _UserData {
  id: number;
  avatar_url: string;
  login: string;
  name: string;
  html_url: string;
  bio: string | null;
  company: string | null;
  followers: number;
}

export interface _Post {
  id: number
  number: number
  title: string
  body: string
  created_at: string
}

export interface _PostData extends _Post {
  user: {
    login: string
  }

  html_url: string
  comments: number
}