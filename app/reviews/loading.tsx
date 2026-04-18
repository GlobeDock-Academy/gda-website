export default function Loading() {
    return (
        <main className="min-h-screen bg-white" style={{ fontFamily: 'Silka, Arial, sans-serif' }}>
            <div className="px-4 sm:px-8 lg:px-16 xl:px-20 pt-24 pb-10 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-[60px] font-extrabold leading-tight lg:leading-[69px] text-black mb-5 tracking-normal">
                    Hear from the community
                </h1>
                <p className="text-[20px] font-medium leading-[30px] text-black/55 max-w-[720px] mx-auto">
                    Check out our Wall of Love where GlobeDock Academy community members share highlights of their learning journey.
                </p>
            </div>

            <div className="mt-8 sm:mt-16" aria-hidden="true" />

            <div className="px-2 sm:px-4 lg:px-8 xl:px-10 pb-24">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div
                            key={i}
                            className="rounded-lg bg-gray-100 animate-pulse"
                            style={{ aspectRatio: i % 3 === 0 ? '9 / 16' : '4 / 3' }}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
