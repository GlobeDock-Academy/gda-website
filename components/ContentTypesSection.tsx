import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, FileText, ClipboardCheck, GraduationCap, Zap } from 'lucide-react';

export default function ContentTypesSection() {
    const contentTypes = [
        {
            title: 'Engaging Video Lessons',
            description: 'High-quality, animated videos that simplify complex topics.',
            icon: Play,
            iconBg: 'bg-secondary/20',
            iconColor: 'text-secondary',
            badgeBg: 'bg-secondary/10',
            badgeColor: 'text-secondary',
            tags: ['Visual Learning', 'Interactive'],
        },
        {
            title: 'Comprehensive Digital Notes',
            description: 'Well-structured notes covering the entire curriculum, perfect for revision.',
            icon: FileText,
            iconBg: 'bg-primary/20',
            iconColor: 'text-primary',
            badgeBg: 'bg-primary/10',
            badgeColor: 'text-primary',
            tags: ['Study Aid', 'Offline Access'],
        },
        {
            title: 'Interactive Quizzes & Assessments',
            description: 'Test understanding with varied quiz formats and instant feedback.',
            icon: ClipboardCheck,
            iconBg: 'bg-secondary/20',
            iconColor: 'text-secondary',
            badgeBg: 'bg-secondary/10',
            badgeColor: 'text-secondary',
            tags: ['Self-Assessment', 'Gamified'],
        },
        {
            title: 'Curriculum-Aligned Textbooks',
            description: 'Digital versions of approved textbooks, easily accessible.',
            icon: GraduationCap,
            iconBg: 'bg-primary/20',
            iconColor: 'text-primary',
            badgeBg: 'bg-primary/10',
            badgeColor: 'text-primary',
            tags: ['Official Material', 'Portable'],
        },
        {
            title: 'Microlearning Modules',
            description: 'Bite-sized lessons for focused learning and quick refreshers.',
            icon: Zap,
            iconBg: 'bg-secondary/20',
            iconColor: 'text-secondary',
            badgeBg: 'bg-secondary/10',
            badgeColor: 'text-secondary',
            tags: ['Efficient', 'On-the-Go'],
        },
    ];

    return (
        <section id="content" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Diverse Content Formats</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We cater to all learning styles with a rich variety of educational materials designed for engagement and retention.
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                    {contentTypes.map((type, index) => (
                        <Card key={index} className={`w-full md:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-4rem)/3)] border-0 shadow-lg hover:shadow-xl transition-shadow bg-white flex flex-col`}>
                            <CardContent className="p-6 flex flex-col flex-grow">
                                <div className={`w-12 h-12 ${type.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                                    <type.icon className={`h-6 w-6 ${type.iconColor}`} />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 flex-grow">{type.description}</p>
                                <div className="mt-auto">
                                    {type.tags.map((tag) => (
                                        <Badge key={tag} className={`mr-2 mb-2 ${type.badgeBg} ${type.badgeColor} hover:${type.badgeBg}`}>
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}

                    </div>
            </div>
        </section>
    );
}
