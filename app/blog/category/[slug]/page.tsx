import { redirect } from 'next/navigation';

interface PageProps {
  params: { slug: string };
}

export default function BlogCategoryRedirectPage({ params }: PageProps) {
  // Temporary behavior: redirect category pages to the main blog page
  // TODO: Implement category filtering and render posts for the given category
  const slug = params?.slug || 'all';
  redirect('/blog');
}
