export default function StatsSection() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-secondary mb-2">7-12</div>
                        <div className="text-gray-600">Grade Levels</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                        <div className="text-gray-600">Video Lessons</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
                        <div className="text-gray-600">AI Support</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-primary mb-2">100%</div>
                        <div className="text-gray-600">Curriculum Aligned</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
