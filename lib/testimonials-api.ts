import { VideoReview } from './testimonials-data';

export async function fetchTestimonials(): Promise<VideoReview[]> {
  try {
    const baseUrl = process.env.BASE_API_URL?.replace('/v2', '/v1') || 'https://app.gdacademy.et/api/v1';
    
    // Server-side fetch, dynamic and no cache since it's a CMS-managed content
    const res = await fetch(`${baseUrl}/testimonials/approved`, {
      cache: 'no-store'
    });
    
    if (!res.ok) {
      console.warn("Failed to fetch testimonials", res.status);
      return [];
    }
    
    const data = await res.json();
    
    if (data.status === 'success' && data.result) {
      return data.result.map((v: any) => ({
        id: v.id,
        name: v.name,
        role: v.description || 'Community Member',
        videoUrl: v.file_path || '',
        thumbnailUrl: `https://placehold.co/400x550/0B1D53/FFFFFF?text=${encodeURIComponent(v.name)}`,
      }));
    }
    
    return [];
  } catch (error) {
    if ((error as { digest?: string })?.digest?.startsWith('DYNAMIC_SERVER_USAGE')) {
      throw error;
    }
    console.warn("Error fetching testimonials:", error);
    return [];
  }
}
