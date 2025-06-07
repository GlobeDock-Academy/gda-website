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
            data-oid="1fs7-1k"
        >
            {/* Navigation */}
            <nav
                className="bg-white/80 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50"
                data-oid="whd.f4g"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="34j3i1k">
                    <div className="flex justify-between items-center h-16" data-oid="4ce3jyb">
                        <div className="flex items-center space-x-2" data-oid="v:-zm.j">
                            <Globe className="h-8 w-8 text-emerald-600" data-oid="cp672fg" />
                            <span className="text-2xl font-bold text-gray-900" data-oid="8o76zer">
                                GlobeDock Academy
                            </span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8" data-oid=".jvjtd.">
                            <a
                                href="#features"
                                className="text-gray-700 hover:text-emerald-600 transition-colors"
                                data-oid="7uuiehd"
                            >
                                Features
                            </a>
                            <a
                                href="#content"
                                className="text-gray-700 hover:text-emerald-600 transition-colors"
                                data-oid="oim4y-z"
                            >
                                Content
                            </a>
                            <a
                                href="#platforms"
                                className="text-gray-700 hover:text-emerald-600 transition-colors"
                                data-oid="55otedx"
                            >
                                Platforms
                            </a>
                            <a
                                href="#parents"
                                className="text-gray-700 hover:text-emerald-600 transition-colors"
                                data-oid="1.r.-ix"
                            >
                                For Parents
                            </a>
                            <Button
                                className="bg-emerald-600 hover:bg-emerald-700"
                                data-oid="cqan85m"
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8" data-oid="gnw:pya">
                <div className="max-w-7xl mx-auto" data-oid="oug9xca">
                    <div className="grid lg:grid-cols-2 gap-12 items-center" data-oid="sdnh2i:">
                        <div data-oid="m2:r9.c">
                            <Badge
                                className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-100"
                                data-oid="hd34qhp"
                            >
                                Ministry-Approved Curriculum
                            </Badge>
                            <h1
                                className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
                                data-oid="w_h0ysv"
                            >
                                Transform Learning for
                                <span className="text-emerald-600" data-oid="zi.bxsm">
                                    {' '}
                                    Grade 7-12
                                </span>{' '}
                                Students
                            </h1>
                            <p
                                className="text-xl text-gray-600 mb-8 leading-relaxed"
                                data-oid="0z.45sm"
                            >
                                Experience engaging, locally-contextualized education through our
                                comprehensive e-learning platform. Access quality content anytime,
                                anywhere with microlearning that fits your pace.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-oid="0drs6j.">
                                <Button
                                    size="lg"
                                    className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3"
                                    data-oid="tveic07"
                                >
                                    Start Learning Today
                                    <ArrowRight className="ml-2 h-5 w-5" data-oid="buw:wtk" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-lg px-8 py-3 border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                                    data-oid=":n9qzsk"
                                >
                                    Watch Demo
                                    <Play className="ml-2 h-5 w-5" data-oid="9st0qpw" />
                                </Button>
                            </div>
                            <div
                                className="mt-8 flex items-center space-x-6 text-sm text-gray-600"
                                data-oid="4eti6hl"
                            >
                                <div className="flex items-center" data-oid="qtv5ssl">
                                    <CheckCircle
                                        className="h-5 w-5 text-emerald-600 mr-2"
                                        data-oid="f_au0fj"
                                    />
                                    Web & Mobile Access
                                </div>
                                <div className="flex items-center" data-oid="tgwja7v">
                                    <CheckCircle
                                        className="h-5 w-5 text-emerald-600 mr-2"
                                        data-oid="w7iq0ey"
                                    />
                                    Offline Learning
                                </div>
                                <div className="flex items-center" data-oid="so137ce">
                                    <CheckCircle
                                        className="h-5 w-5 text-emerald-600 mr-2"
                                        data-oid="tfy4.1-"
                                    />
                                    AI-Powered Support
                                </div>
                            </div>
                        </div>
                        <div className="relative" data-oid="ztnpcf3">
                            <div
                                className="bg-gradient-to-br from-emerald-400 to-orange-400 rounded-3xl p-8 transform rotate-3 shadow-2xl"
                                data-oid="in8j4aj"
                            >
                                <div
                                    className="bg-white rounded-2xl p-6 transform -rotate-3"
                                    data-oid="lc:f77d"
                                >
                                    <img
                                        src="/placeholder.svg?height=400&width=500"
                                        alt="GlobeDock Academy Platform Preview"
                                        className="w-full h-auto rounded-lg shadow-lg"
                                        data-oid="h0ziubp"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white" data-oid="m1n8hrq">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid=".pc5w9u">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8" data-oid="xjr1vl.">
                        <div className="text-center" data-oid="b9:oxlv">
                            <div
                                className="text-4xl font-bold text-emerald-600 mb-2"
                                data-oid="y02jssf"
                            >
                                7-12
                            </div>
                            <div className="text-gray-600" data-oid="z4j32hp">
                                Grade Levels
                            </div>
                        </div>
                        <div className="text-center" data-oid="ihwlqbu">
                            <div
                                className="text-4xl font-bold text-orange-600 mb-2"
                                data-oid="jheluf3"
                            >
                                1000+
                            </div>
                            <div className="text-gray-600" data-oid="1aa0s:s">
                                Video Lessons
                            </div>
                        </div>
                        <div className="text-center" data-oid="_pp0:y_">
                            <div
                                className="text-4xl font-bold text-emerald-600 mb-2"
                                data-oid="z141zn_"
                            >
                                24/7
                            </div>
                            <div className="text-gray-600" data-oid="_8w0mk-">
                                AI Support
                            </div>
                        </div>
                        <div className="text-center" data-oid="chhtp3h">
                            <div
                                className="text-4xl font-bold text-orange-600 mb-2"
                                data-oid="_0._pv5"
                            >
                                100%
                            </div>
                            <div className="text-gray-600" data-oid="kyn2-:5">
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
                data-oid="zu0ikeb"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="_vinobq">
                    <div className="text-center mb-16" data-oid="a2-mcen">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4" data-oid="do_idam">
                            Powerful Features for Modern Learning
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-oid="2tp3jx6">
                            Our comprehensive platform combines cutting-edge technology with
                            pedagogical excellence to deliver an unmatched learning experience.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-oid="fx-7ikz">
                        <Card
                            className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
                            data-oid="vi1juxd"
                        >
                            <CardHeader data-oid="ijwldxw">
                                <div
                                    className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4"
                                    data-oid="837q4nv"
                                >
                                    <MessageCircle
                                        className="h-6 w-6 text-emerald-600"
                                        data-oid="ep:2_3i"
                                    />
                                </div>
                                <CardTitle data-oid="r9e_k8n">AskAI Chat Support</CardTitle>
                                <CardDescription data-oid="rx7.6mt">
                                    Get instant help with our intelligent AI assistant available
                                    24/7 to answer questions and provide guidance.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card
                            className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
                            data-oid="m.humvs"
                        >
                            <CardHeader data-oid="erngnha">
                                <div
                                    className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4"
                                    data-oid="l74tapv"
                                >
                                    <Download
                                        className="h-6 w-6 text-orange-600"
                                        data-oid="x18n3.o"
                                    />
                                </div>
                                <CardTitle data-oid="i2sq.-s">Offline Downloads</CardTitle>
                                <CardDescription data-oid="u:4.4w2">
                                    Download content for offline access, ensuring learning continues
                                    even without internet connectivity.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card
                            className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
                            data-oid="n71_-y1"
                        >
                            <CardHeader data-oid="5ps294s">
                                <div
                                    className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4"
                                    data-oid="vj3:93r"
                                >
                                    <BarChart3
                                        className="h-6 w-6 text-emerald-600"
                                        data-oid="0jr65fg"
                                    />
                                </div>
                                <CardTitle data-oid="gfywe18">Learning Analytics</CardTitle>
                                <CardDescription data-oid="r9oaq0f">
                                    Track progress with detailed analytics and insights to optimize
                                    learning outcomes and identify areas for improvement.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card
                            className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
                            data-oid="fc3qhas"
                        >
                            <CardHeader data-oid="w2jcp-k">
                                <div
                                    className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4"
                                    data-oid="6vau168"
                                >
                                    <Brain className="h-6 w-6 text-orange-600" data-oid="iqkh8o1" />
                                </div>
                                <CardTitle data-oid="gtqgb1n">Microlearning</CardTitle>
                                <CardDescription data-oid=":so:mxk">
                                    Bite-sized lessons designed for better retention and flexible
                                    learning that fits into any schedule.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card
                            className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
                            data-oid="bv6td-n"
                        >
                            <CardHeader data-oid="bj6:lq3">
                                <div
                                    className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4"
                                    data-oid="jl8181q"
                                >
                                    <Users
                                        className="h-6 w-6 text-emerald-600"
                                        data-oid="gvmo:xz"
                                    />
                                </div>
                                <CardTitle data-oid="_be4b_f">Parent Dashboard</CardTitle>
                                <CardDescription data-oid="z8wj2h.">
                                    Dedicated parent app to monitor progress, track achievements,
                                    and stay connected with your child's learning journey.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card
                            className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
                            data-oid="_qdksrj"
                        >
                            <CardHeader data-oid="u87jkja">
                                <div
                                    className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4"
                                    data-oid="ibvp5r0"
                                >
                                    <Shield
                                        className="h-6 w-6 text-orange-600"
                                        data-oid="xaipgmx"
                                    />
                                </div>
                                <CardTitle data-oid="07frhai">Curriculum Aligned</CardTitle>
                                <CardDescription data-oid="6ga1q68">
                                    100% aligned with national curriculum standards, ensuring
                                    students meet all educational requirements.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Content Types Section */}
            <section id="content" className="py-20 bg-white" data-oid="e1zhxfv">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="21rxtw3">
                    <div className="text-center mb-16" data-oid="sn04ak2">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4" data-oid="x8ql0s0">
                            Diverse Content for Every Learning Style
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-oid="riiq3ov">
                            Our locally-contextualized content is designed to be clear, engaging,
                            and relevant to students' lives and experiences.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-oid="yiqf1_n">
                        <div className="text-center group" data-oid="epg8::r">
                            <div
                                className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
                                data-oid="d-m.eao"
                            >
                                <Play className="h-10 w-10 text-white" data-oid="2:0m9-i" />
                            </div>
                            <h3
                                className="text-xl font-semibold text-gray-900 mb-3"
                                data-oid="80_xfkk"
                            >
                                Interactive Videos
                            </h3>
                            <p className="text-gray-600" data-oid="11cahzy">
                                High-quality video lessons with local context and real-world
                                examples that make learning engaging and relatable.
                            </p>
                        </div>

                        <div className="text-center group" data-oid="fnuw.vn">
                            <div
                                className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
                                data-oid="n-xc94m"
                            >
                                <ClipboardCheck
                                    className="h-10 w-10 text-white"
                                    data-oid="p3e.h:a"
                                />
                            </div>
                            <h3
                                className="text-xl font-semibold text-gray-900 mb-3"
                                data-oid="kmlbd9b"
                            >
                                Smart Quizzes
                            </h3>
                            <p className="text-gray-600" data-oid="a.m8k-a">
                                Interactive quizzes with instant feedback to reinforce learning and
                                identify knowledge gaps.
                            </p>
                        </div>

                        <div className="text-center group" data-oid="c00px:.">
                            <div
                                className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
                                data-oid="x1.2n79"
                            >
                                <FileText className="h-10 w-10 text-white" data-oid="h6dmasy" />
                            </div>
                            <h3
                                className="text-xl font-semibold text-gray-900 mb-3"
                                data-oid="5vi:vod"
                            >
                                Concise Notes
                            </h3>
                            <p className="text-gray-600" data-oid="dy-9sr2">
                                Well-structured short notes that summarize key concepts for quick
                                review and exam preparation.
                            </p>
                        </div>

                        <div className="text-center group" data-oid="4ohoyet">
                            <div
                                className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
                                data-oid=".lfzi9e"
                            >
                                <Trophy className="h-10 w-10 text-white" data-oid="vs:gw2g" />
                            </div>
                            <h3
                                className="text-xl font-semibold text-gray-900 mb-3"
                                data-oid="0rdyx3c"
                            >
                                Practice Exams
                            </h3>
                            <p className="text-gray-600" data-oid="wvx1ln6">
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
                data-oid="29bmdu-"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="9q26g6r">
                    <div className="text-center mb-16" data-oid="g11swty">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4" data-oid="w9rmu2b">
                            Learn Anywhere, Anytime
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-oid="k_jxzyy">
                            Access GlobeDock Academy on all your devices with seamless
                            synchronization across platforms.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8" data-oid="0y9pu6y">
                        <Card
                            className="border-0 shadow-lg bg-white text-center p-8"
                            data-oid="dvl7:or"
                        >
                            <div
                                className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
                                data-oid="8bk9:1d"
                            >
                                <Monitor className="h-8 w-8 text-emerald-600" data-oid="89gjycl" />
                            </div>
                            <CardTitle className="text-2xl mb-4" data-oid="_c7h_2e">
                                Web Application
                            </CardTitle>
                            <CardDescription className="text-base" data-oid="ch.k_oq">
                                Full-featured web platform accessible from any browser with rich
                                interactive content and seamless navigation.
                            </CardDescription>
                        </Card>

                        <Card
                            className="border-0 shadow-lg bg-white text-center p-8"
                            data-oid="7ang.u7"
                        >
                            <div
                                className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
                                data-oid="_8.-kiy"
                            >
                                <Smartphone
                                    className="h-8 w-8 text-orange-600"
                                    data-oid="i9grc30"
                                />
                            </div>
                            <CardTitle className="text-2xl mb-4" data-oid="6jtd86z">
                                Mobile Apps
                            </CardTitle>
                            <CardDescription className="text-base" data-oid="rf:sxbd">
                                Native iOS and Android apps optimized for mobile learning with
                                offline capabilities and push notifications.
                            </CardDescription>
                        </Card>

                        <Card
                            className="border-0 shadow-lg bg-white text-center p-8"
                            data-oid="1ens9g5"
                        >
                            <div
                                className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
                                data-oid="1lq120e"
                            >
                                <Zap className="h-8 w-8 text-emerald-600" data-oid="b7fablj" />
                            </div>
                            <CardTitle className="text-2xl mb-4" data-oid="fjxxe02">
                                Sync Across Devices
                            </CardTitle>
                            <CardDescription className="text-base" data-oid="nizvq51">
                                Start learning on one device and continue on another with automatic
                                progress synchronization.
                            </CardDescription>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Parent Features Section */}
            <section id="parents" className="py-20 bg-white" data-oid="uxonst1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="_xgf7le">
                    <div className="grid lg:grid-cols-2 gap-12 items-center" data-oid="7xo.zku">
                        <div data-oid="uxvrfws">
                            <h2
                                className="text-4xl font-bold text-gray-900 mb-6"
                                data-oid="hlg9p9c"
                            >
                                Empower Parents in the Learning Journey
                            </h2>
                            <p className="text-xl text-gray-600 mb-8" data-oid="mhy_gvp">
                                Stay connected with your child's educational progress through our
                                comprehensive parent dashboard and mobile app.
                            </p>

                            <div className="space-y-6" data-oid="fdhu62.">
                                <div className="flex items-start space-x-4" data-oid="x_qt2kf">
                                    <div
                                        className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                                        data-oid="qe-a045"
                                    >
                                        <BarChart3
                                            className="h-4 w-4 text-emerald-600"
                                            data-oid="k2gg1t."
                                        />
                                    </div>
                                    <div data-oid=":45kcp5">
                                        <h3
                                            className="font-semibold text-gray-900 mb-2"
                                            data-oid="yvuaiv0"
                                        >
                                            Real-time Progress Tracking
                                        </h3>
                                        <p className="text-gray-600" data-oid="ra9hydz">
                                            Monitor your child's learning progress, completed
                                            lessons, and performance metrics in real-time.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="qvifvc4">
                                    <div
                                        className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                                        data-oid="q-2-hhd"
                                    >
                                        <Trophy
                                            className="h-4 w-4 text-orange-600"
                                            data-oid="6i5p96."
                                        />
                                    </div>
                                    <div data-oid="g3fl2ys">
                                        <h3
                                            className="font-semibold text-gray-900 mb-2"
                                            data-oid="zutxpki"
                                        >
                                            Achievement Notifications
                                        </h3>
                                        <p className="text-gray-600" data-oid=":nv8qq5">
                                            Receive instant notifications when your child completes
                                            milestones or achieves learning goals.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="lax9zat">
                                    <div
                                        className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                                        data-oid="j_fz9zg"
                                    >
                                        <Heart
                                            className="h-4 w-4 text-emerald-600"
                                            data-oid="pklb96l"
                                        />
                                    </div>
                                    <div data-oid="ipq1g-5">
                                        <h3
                                            className="font-semibold text-gray-900 mb-2"
                                            data-oid="_jl9..u"
                                        >
                                            Learning Insights
                                        </h3>
                                        <p className="text-gray-600" data-oid="idmoe5:">
                                            Get detailed insights into learning patterns, strengths,
                                            and areas that need attention.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative" data-oid="htj_:57">
                            <img
                                src="/placeholder.svg?height=500&width=600"
                                alt="Parent Dashboard Preview"
                                className="w-full h-auto rounded-2xl shadow-2xl"
                                data-oid="sct7b8-"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section
                className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50"
                data-oid="_8v_-w7"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="1ksasr6">
                    <div className="text-center mb-16" data-oid="sl4_zk.">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4" data-oid="ahegeos">
                            What Students and Parents Say
                        </h2>
                        <p className="text-xl text-gray-600" data-oid="wrfter8">
                            Real feedback from our learning community
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8" data-oid="yirnqx_">
                        <Card className="border-0 shadow-lg bg-white" data-oid="k9nruxl">
                            <CardContent className="p-6" data-oid="gaojuvi">
                                <div className="flex items-center mb-4" data-oid="ke.cco.">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-5 w-5 text-yellow-400 fill-current"
                                            data-oid="rqs4d7u"
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-4" data-oid="cbzvg86">
                                    "GlobeDock Academy made learning so much easier! The videos are
                                    clear and the AI chat helps me whenever I'm stuck."
                                </p>
                                <div className="flex items-center" data-oid="hmmol44">
                                    <div
                                        className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3"
                                        data-oid="z3b:2tm"
                                    >
                                        <GraduationCap
                                            className="h-5 w-5 text-emerald-600"
                                            data-oid="zzh2h6h"
                                        />
                                    </div>
                                    <div data-oid="53.:vmo">
                                        <div
                                            className="font-semibold text-gray-900"
                                            data-oid="9bf5vuk"
                                        >
                                            Sarah M.
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="junl09o">
                                            Grade 10 Student
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg bg-white" data-oid="f8rligy">
                            <CardContent className="p-6" data-oid="ei2oukj">
                                <div className="flex items-center mb-4" data-oid="1_2yx15">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-5 w-5 text-yellow-400 fill-current"
                                            data-oid="7v.ibg_"
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-4" data-oid="rma2a0v">
                                    "As a parent, I love being able to track my daughter's progress.
                                    The parent app keeps me informed and engaged."
                                </p>
                                <div className="flex items-center" data-oid="5r4cbxg">
                                    <div
                                        className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3"
                                        data-oid="hplpb3o"
                                    >
                                        <Users
                                            className="h-5 w-5 text-orange-600"
                                            data-oid="vbdym3q"
                                        />
                                    </div>
                                    <div data-oid="mth-8lh">
                                        <div
                                            className="font-semibold text-gray-900"
                                            data-oid="b0mljd_"
                                        >
                                            Michael K.
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="042g5_9">
                                            Parent
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg bg-white" data-oid="7nmo4js">
                            <CardContent className="p-6" data-oid="6njf_wh">
                                <div className="flex items-center mb-4" data-oid="1m8.7s8">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-5 w-5 text-yellow-400 fill-current"
                                            data-oid="qe5ytv0"
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-4" data-oid="lfrfgdb">
                                    "The offline feature is amazing! I can study even when there's
                                    no internet. The content is really well explained."
                                </p>
                                <div className="flex items-center" data-oid=":7-cg3g">
                                    <div
                                        className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3"
                                        data-oid="ha:ueqp"
                                    >
                                        <BookOpen
                                            className="h-5 w-5 text-emerald-600"
                                            data-oid="acydxsh"
                                        />
                                    </div>
                                    <div data-oid="uycencn">
                                        <div
                                            className="font-semibold text-gray-900"
                                            data-oid=".keu5-9"
                                        >
                                            Ahmed R.
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="qx6ral5">
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
                data-oid="ylvq-s:"
            >
                <div
                    className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
                    data-oid="1k-po2o"
                >
                    <h2 className="text-4xl font-bold text-white mb-6" data-oid=".u_4jda">
                        Ready to Transform Your Learning Experience?
                    </h2>
                    <p className="text-xl text-emerald-100 mb-8" data-oid="-_tt4c0">
                        Join thousands of students already excelling with GlobeDock Academy. Start
                        your journey to academic success today.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-oid="myu3qdo"
                    >
                        <Button
                            size="lg"
                            className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-3"
                            data-oid="3zqy2l8"
                        >
                            Start Free Trial
                            <ArrowRight className="ml-2 h-5 w-5" data-oid="12kwire" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-3"
                            data-oid="b.tmqoh"
                        >
                            Schedule Demo
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16" data-oid="i9wz1rq">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="zy2oegw">
                    <div className="grid md:grid-cols-4 gap-8" data-oid="ye.ucd0">
                        <div data-oid="3h4u3lu">
                            <div className="flex items-center space-x-2 mb-4" data-oid="45.64.s">
                                <Globe className="h-8 w-8 text-emerald-400" data-oid="hjc4fnk" />
                                <span className="text-2xl font-bold" data-oid="y-c48qj">
                                    GlobeDock Academy
                                </span>
                            </div>
                            <p className="text-gray-400 mb-4" data-oid="b10fswe">
                                Empowering students with quality education through innovative
                                e-learning solutions.
                            </p>
                        </div>

                        <div data-oid="1wb1_l9">
                            <h3 className="font-semibold mb-4" data-oid="k:od8tr">
                                Platform
                            </h3>
                            <ul className="space-y-2 text-gray-400" data-oid=":za3:pz">
                                <li data-oid="wygu0e2">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="7qyj_zs"
                                    >
                                        Web App
                                    </a>
                                </li>
                                <li data-oid="8wbm-ut">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="m3lec2k"
                                    >
                                        Mobile Apps
                                    </a>
                                </li>
                                <li data-oid="q4hy6az">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="63i.ny_"
                                    >
                                        Parent Dashboard
                                    </a>
                                </li>
                                <li data-oid="-x.-xx6">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="u779nzt"
                                    >
                                        Features
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div data-oid="ij119nf">
                            <h3 className="font-semibold mb-4" data-oid="5zapj0q">
                                Support
                            </h3>
                            <ul className="space-y-2 text-gray-400" data-oid="bs8i7oz">
                                <li data-oid="ev4fluj">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="lr2yiuz"
                                    >
                                        Help Center
                                    </a>
                                </li>
                                <li data-oid="d6po333">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="n2:ne9p"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li data-oid="fq6akzy">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="wpznidl"
                                    >
                                        System Status
                                    </a>
                                </li>
                                <li data-oid="dlb_4_x">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid=":8ncz:-"
                                    >
                                        Community
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div data-oid="klpejr9">
                            <h3 className="font-semibold mb-4" data-oid="uuwnw3o">
                                Company
                            </h3>
                            <ul className="space-y-2 text-gray-400" data-oid="9zj4m36">
                                <li data-oid="03k_xc1">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="5j72j6o"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li data-oid="i5.tfcm">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="hrur18k"
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li data-oid="nv9g1yl">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="n1n4kkj"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li data-oid="-cz613r">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="gqjk2:6"
                                    >
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
                        data-oid="zu2sgh1"
                    >
                        <p data-oid="xj51kul">
                            &copy; 2024 GlobeDock Academy. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
