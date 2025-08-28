export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  imageUrl: string;
  publishedAt: string;
  categories: string[];
  author?: {
    name: string;
    avatar?: string;
  };
  // Add raw post data for debugging
  _raw?: any;
}

export interface Grade {
  id: string;
  name: string;
  grade_level: number;
  year: number;
  description: string;
  duration_years: number;
  image_path: string;
  image_path_2: string;
  type: number;
  organization_id: string | null;
  created_by: string;
  created_at: string; 
  updated_at: string; 
}

export interface GradesResponse {
  status: string;
  result: Grade[];
}


const API_BASE_URL = 'https://app.gdacademy.et/api/v2';

// Helper function to log API requests and responses
async function fetchWithLogging(url: string, options?: RequestInit) {
  console.log(`🌐 API Request: ${url}`, { options });
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options?.headers || {})
      },
      next: { revalidate: 60 } // Cache for 60 seconds
    });

    console.log(`🔔 API Response Status: ${response.status} ${response.statusText}`, {
      url,
      status: response.status,
      headers: Object.fromEntries(response.headers.entries())
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ API Error Response:', {
        status: response.status,
        statusText: response.statusText,
        url,
        error: errorText
      });
      throw new Error(`API request failed with status ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    console.log('📦 API Response Data:', data);
    return data;
  } catch (error) {
    console.error('🚨 API Request Failed:', error);
    throw error;
  }
}

async function fetchWithTimeout(resource: string, options: RequestInit = {}) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), 5000);
  
  try {
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
        'Cache-Control': 'no-cache',
        ...options.headers
      },
      next: { revalidate: 60 }
    });
    
    clearTimeout(id);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    clearTimeout(id);
    console.error('API request failed:', error);
    throw error;
  }
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    console.log('📡 Fetching blog posts...');
    const data = await fetchWithLogging(`${API_BASE_URL}/blogs/all`);
    
    // Handle different API response formats
    const posts = Array.isArray(data) 
      ? data 
      : Array.isArray(data?.data) 
        ? data.data 
        : Array.isArray(data?.result) 
          ? data.result 
          : [];
    
    console.log(`📊 Found ${posts.length} posts`);
    
    // Log first 3 posts for debugging
    posts.slice(0, 3).forEach((post: any, index: number) => {
      console.group(`📝 Sample Post #${index + 1}:`);
      console.log('ID:', post.id);
      console.log('Title:', post.title);
      console.log('Image sources:', {
        meta_image: post.meta_image,
        featured_image: post.featured_image,
        image_url: post.image_url,
        image: post.image
      });
      console.groupEnd();
    });
    
    if (posts.length === 0) {
      console.warn('⚠️ No posts found in the API response. Response data:', data);
    }
    
    return posts.map((post: any) => {
      // Create a clean post object with fallbacks
      const cleanPost = {
        id: String(post.id || ''),
        title: String(post.title || 'Untitled Post'),
        excerpt: String(post.excerpt || post.summary || ''),
        content: String(post.content || ''),
        slug: String(post.slug || post.id || '').toLowerCase().replace(/\s+/g, '-'),
        publishedAt: new Date(post.published_at || post.created_at || new Date()).toISOString(),
        categories: Array.isArray(post.categories) 
          ? post.categories 
          : post.category 
            ? [post.category].filter(Boolean)
            : [],
        _raw: process.env.NODE_ENV === 'development' ? post : undefined,
      };

      // Handle image URL with better fallbacks
      const imageUrl = [
        post.meta_image,
        post.featured_image,
        post.image_url,
        post.image,
        `https://placehold.co/800x450/2563eb/white?text=${encodeURIComponent(
          cleanPost.title.substring(0, 20)
        )}`
      ].find(url => url && typeof url === 'string');

      // Handle author information
      const author = post.author ? {
        name: String(post.author.name || post.author.username || 'GDA Team'),
        avatar: post.author.avatar ? String(post.author.avatar) : undefined
      } : {
        name: 'GDA Team'
      };

      return {
        ...cleanPost,
        imageUrl: imageUrl || 'https://placehold.co/800x450/2563eb/white?text=GDA',
        author
      };
    });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  if (!slug) return null;
  
  try {
    const post = await fetchWithTimeout(`${API_BASE_URL}/blogs/${encodeURIComponent(slug)}`);
    if (!post) return null;
    
    return {
      id: String(post.id || ''),
      title: String(post.title || 'Untitled Post'),
      excerpt: String(post.excerpt || post.summary || ''),
      content: String(post.content || ''),
      slug: String(post.slug || post.id || '').toLowerCase().replace(/\s+/g, '-'),
      imageUrl: post.meta_image || post.featured_image || post.image_url || post.image || 'https://placehold.co/800x450/2563eb/white?text=GDA',
      publishedAt: new Date(post.published_at || post.created_at || new Date()).toISOString(),
      categories: Array.isArray(post.categories) ? post.categories : [post.category].filter(Boolean),
      author: post.author ? {
        name: String(post.author.name || post.author.username || 'Anonymous'),
        avatar: post.author.avatar ? String(post.author.avatar) : undefined
      } : undefined
    };
  } catch (error) {
    console.error(`Error fetching blog post ${slug}:`, error);
    return null;
  }
}

export async function fetchGrades(): Promise<GradesResponse | null> {
  try {
    const response = await fetchWithTimeout(`${API_BASE_URL}/anonymous/batches`);
    if (!response) return null;
    return response
  } catch (error) {
    console.error(`Error fetching grades:`, error);
    return null;
  }
}
