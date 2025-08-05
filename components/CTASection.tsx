import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/Container';

export default function CTASection() {
    return (
        <section className="py-20 bg-[#0B1D53] text-secondary-foreground">
            <Container className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Ready to Revolutionize Learning?</h2>
                <p className="text-xl text-secondary-foreground/80 mb-10 max-w-2xl mx-auto">
                    Join thousands of students, parents, and educators who are experiencing the future of education with GlobeDock Academy. Sign up today and unlock a world of knowledge.
                </p>
                <Button 
                    size="lg" 
                    className="bg-white text-secondary hover:bg-secondary/10 hover:text-secondary-foreground text-lg px-10 py-4 shadow-lg transform transition-transform hover:scale-105"
                    asChild
                >
                    <a href="https://app.gdacademy.et/register">
                        Get Started for Free
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                </Button>
                <p className="mt-6 text-sm text-secondary-foreground/70">
                    Access basic features for free. Affordable premium plans available.
                </p>
            </Container>
        </section>
    );
}
