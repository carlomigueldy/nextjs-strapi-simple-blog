export interface Post {
  id: number;
  title: string;
  content: string;
  created_at: any;
  updated_at: any;
  published_at: any;
}

export interface PostJsonResponse {
  data: Post[];
}