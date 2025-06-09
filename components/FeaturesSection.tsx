import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MessageCircle, Download, BarChart3, Users, BookOpen, Brain } from 'lucide-react';
import Container from '@/components/Container';

export default function FeaturesSection() {
    return (
        <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-secondary/10">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Powerful Features for Modern Learning
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our comprehensive platform combines cutting-edge technology with
                        pedagogical excellence to deliver an unmatched learning experience.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                        <CardHeader>
                            <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                                <MessageCircle className="h-6 w-6 text-secondary" />
                            </div>
                            <CardTitle>AskAI Chat Support</CardTitle>
                            <CardDescription>
                                Get instant help with our intelligent AI assistant available
                                24/7 to answer questions and provide guidance.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                        <CardHeader>
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                                <Download className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle>Offline Downloads</CardTitle>
                            <CardDescription>
                                Download content for offline access, ensuring learning continues
                                even without internet connectivity.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                        <CardHeader>
                            <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                                <BarChart3 className="h-6 w-6 text-secondary" />
                            </div>
                            <CardTitle>Progress Tracking</CardTitle>
                            <CardDescription>
                                Monitor student progress with detailed analytics and reports,
                                helping to identify areas for improvement.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                        <CardHeader>
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                                <Users className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle>Collaborative Learning</CardTitle>
                            <CardDescription>
                                Engage in group discussions and projects, fostering a community
                                of learners and enhancing understanding.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                        <CardHeader>
                            <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                                <BookOpen className="h-6 w-6 text-secondary" />
                            </div>
                            <CardTitle>Rich Content Library</CardTitle>
                            <CardDescription>
                                Access a vast library of locally contextualized educational
                                materials, including videos, notes, and quizzes.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
                        <CardHeader>
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                                <Brain className="h-6 w-6 text-primary" />
                            </div>
                            <CardTitle>Personalized Learning Paths</CardTitle>
                            <CardDescription>
                                AI-driven recommendations tailor the learning journey to each
                                student&apos;s individual needs and pace.
                            </CardDescription>
                        </CardHeader>
                    </Card>

                </div>
            </Container>
        </section>
    );
}
