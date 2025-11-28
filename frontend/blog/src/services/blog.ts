import { apiService, ApiResponse } from './api';
import { 
  Post
} from '../types/blog';

class BlogService {
  async getPosts(page: number = 1): Promise<ApiResponse<Post>> {
    const posts = apiService.get<Post>("api/v1/posts");
    console.log("Posts fetched:", posts);
    return posts;
  }

  async getPost(id: number): Promise<ApiResponse<Post>> {
    return apiService.get<Post>(`/posts/${id}/`);
  }
}

// Export singleton instance
export const blogService = new BlogService();
export { BlogService };
