import { fetchTestimonials } from '@/lib/testimonials-api';
import ReviewsClient from './ReviewsClient';

export default async function ReviewsPage() {
    const testimonials = await fetchTestimonials();

    return <ReviewsClient testimonials={testimonials} />;
}
