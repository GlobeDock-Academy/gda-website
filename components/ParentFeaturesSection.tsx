import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Shield, BarChart3, Heart, Users } from 'lucide-react';

export default function ParentFeaturesSection() {
    const parentFeatures = [
        {
            title: 'Safe Learning Environment',
            description: 'A secure, ad-free platform focused solely on education, ensuring your child’s safety online.',
            icon: Shield,
            bgColor: 'bg-secondary/20',
            textColor: 'text-secondary',
        },
        {
            title: 'Track Child’s Progress',
            description: 'Dedicated parent dashboard to monitor learning activities, quiz scores, and overall progress.',
            icon: BarChart3,
            bgColor: 'bg-primary/20',
            textColor: 'text-primary',
        },
        {
            title: 'Supportive Community',
            description: 'Connect with other parents and educators, share insights, and support your child’s journey.',
            icon: Users,
            bgColor: 'bg-secondary/20',
            textColor: 'text-secondary',
        },
        {
            title: 'Nurturing Potential',
            description: 'We provide tools and resources to help you actively participate in and enrich your child’s education.',
            icon: Heart,
            bgColor: 'bg-primary/20',
            textColor: 'text-primary',
        },
    ];

    return (
        <section id="parents" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Empowering Parents, Supporting Students</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We believe in a collaborative approach to education. Our platform offers features designed to keep parents informed and involved.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {parentFeatures.map((feature, index) => (
                        <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                            <CardHeader>
                                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                                    <feature.icon className={`h-6 w-6 ${feature.textColor}`} />
                                </div>
                                <CardTitle>{feature.title}</CardTitle>
                                <CardDescription>{feature.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                    </div>
                </div>
        </section>
    );
}
