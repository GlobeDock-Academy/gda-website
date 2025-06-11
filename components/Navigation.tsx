import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Container from '@/components/Container';

export default function Navigation() {
    return (
        <nav className="bg-[#FCFCFC] border-b border-secondary/20 sticky top-0 z-50">
            <Container>
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        {/* Assumes your logo 'image.png' is in the /public directory */}
                        <Image src="/images/logo.png" alt="GlobeDock Academy Logo" width={161} height={40} className="h-12 w-auto" />
                    </div>
                    <div className="hidden md:flex items-center space-x-6"> {/* Adjusted spacing for nav items and new button group */}
                        {/* New Button Group - Links removed as per user request */}
                        <div className="flex items-center space-x-2">
                            <Button variant="outline" className="text-secondary border-secondary hover:bg-secondary/10 hover:text-secondary rounded-md px-4" asChild>
                                <a href="https://staging-stud.gdacademy.et/auth/signin">Log in</a>
                            </Button>
                            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-4" asChild>
                                <a href="https://staging-stud.gdacademy.et/auth/verify-phone">Join for free</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </nav>
    );
}
