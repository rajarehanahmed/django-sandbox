// User type (from Django User model)
export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}

// Post type (matching Django Post model and serializer)
export interface Post {
  id: number;
  title: string;
  body: string;
  thumbnail: string | null;
  author: User;
  is_active: boolean;
  created: string; // ISO datetime string
  updated: string; // ISO datetime string
  likes: Like[];
  comments: Comment[];
}

// Like type
export interface Like {
  id: number;
  user: number; // User ID
  post: number; // Post ID
  created: string;
}

// Comment type
export interface Comment {
  id: number;
  post: number; // Post ID
  comment: string;
  author: User;
  reply_to: number | null; // Comment ID if this is a reply
  is_active: boolean;
  created: string;
  updated: string;
}
