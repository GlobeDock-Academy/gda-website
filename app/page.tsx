import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    BookOpen,
    Smartphone,
    Monitor,
    Brain,
    MessageCircle,
    Download,
    BarChart3,
    Users,
    Play,
    FileText,
    ClipboardCheck,
    Trophy,
    Star,
    CheckCircle,
    Globe,
    GraduationCap,
    Zap,
    Shield,
    Heart,
    ArrowRight,
} from 'lucide-react';

export default function HomePage() {
    return (
        <div
            className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50"
            data-oid="d9v4h_l"
        >
            {/* Navigation */}
            <nav
                className="bg-white/80 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50"
                data-oid="64itsn6"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="r2n:uic">
                    <div className="flex justify-between items-center h-16" data-oid="7w_gat4">
                        <div className="flex items-center space-x-2" data-oid="46azt90">
                            <Globe className="h-8 w-8 text-emerald-600" data-oid="j2bk63o" />
                            <span className="text-2xl font-bold text-gray-900" data-oid="koepua9">
                                GlobeDock Academy
                            </span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8" data-oid="x4r57p4">
                            <a
                                href="#features"
                                className="text-gray-700 hover:text-emerald-600 transition-colors"
                                data-oid="uw6wme8"
                            >
                                Features
                            </a>
                            <a
                                href="#content"
                                className="text-gray-700 hover:text-emerald-600 transition-colors"
                                data-oid="rc-3q5l"
                            >
                                Content
                            </a>
                            <a
                                href="#platforms"
                                className="text-gray-700 hover:text-emerald-600 transition-colors"
                                data-oid="wi6xsfq"
                            >
                                Platforms
                            </a>
                            <a
                                href="#parents"
                                className="text-gray-700 hover:text-emerald-600 transition-colors"
                                data-oid=":ubhu7v"
                            >
                                For Parents
                            </a>
                            <Button
                                className="bg-emerald-600 hover:bg-emerald-700"
                                data-oid="b7a80vi"
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8" data-oid="b1v2hrj">
                <div className="max-w-7xl mx-auto" data-oid="oe17936">
                    <div className="grid lg:grid-cols-2 gap-12 items-center" data-oid="un3knmp">
                        <div data-oid=".owc7tl">
                            <Badge
                                className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-100"
                                data-oid="yi8470a"
                            >
                                Ministry-Approved Curriculum
                            </Badge>
                            <h1
                                className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
                                data-oid=":_4b_ea"
                            >
                                Transform Learning for
                                <span className="text-emerald-600" data-oid=".o.19f:">
                                    {' '}
                                    Grade 7-12
                                </span>{' '}
                                Students
                            </h1>
                            <p
                                className="text-xl text-gray-600 mb-8 leading-relaxed"
                                data-oid="us4q7qu"
                            >
                                Experience engaging, locally-contextualized education through our
                                comprehensive e-learning platform. Access quality content anytime,
                                anywhere with microlearning that fits your pace.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-oid="20-h4ai">
                                <Button
                                    size="lg"
                                    className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3"
                                    data-oid="a4k0g2g"
                                >
                                    Start Learning Today
                                    <ArrowRight className="ml-2 h-5 w-5" data-oid="zo96_zg" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-lg px-8 py-3 border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                                    data-oid="ogfa_mk"
                                >
                                    Watch Demo
                                    <Play className="ml-2 h-5 w-5" data-oid="amx1sv0" />
                                </Button>
                            </div>
                            <div
                                className="mt-8 flex items-center space-x-6 text-sm text-gray-600"
                                data-oid="ql63v3b"
                            >
                                <div className="flex items-center" data-oid="jyn_jr:">
                                    <CheckCircle
                                        className="h-5 w-5 text-emerald-600 mr-2"
                                        data-oid="1e39scy"
                                    />
                                    Web & Mobile Access
                                </div>
                                <div className="flex items-center" data-oid="4_0g.-5">
                                    <CheckCircle
                                        className="h-5 w-5 text-emerald-600 mr-2"
                                        data-oid=":o6h28d"
                                    />
                                    Offline Learning
                                </div>
                                <div className="flex items-center" data-oid="yimm2w-">
                                    <CheckCircle
                                        className="h-5 w-5 text-emerald-600 mr-2"
                                        data-oid="ca5.fwh"
                                    />
                                    AI-Powered Support
                                </div>
                            </div>
                        </div>
                        <div className="relative" data-oid="k_j__op">
                            <div
                                className="bg-gradient-to-br from-emerald-400 to-orange-400 rounded-3xl p-8 transform rotate-3 shadow-2xl"
                                data-oid="0dnoa2."
                            >
                                <div
                                    className="bg-white rounded-2xl p-6 transform -rotate-3"
                                    data-oid="p0u8b_o"
                                >
                                    <img
                                        src="/placeholder.svg?height=400&width=500"
                                        alt="GlobeDock Academy Platform Preview"
                                        className="w-full h-auto rounded-lg shadow-lg"
                                        data-oid="967iq2i"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white" data-oid="9c5oo04">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="q1i2m70">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8" data-oid="ky.2ck1">
                        <div className="text-center" data-oid="hcmt6ho">
                            <div
                                className="text-4xl font-bold text-emerald-600 mb-2"
                                data-oid="kvh9vjv"
                            >
                                7-12
                            </div>
                            <div className="text-gray-600" data-oid="w1wqnrq">
                                Grade Levels
                            </div>
                        </div>
                        <div className="text-center" data-oid="y-auiye">
                            <div
                                className="text-4xl font-bold text-orange-600 mb-2"
                                data-oid="x6k04uo"
                            >
                                1000+
                            </div>
                            <div className="text-gray-600" data-oid="elop7ab">
                                Video Lessons
                            </div>
                        </div>
                        <div className="text-center" data-oid="sqdcti1">
                            <div
                                className="text-4xl font-bold text-emerald-600 mb-2"
                                data-oid="45:859u"
                            >
                                24/7
                            </div>
                            <div className="text-gray-600" data-oid="v24n2ib">
                                AI Support
                            </div>
                        </div>
                        <div className="text-center" data-oid="s_.ejrw">
                            <div
                                className="text-4xl font-bold text-orange-600 mb-2"
                                data-oid="vqecdu7"
                            >
                                100%
                            </div>
                            <div className="text-gray-600" data-oid="3iuif4:">
                                Curriculum Aligned
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section
                id="features"
                className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50"
                data-oid="08vp._h"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="wozp9b0">
                    <div className="text-center mb-16" data-oid="74i9kf8">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4" data-oid="f0wx08-">
                            Powerful Features for Modern Learning
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-oid="2izpbh1">
                            Our comprehensive platform combines cutting-edge technology with
                            pedagogical excellence to deliver an unmatched learning experience.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-oid="cv5pri8">
                        <Card
                            className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
                            data-oid="ds0m85_"
                        >
                            <CardHeader data-oid="8m25rbo">
                                <div
                                    className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4"
                                    data-oid="ngi02y-"
                                >
                                    <MessageCircle
                                        className="h-6 w-6 text-emerald-600"
                                        data-oid="krdo2z1"
                                    />
                                </div>
                                <CardTitle data-oid="h64-i7y">AskAI Chat Support</CardTitle>
                                <CardDescription data-oid=":0:-b9y">
                                    Get instant help with our intelligent AI assistant available
                                    24/7 to answer questions and provide guidance.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card
                            className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
                            data-oid="-sqwor7"
                        >
                            <CardHeader data-oid="u3p44in">
                                <div
                                    className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4"
                                    data-oid="yqq.76_"
                                >
                                    <Download
                                        className="h-6 w-6 text-orange-600"
                                        data-oid="_2j_5u6"
                                    />
                                </div>
                                <CardTitle data-oid="lu-8zr9">Offline Downloads</CardTitle>
                                <CardDescription data-oid="2nyd3g8">
                                    Download content for offline access, ensuring learning continues
                                    even without internet connectivity.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card
                            className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
                            data-oid="t9aovk4"
                        >
                            <CardHeader data-oid="rhna_e8">
                                <div
                                    className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4"
                                    data-oid="9e77fvn"
                                >
                                    <BarChart3
                                        className="h-6 w-6 text-emerald-600"
                                        data-oid="l8k5n83"
                                    />
                                </div>
                                <CardTitle data-oid="a15v83.">Learning Analytics</CardTitle>
                                <CardDescription data-oid="9.h6fl.">
                                    Track progress with detailed analytics and insights to optimize
                                    learning outcomes and identify areas for improvement.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card
                            className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
                            data-oid="rz6w2.b"
                        >
                            <CardHeader data-oid="0xyzi-z">
                                <div
                                    className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4"
                                    data-oid="is9hq2n"
                                >
                                    <Brain className="h-6 w-6 text-orange-600" data-oid="a5jjbzl" />
                                </div>
                                <CardTitle data-oid="n6uthvy">Microlearning</CardTitle>
                                <CardDescription data-oid="h5bjazb">
                                    Bite-sized lessons designed for better retention and flexible
                                    learning that fits into any schedule.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card
                            className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
                            data-oid="v31fn6i"
                        >
                            <CardHeader data-oid="ba.wx.e">
                                <div
                                    className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4"
                                    data-oid="ojmwt73"
                                >
                                    <Users
                                        className="h-6 w-6 text-emerald-600"
                                        data-oid="o.zqsj2"
                                    />
                                </div>
                                <CardTitle data-oid="zy8ld6x">Parent Dashboard</CardTitle>
                                <CardDescription data-oid="f1n8__a">
                                    Dedicated parent app to monitor progress, track achievements,
                                    and stay connected with your child's learning journey.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card
                            className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
                            data-oid="yzc:o9g"
                        >
                            <CardHeader data-oid="x9p49pz">
                                <div
                                    className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4"
                                    data-oid="sedzl3a"
                                >
                                    <Shield
                                        className="h-6 w-6 text-orange-600"
                                        data-oid="2p9qhih"
                                    />
                                </div>
                                <CardTitle data-oid="uz:f5t7">Curriculum Aligned</CardTitle>
                                <CardDescription data-oid="4dj90_b">
                                    100% aligned with national curriculum standards, ensuring
                                    students meet all educational requirements.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Content Types Section */}
            <section id="content" className="py-20 bg-white" data-oid="e8bd8o1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="9dbf-o9">
                    <div className="text-center mb-16" data-oid="fydz:2l">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4" data-oid="2pdg8q8">
                            Diverse Content for Every Learning Style
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-oid="8pi8e2a">
                            Our locally-contextualized content is designed to be clear, engaging,
                            and relevant to students' lives and experiences.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-oid="r7.anfq">
                        <div className="text-center group" data-oid="._3n_no">
                            <div
                                className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
                                data-oid="1t7llw4"
                            >
                                <Play className="h-10 w-10 text-white" data-oid="bupnaq." />
                            </div>
                            <h3
                                className="text-xl font-semibold text-gray-900 mb-3"
                                data-oid="_mg1rmw"
                            >
                                Interactive Videos
                            </h3>
                            <p className="text-gray-600" data-oid="jat_cr3">
                                High-quality video lessons with local context and real-world
                                examples that make learning engaging and relatable.
                            </p>
                        </div>

                        <div className="text-center group" data-oid="rlm_.3r">
                            <div
                                className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
                                data-oid="nq0.48k"
                            >
                                <ClipboardCheck
                                    className="h-10 w-10 text-white"
                                    data-oid="lge2:g:"
                                />
                            </div>
                            <h3
                                className="text-xl font-semibold text-gray-900 mb-3"
                                data-oid="hn1iux0"
                            >
                                Smart Quizzes
                            </h3>
                            <p className="text-gray-600" data-oid="4rmc-f0">
                                Interactive quizzes with instant feedback to reinforce learning and
                                identify knowledge gaps.
                            </p>
                        </div>

                        <div className="text-center group" data-oid="sl2s5f-">
                            <div
                                className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
                                data-oid="zrv5v0a"
                            >
                                <FileText className="h-10 w-10 text-white" data-oid="p2isofd" />
                            </div>
                            <h3
                                className="text-xl font-semibold text-gray-900 mb-3"
                                data-oid="ewz_q71"
                            >
                                Concise Notes
                            </h3>
                            <p className="text-gray-600" data-oid="yy54xpq">
                                Well-structured short notes that summarize key concepts for quick
                                review and exam preparation.
                            </p>
                        </div>

                        <div className="text-center group" data-oid="st7z_1-">
                            <div
                                className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
                                data-oid="8qi93i."
                            >
                                <Trophy className="h-10 w-10 text-white" data-oid="7v94s7s" />
                            </div>
                            <h3
                                className="text-xl font-semibold text-gray-900 mb-3"
                                data-oid="bzgnmyb"
                            >
                                Practice Exams
                            </h3>
                            <p className="text-gray-600" data-oid="4tk2049">
                                Comprehensive practice exams that simulate real test conditions and
                                build confidence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Access Section */}
            <section
                id="platforms"
                className="py-20 bg-gradient-to-br from-emerald-50 to-orange-50"
                data-oid="60p6b_2"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="kls0te.">
                    <div className="text-center mb-16" data-oid="a__eukk">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4" data-oid="lp7_zeo">
                            Learn Anywhere, Anytime
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-oid="6xiurx2">
                            Access GlobeDock Academy on all your devices with seamless
                            synchronization across platforms.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8" data-oid="s-9qw4l">
                        <Card
                            className="border-0 shadow-lg bg-white text-center p-8"
                            data-oid="cz_f2h0"
                        >
                            <div
                                className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
                                data-oid="pc6-b1t"
                            >
                                <Monitor className="h-8 w-8 text-emerald-600" data-oid="ff3-z48" />
                            </div>
                            <CardTitle className="text-2xl mb-4" data-oid="8gn8axv">
                                Web Application
                            </CardTitle>
                            <CardDescription className="text-base" data-oid="hii1g90">
                                Full-featured web platform accessible from any browser with rich
                                interactive content and seamless navigation.
                            </CardDescription>
                        </Card>

                        <Card
                            className="border-0 shadow-lg bg-white text-center p-8"
                            data-oid="o015.ii"
                        >
                            <div
                                className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
                                data-oid="aa._ege"
                            >
                                <Smartphone
                                    className="h-8 w-8 text-orange-600"
                                    data-oid="exoel37"
                                />
                            </div>
                            <CardTitle className="text-2xl mb-4" data-oid="ka-g12o">
                                Mobile Apps
                            </CardTitle>
                            <CardDescription className="text-base" data-oid="qh0jnvo">
                                Native iOS and Android apps optimized for mobile learning with
                                offline capabilities and push notifications.
                            </CardDescription>
                        </Card>

                        <Card
                            className="border-0 shadow-lg bg-white text-center p-8"
                            data-oid="a2rjc_6"
                        >
                            <div
                                className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
                                data-oid="53rtb.h"
                            >
                                <Zap className="h-8 w-8 text-emerald-600" data-oid="-29u72o" />
                            </div>
                            <CardTitle className="text-2xl mb-4" data-oid="q8kuv4x">
                                Sync Across Devices
                            </CardTitle>
                            <CardDescription className="text-base" data-oid="_levyvq">
                                Start learning on one device and continue on another with automatic
                                progress synchronization.
                            </CardDescription>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Parent Features Section */}
            <section id="parents" className="py-20 bg-white" data-oid="-3--nv0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="r89-a_9">
                    <div className="grid lg:grid-cols-2 gap-12 items-center" data-oid="v3qxd._">
                        <div data-oid="shzb0j9">
                            <h2
                                className="text-4xl font-bold text-gray-900 mb-6"
                                data-oid="nems0sj"
                            >
                                Empower Parents in the Learning Journey
                            </h2>
                            <p className="text-xl text-gray-600 mb-8" data-oid="5tas9.b">
                                Stay connected with your child's educational progress through our
                                comprehensive parent dashboard and mobile app.
                            </p>

                            <div className="space-y-6" data-oid="q7i_7:s">
                                <div className="flex items-start space-x-4" data-oid="4ep8.iu">
                                    <div
                                        className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                                        data-oid="n16-5wg"
                                    >
                                        <BarChart3
                                            className="h-4 w-4 text-emerald-600"
                                            data-oid=":ekz89e"
                                        />
                                    </div>
                                    <div data-oid="369hw69">
                                        <h3
                                            className="font-semibold text-gray-900 mb-2"
                                            data-oid="npix:0y"
                                        >
                                            Real-time Progress Tracking
                                        </h3>
                                        <p className="text-gray-600" data-oid="arnn-bp">
                                            Monitor your child's learning progress, completed
                                            lessons, and performance metrics in real-time.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="eyookzw">
                                    <div
                                        className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                                        data-oid="w1d-to:"
                                    >
                                        <Trophy
                                            className="h-4 w-4 text-orange-600"
                                            data-oid="8cs.myp"
                                        />
                                    </div>
                                    <div data-oid="nu:k6r0">
                                        <h3
                                            className="font-semibold text-gray-900 mb-2"
                                            data-oid="zvqdps8"
                                        >
                                            Achievement Notifications
                                        </h3>
                                        <p className="text-gray-600" data-oid="carn3c:">
                                            Receive instant notifications when your child completes
                                            milestones or achieves learning goals.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="m-pmcqi">
                                    <div
                                        className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                                        data-oid="lz7.-7c"
                                    >
                                        <Heart
                                            className="h-4 w-4 text-emerald-600"
                                            data-oid="r3j9ln:"
                                        />
                                    </div>
                                    <div data-oid="kw5njxy">
                                        <h3
                                            className="font-semibold text-gray-900 mb-2"
                                            data-oid="c3umz2:"
                                        >
                                            Learning Insights
                                        </h3>
                                        <p className="text-gray-600" data-oid="pd7ppi2">
                                            Get detailed insights into learning patterns, strengths,
                                            and areas that need attention.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative" data-oid="76k59rc">
                            <img
                                src="/placeholder.svg?height=500&width=600"
                                alt="Parent Dashboard Preview"
                                className="w-full h-auto rounded-2xl shadow-2xl"
                                data-oid="wdc6u1g"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section
                className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50"
                data-oid="xs7xhmj"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="k4:e5e_">
                    <div className="text-center mb-16" data-oid="4xx0m17">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4" data-oid="vvrft4w">
                            What Students and Parents Say
                        </h2>
                        <p className="text-xl text-gray-600" data-oid="qjrm55x">
                            Real feedback from our learning community
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8" data-oid="c4i.vsx">
                        <Card className="border-0 shadow-lg bg-white" data-oid="81ymsnp">
                            <CardContent className="p-6" data-oid=":4bs5-h">
                                <div className="flex items-center mb-4" data-oid="kcfxjfd">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-5 w-5 text-yellow-400 fill-current"
                                            data-oid="5.d_y70"
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-4" data-oid="8g8xka_">
                                    "GlobeDock Academy made learning so much easier! The videos are
                                    clear and the AI chat helps me whenever I'm stuck."
                                </p>
                                <div className="flex items-center" data-oid="cnoct0g">
                                    <div
                                        className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3"
                                        data-oid="r8oqe_o"
                                    >
                                        <GraduationCap
                                            className="h-5 w-5 text-emerald-600"
                                            data-oid="bww:sts"
                                        />
                                    </div>
                                    <div data-oid="i4z:267">
                                        <div
                                            className="font-semibold text-gray-900"
                                            data-oid="-5xv76d"
                                        >
                                            Sarah M.
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="w8341r_">
                                            Grade 10 Student
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg bg-white" data-oid="0vfj991">
                            <CardContent className="p-6" data-oid="nrd5thf">
                                <div className="flex items-center mb-4" data-oid="sozrjgw">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-5 w-5 text-yellow-400 fill-current"
                                            data-oid="cdz7tij"
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-4" data-oid="z2tmdxe">
                                    "As a parent, I love being able to track my daughter's progress.
                                    The parent app keeps me informed and engaged."
                                </p>
                                <div className="flex items-center" data-oid="jmoub_a">
                                    <div
                                        className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3"
                                        data-oid="-e.jyfx"
                                    >
                                        <Users
                                            className="h-5 w-5 text-orange-600"
                                            data-oid="2yeaudv"
                                        />
                                    </div>
                                    <div data-oid="4aa58di">
                                        <div
                                            className="font-semibold text-gray-900"
                                            data-oid="f:22zfn"
                                        >
                                            Michael K.
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="3pqslfp">
                                            Parent
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg bg-white" data-oid="2h82:11">
                            <CardContent className="p-6" data-oid="72zz:rd">
                                <div className="flex items-center mb-4" data-oid="97f7uw4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-5 w-5 text-yellow-400 fill-current"
                                            data-oid="erjh9ye"
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-4" data-oid="oi1z06s">
                                    "The offline feature is amazing! I can study even when there's
                                    no internet. The content is really well explained."
                                </p>
                                <div className="flex items-center" data-oid="5qsu:oa">
                                    <div
                                        className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3"
                                        data-oid="60r9orw"
                                    >
                                        <BookOpen
                                            className="h-5 w-5 text-emerald-600"
                                            data-oid="qfxkhp0"
                                        />
                                    </div>
                                    <div data-oid="ba9b2j9">
                                        <div
                                            className="font-semibold text-gray-900"
                                            data-oid="snqq8ke"
                                        >
                                            Ahmed R.
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="s:hzqxm">
                                            Grade 12 Student
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section
                className="py-20 bg-gradient-to-r from-emerald-600 to-orange-600"
                data-oid="o.h3.76"
            >
                <div
                    className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
                    data-oid="rtzolm."
                >
                    <h2 className="text-4xl font-bold text-white mb-6" data-oid="oaopfge">
                        Ready to Transform Your Learning Experience?
                    </h2>
                    <p className="text-xl text-emerald-100 mb-8" data-oid="k:jb65:">
                        Join thousands of students already excelling with GlobeDock Academy. Start
                        your journey to academic success today.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-oid="1i5lq3g"
                    >
                        <Button
                            size="lg"
                            className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-3"
                            data-oid="6f_rd3o"
                        >
                            Start Free Trial
                            <ArrowRight className="ml-2 h-5 w-5" data-oid="guachz6" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-3"
                            data-oid="rdsyqc2"
                        >
                            Schedule Demo
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16" data-oid="sm3q5lu">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="5zpz-tg">
                    <div className="grid md:grid-cols-4 gap-8" data-oid="auoo..-">
                        <div data-oid="gvk7gw.">
                            <div className="flex items-center space-x-2 mb-4" data-oid="efhzvhi">
                                <Globe className="h-8 w-8 text-emerald-400" data-oid=".u4k_0b" />
                                <span className="text-2xl font-bold" data-oid="4leo-:a">
                                    GlobeDock Academy
                                </span>
                            </div>
                            <p className="text-gray-400 mb-4" data-oid="73c_-bh">
                                Empowering students with quality education through innovative
                                e-learning solutions.
                            </p>
                        </div>

                        <div data-oid="povd1m4">
                            <h3 className="font-semibold mb-4" data-oid="2q7dopy">
                                Platform
                            </h3>
                            <ul className="space-y-2 text-gray-400" data-oid="e1h3kwa">
                                <li data-oid="fsgdq0q">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="ihy4ghr"
                                    >
                                        Web App
                                    </a>
                                </li>
                                <li data-oid="4hjq8vl">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="i:_fqt0"
                                    >
                                        Mobile Apps
                                    </a>
                                </li>
                                <li data-oid="9-cj.b6">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="j5h8.ds"
                                    >
                                        Parent Dashboard
                                    </a>
                                </li>
                                <li data-oid="1r3hepu">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="h76bd-v"
                                    >
                                        Features
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div data-oid="iqmhbd5">
                            <h3 className="font-semibold mb-4" data-oid="ih864wv">
                                Support
                            </h3>
                            <ul className="space-y-2 text-gray-400" data-oid="1ku2xsy">
                                <li data-oid="nn.7:ep">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="ucqpu:5"
                                    >
                                        Help Center
                                    </a>
                                </li>
                                <li data-oid="h3rgtpf">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="zulclo6"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li data-oid="lqg97ev">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="3jimxk1"
                                    >
                                        System Status
                                    </a>
                                </li>
                                <li data-oid="x8kccce">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="sr78464"
                                    >
                                        Community
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div data-oid="d3-gd_8">
                            <h3 className="font-semibold mb-4" data-oid="5:i3:f-">
                                Company
                            </h3>
                            <ul className="space-y-2 text-gray-400" data-oid="1qixxaa">
                                <li data-oid="5o85erd">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="-rw3nol"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li data-oid="gg-9imf">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="vhe5rea"
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li data-oid="40kvyvu">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="k-m3n8b"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li data-oid="fj-gmmn">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="mwoy62a"
                                    >
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
                        data-oid="gvshtld"
                    >
                        <p data-oid="5-al7vi">
                            &copy; 2024 GlobeDock Academy. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
