import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

// Sample blog posts data - in a real application, this would come from a database or CMS
const blogPosts = [
  {
    id: 1,
    title: "How to Prepare for Final Exams: A Comprehensive Guide",
    content: `
      <p>Preparing for final exams can be a stressful time for students of all ages. However, with the right strategies and mindset, you can approach your exams with confidence and achieve better results.</p>
      
      <h2>Start Early and Create a Study Plan</h2>
      <p>One of the most effective strategies is to begin your preparation well in advance. Create a detailed study plan that breaks down all the topics you need to cover and allocates specific time slots for each subject. This approach helps prevent last-minute cramming and allows for a more thorough understanding of the material.</p>
      
      <h2>Understand Your Learning Style</h2>
      <p>Everyone learns differently. Some students are visual learners who benefit from diagrams and charts, while others may prefer auditory learning through discussions or recordings. Identify your learning style and adapt your study methods accordingly to maximize retention and understanding.</p>
      
      <h2>Practice with Past Papers</h2>
      <p>One of the most effective ways to prepare for exams is to practice with past papers or sample questions. This helps you become familiar with the exam format, question types, and time constraints. It also allows you to identify areas where you may need additional study.</p>
      
      <h2>Take Care of Your Physical and Mental Health</h2>
      <p>During exam preparation, it's crucial to maintain good physical and mental health. Ensure you get adequate sleep, eat nutritious meals, and incorporate regular exercise into your routine. Taking short breaks during study sessions can also help maintain focus and prevent burnout.</p>
      
      <h2>Seek Help When Needed</h2>
      <p>Don't hesitate to ask for help if you're struggling with certain topics. Reach out to teachers, classmates, or consider joining study groups. Explaining concepts to others can also reinforce your own understanding.</p>
      
      <h2>Develop Effective Revision Techniques</h2>
      <p>Experiment with different revision techniques such as mind mapping, flashcards, summarizing notes, or teaching concepts to someone else. Find what works best for you and incorporate these methods into your study routine.</p>
      
      <h2>Manage Exam Anxiety</h2>
      <p>It's normal to feel anxious before and during exams. Practice relaxation techniques such as deep breathing, meditation, or positive visualization to help manage stress. Remember that being prepared is the best way to reduce anxiety.</p>
      
      <h2>Conclusion</h2>
      <p>By implementing these strategies and maintaining a positive attitude, you can approach your final exams with confidence and increase your chances of success. Remember that consistent effort over time yields better results than last-minute cramming.</p>
    `,
    image: "/images/blog/post-1.jpg",
    category: "Exam Preparation",
    date: "July 15, 2025",
    author: "Dr. Sarah Johnson",
    authorRole: "Education Specialist",
    slug: "prepare-for-final-exams",
    relatedPosts: [4, 6]
  },
  {
    id: 2,
    title: "The Benefits of Online Learning for Today's Students",
    content: `
      <p>Online learning has revolutionized education, offering flexibility and accessibility that traditional classroom settings cannot always provide. As technology continues to advance, the benefits of online learning become increasingly apparent for students of all ages.</p>
      
      <h2>Flexibility and Convenience</h2>
      <p>One of the most significant advantages of online learning is the flexibility it offers. Students can access course materials and lectures at times that suit their schedules, making it easier to balance education with other commitments such as work or family responsibilities.</p>
      
      <h2>Personalized Learning Experience</h2>
      <p>Online platforms often allow for a more personalized learning experience. Students can progress at their own pace, spending more time on challenging concepts and moving quickly through material they find easier to grasp.</p>
      
      <h2>Access to a Wider Range of Resources</h2>
      <p>Online learning provides access to a vast array of resources beyond traditional textbooks. Students can explore multimedia content, interactive simulations, and global perspectives that enrich their understanding of the subject matter.</p>
      
      <h2>Development of Digital Literacy</h2>
      <p>Participating in online learning naturally develops digital literacy skills that are increasingly important in today's workforce. Students become comfortable with various technologies, communication tools, and digital collaboration methods.</p>
      
      <h2>Cost-Effectiveness</h2>
      <p>Online courses often eliminate costs associated with commuting, physical textbooks, and sometimes even reduce tuition fees. This makes quality education more accessible to a broader range of students.</p>
      
      <h2>Global Learning Community</h2>
      <p>Online platforms can connect students from around the world, creating diverse learning communities where different perspectives and experiences enhance the educational experience for everyone involved.</p>
      
      <h2>Immediate Feedback</h2>
      <p>Many online learning platforms offer immediate feedback on quizzes and assignments, allowing students to quickly identify areas where they need additional practice or clarification.</p>
      
      <h2>Conclusion</h2>
      <p>While online learning may not be the perfect fit for every student or every subject, its benefits make it an invaluable option in modern education. As technology continues to evolve, we can expect online learning to become even more engaging, effective, and accessible for learners worldwide.</p>
    `,
    image: "/images/blog/post-2.jpg",
    category: "EdTech",
    date: "July 10, 2025",
    author: "Michael Chen",
    authorRole: "Educational Technology Researcher",
    slug: "benefits-online-learning",
    relatedPosts: [3, 5]
  }
];

// This is a dynamic page that will be generated for each blog post
export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Find the blog post that matches the slug
  const post = blogPosts.find(post => post.slug === params.slug);
  
  // If no post is found, we could redirect or show a 404 page
  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="mb-8">The blog post you&apos;re looking for doesn&apos;t exist or has been removed.</p>
          <Link href="/blog" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            Return to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Find related posts
  const relatedPosts = post.relatedPosts 
    ? blogPosts.filter(p => post.relatedPosts.includes(p.id))
    : [];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        {/* Blog Post Header */}
        <div className="bg-primary/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-4">
                <Link href="/blog" className="text-primary hover:underline flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to Blog
                </Link>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">{post.title}</h1>
              <div className="flex items-center text-gray-600">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span className="text-primary">{post.category}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Blog Post Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="relative h-80 w-full mb-8 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Image: {post.image}</span>
              </div>
              {/* Uncomment when images are available */}
              {/* <Image 
                src={post.image} 
                alt={post.title}
                fill
                className="object-cover"
              /> */}
            </div>
            
            {/* Author Info */}
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center mr-4">
                <span className="text-gray-600 font-bold">{post.author.charAt(0)}</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">{post.author}</h3>
                <p className="text-sm text-gray-600">{post.authorRole}</p>
              </div>
            </div>
            
            {/* Post Content */}
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Share Links */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-4">Share this article</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <div key={relatedPost.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <div className="relative h-48 w-full">
                        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500">Image: {relatedPost.image}</span>
                        </div>
                        {/* Uncomment when images are available */}
                        {/* <Image 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        /> */}
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-2">
                          <span className="text-sm text-primary font-medium">{relatedPost.category}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className="text-sm text-gray-500">{relatedPost.date}</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-800 line-clamp-2">
                          <Link href={`/blog/${relatedPost.slug}`} className="hover:text-primary transition-colors">
                            {relatedPost.title}
                          </Link>
                        </h3>
                        <Link href={`/blog/${relatedPost.slug}`} className="text-primary font-medium hover:underline">
                          Read More
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
