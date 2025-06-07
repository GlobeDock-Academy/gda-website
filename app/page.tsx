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
            data-oid="z6587xr"
        >
            {/* Navigation */}
            <nav
                className="bg-white/80 backdrop-blur-md border-b border-emerald-100 sticky top-0 z-50"
                data-oid="ht-0ifo"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="sqb9.85">
                    <div className="flex justify-between items-center h-16" data-oid="0bf5gbx">
                        <div className="flex items-center space-x-2" data-oid="j8_13na">
                            <Globe className="h-8 w-8 text-emerald-600" data-oid="fngmk5_" />
                            <span className="text-2xl font-bold text-gray-900" data-oid="bhifct:">
                                GlobeDock Academy
                            </span>
                        </div>
                        <div className="hidden md:flex items-center space-x-8" data-oid=":55oj-l">
                            <a
                                href="#features"
                                className="text-gray-700 hover:text-emerald-600 transition-colors"
                                data-oid="cqoddyw"
                            >
                                Features
                            </a>
                            <a
                                href="#content"
                                className="text-gray-700 hover:text-emerald-600 transition-colors"
                                data-oid="vucm-ju"
                            >
                                Content
                            </a>
                            <a
                                href="#platforms"
                                className="text-gray-700 hover:text-emerald-600 transition-colors"
                                data-oid="gkxx9-t"
                            >
                                Platforms
                            </a>
                            <a
                                href="#parents"
                                className="text-gray-700 hover:text-emerald-600 transition-colors"
                                data-oid="xzrc7q3"
                            >
                                For Parents
                            </a>
                            <Button
                                className="bg-emerald-600 hover:bg-emerald-700"
                                data-oid="qd61k2-"
                            >
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8" data-oid="qoc8zdd">
                <div className="max-w-7xl mx-auto" data-oid="8ck-nwe">
                    <div className="grid lg:grid-cols-2 gap-12 items-center" data-oid="z3khzjw">
                        <div data-oid="di:u7xg">
                            <Badge
                                className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-100"
                                data-oid="5155s3y"
                            >
                                Ministry-Approved Curriculum
                            </Badge>
                            <h1
                                className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
                                data-oid="0jvk_mn"
                            >
                                Transform Learning for
                                <span className="text-emerald-600" data-oid="odc8fni">
                                    {' '}
                                    Grade 7-12
                                </span>{' '}
                                Students
                            </h1>
                            <p
                                className="text-xl text-gray-600 mb-8 leading-relaxed"
                                data-oid="d6mx1ce"
                            >
                                Experience engaging, locally-contextualized education through our
                                comprehensive e-learning platform. Access quality content anytime,
                                anywhere with microlearning that fits your pace.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4" data-oid="4tpswas">
                                <Button
                                    size="lg"
                                    className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3"
                                    data-oid="bz9alqm"
                                >
                                    Start Learning Today
                                    <ArrowRight className="ml-2 h-5 w-5" data-oid="hpsujsb" />
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-lg px-8 py-3 border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                                    data-oid="_k:gzg0"
                                >
                                    Watch Demo
                                    <Play className="ml-2 h-5 w-5" data-oid="l-o4fr_" />
                                </Button>
                            </div>
                            <div
                                className="mt-8 flex items-center space-x-6 text-sm text-gray-600"
                                data-oid="n:t-d75"
                            >
                                <div className="flex items-center" data-oid="ptjj506">
                                    <CheckCircle
                                        className="h-5 w-5 text-emerald-600 mr-2"
                                        data-oid="vy2ayvf"
                                    />
                                    Web & Mobile Access
                                </div>
                                <div className="flex items-center" data-oid="9_fk9x5">
                                    <CheckCircle
                                        className="h-5 w-5 text-emerald-600 mr-2"
                                        data-oid="6zg6s92"
                                    />
                                    Offline Learning
                                </div>
                                <div className="flex items-center" data-oid="o-7kz-d">
                                    <CheckCircle
                                        className="h-5 w-5 text-emerald-600 mr-2"
                                        data-oid="9ozjl3a"
                                    />
                                    AI-Powered Support
                                </div>
                            </div>
                        </div>
                        <div className="relative" data-oid="iljxszp">
                            <div
                                className="bg-gradient-to-br from-emerald-400 to-orange-400 rounded-3xl p-8 transform rotate-3 shadow-2xl"
                                data-oid="h9:kt-g"
                            >
                                <div
                                    className="bg-white rounded-2xl p-6 transform -rotate-3"
                                    data-oid=".sh2omx"
                                >
                                    <img
                                        src="/placeholder.svg?height=400&width=500"
                                        alt="GlobeDock Academy Platform Preview"
                                        className="w-full h-auto rounded-lg shadow-lg"
                                        data-oid="0wu7i.a"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white" data-oid="m5nnr6_">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="urr_.4-">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8" data-oid="qjn9b94">
                        <div className="text-center" data-oid="svbbkrw">
                            <div
                                className="text-4xl font-bold text-emerald-600 mb-2"
                                data-oid="jsw3so8"
                            >
                                7-12
                            </div>
                            <div className="text-gray-600" data-oid="adb62w-">
                                Grade Levels
                            </div>
                        </div>
                        <div className="text-center" data-oid="-r-5_ij">
                            <div
                                className="text-4xl font-bold text-orange-600 mb-2"
                                data-oid="m21apf3"
                            >
                                1000+
                            </div>
                            <div className="text-gray-600" data-oid=":twrxf.">
                                Video Lessons
                            </div>
                        </div>
                        <div className="text-center" data-oid="y1g04jr">
                            <div
                                className="text-4xl font-bold text-emerald-600 mb-2"
                                data-oid="xo41glh"
                            >
                                24/7
                            </div>
                            <div className="text-gray-600" data-oid="eo8rnei">
                                AI Support
                            </div>
                        </div>
                        <div className="text-center" data-oid="_bah0ng">
                            <div
                                className="text-4xl font-bold text-orange-600 mb-2"
                                data-oid="tu_u.gz"
                            >
                                100%
                            </div>
                            <div className="text-gray-600" data-oid="p7ye64g">
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
                data-oid="8tnf6m:"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="e7hcd61">
                    <div className="text-center mb-16" data-oid="msn.5vk">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4" data-oid="bti6hm3">
                            Powerful Features for Modern Learning
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-oid="y0-16kx">
                            Our comprehensive platform combines cutting-edge technology with
                            pedagogical excellence to deliver an unmatched learning experience.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-oid="f6lncut">
                        <Card
                            className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
                            data-oid="4wcaylb"
                        >
                            <CardHeader data-oid="_gj2d22">
                                <div
                                    className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4"
                                    data-oid="nj89p_j"
                                >
                                    <MessageCircle
                                        className="h-6 w-6 text-emerald-600"
                                        data-oid="1v1et8i"
                                    />
                                </div>
                                <CardTitle data-oid="hpmjlgc">AskAI Chat Support</CardTitle>
                                <CardDescription data-oid="85ytaxq">
                                    Get instant help with our intelligent AI assistant available
                                    24/7 to answer questions and provide guidance.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card
                            className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
                            data-oid="6_6nzks"
                        >
                            <CardHeader data-oid="o-gfqyu">
                                <div
                                    className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4"
                                    data-oid="8vwiou3"
                                >
                                    <Download
                                        className="h-6 w-6 text-orange-600"
                                        data-oid="69779p9"
                                    />
                                </div>
                                <CardTitle data-oid="855p6ac">Offline Downloads</CardTitle>
                                <CardDescription data-oid="s_.j_sr">
                                    Download content for offline access, ensuring learning continues
                                    even without internet connectivity.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card
                            className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
                            data-oid="ea_tsea"
                        >
                            <CardHeader data-oid="7:t.fr0">
                                <div
                                    className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4"
                                    data-oid="vs8ckcj"
                                >
                                    <BarChart3
                                        className="h-6 w-6 text-emerald-600"
                                        data-oid="xx08o6:"
                                    />
                                </div>
                                <CardTitle data-oid="86wnkoj">Learning Analytics</CardTitle>
                                <CardDescription data-oid="45q9fu9">
                                    Track progress with detailed analytics and insights to optimize
                                    learning outcomes and identify areas for improvement.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card
                            className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
                            data-oid="woetrep"
                        >
                            <CardHeader data-oid="m0q:_i2">
                                <div
                                    className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4"
                                    data-oid="qjegg4."
                                >
                                    <Brain className="h-6 w-6 text-orange-600" data-oid="xvko4ne" />
                                </div>
                                <CardTitle data-oid="c9o36ul">Microlearning</CardTitle>
                                <CardDescription data-oid="qgp11u3">
                                    Bite-sized lessons designed for better retention and flexible
                                    learning that fits into any schedule.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card
                            className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
                            data-oid="xxl2c5d"
                        >
                            <CardHeader data-oid="iik9zqn">
                                <div
                                    className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4"
                                    data-oid="9aesm3c"
                                >
                                    <Users
                                        className="h-6 w-6 text-emerald-600"
                                        data-oid="l7xxvo1"
                                    />
                                </div>
                                <CardTitle data-oid="ooghvm_">Parent Dashboard</CardTitle>
                                <CardDescription data-oid="hj_95a8">
                                    Dedicated parent app to monitor progress, track achievements,
                                    and stay connected with your child's learning journey.
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card
                            className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white"
                            data-oid="0xqy20r"
                        >
                            <CardHeader data-oid="tp-nzdf">
                                <div
                                    className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4"
                                    data-oid="ptmrlh:"
                                >
                                    <Shield
                                        className="h-6 w-6 text-orange-600"
                                        data-oid="d9yns47"
                                    />
                                </div>
                                <CardTitle data-oid="ovsz.mc">Curriculum Aligned</CardTitle>
                                <CardDescription data-oid="v3s-r35">
                                    100% aligned with national curriculum standards, ensuring
                                    students meet all educational requirements.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Content Types Section */}
            <section id="content" className="py-20 bg-white" data-oid="_krwl4q">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="hmxucpy">
                    <div className="text-center mb-16" data-oid="d.cp5ur">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4" data-oid="-bav.fr">
                            Diverse Content for Every Learning Style
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-oid="g-fmzsw">
                            Our locally-contextualized content is designed to be clear, engaging,
                            and relevant to students' lives and experiences.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" data-oid="o.9:pn1">
                        <div className="text-center group" data-oid="1-7ct5m">
                            <div
                                className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
                                data-oid="vo87opo"
                            >
                                <Play className="h-10 w-10 text-white" data-oid="2-.h2bi" />
                            </div>
                            <h3
                                className="text-xl font-semibold text-gray-900 mb-3"
                                data-oid="hudxzl3"
                            >
                                Interactive Videos
                            </h3>
                            <p className="text-gray-600" data-oid="7k4lj35">
                                High-quality video lessons with local context and real-world
                                examples that make learning engaging and relatable.
                            </p>
                        </div>

                        <div className="text-center group" data-oid="cjd_2kr">
                            <div
                                className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
                                data-oid="zufdcts"
                            >
                                <ClipboardCheck
                                    className="h-10 w-10 text-white"
                                    data-oid="fvj8gu9"
                                />
                            </div>
                            <h3
                                className="text-xl font-semibold text-gray-900 mb-3"
                                data-oid="6jcse-s"
                            >
                                Smart Quizzes
                            </h3>
                            <p className="text-gray-600" data-oid="w6xdnrp">
                                Interactive quizzes with instant feedback to reinforce learning and
                                identify knowledge gaps.
                            </p>
                        </div>

                        <div className="text-center group" data-oid="j49hk1c">
                            <div
                                className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
                                data-oid="xjix.7x"
                            >
                                <FileText className="h-10 w-10 text-white" data-oid="2qq8g5c" />
                            </div>
                            <h3
                                className="text-xl font-semibold text-gray-900 mb-3"
                                data-oid=":ov.kez"
                            >
                                Concise Notes
                            </h3>
                            <p className="text-gray-600" data-oid="2:mh-hr">
                                Well-structured short notes that summarize key concepts for quick
                                review and exam preparation.
                            </p>
                        </div>

                        <div className="text-center group" data-oid="ai9xyou">
                            <div
                                className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"
                                data-oid="xb3ft4-"
                            >
                                <Trophy className="h-10 w-10 text-white" data-oid="ocv4:g_" />
                            </div>
                            <h3
                                className="text-xl font-semibold text-gray-900 mb-3"
                                data-oid="778cfn1"
                            >
                                Practice Exams
                            </h3>
                            <p className="text-gray-600" data-oid="cib7vjv">
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
                data-oid="1v6zdee"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="l139s:-">
                    <div className="text-center mb-16" data-oid="crz.34d">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4" data-oid="2ven11i">
                            Learn Anywhere, Anytime
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-oid="pcr3hpu">
                            Access GlobeDock Academy on all your devices with seamless
                            synchronization across platforms.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8" data-oid="cofx1j2">
                        <Card
                            className="border-0 shadow-lg bg-white text-center p-8"
                            data-oid="de4epfh"
                        >
                            <div
                                className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
                                data-oid="rfqbr.e"
                            >
                                <Monitor className="h-8 w-8 text-emerald-600" data-oid="5ipym_-" />
                            </div>
                            <CardTitle className="text-2xl mb-4" data-oid="._dy11k">
                                Web Application
                            </CardTitle>
                            <CardDescription className="text-base" data-oid="nfb_rfb">
                                Full-featured web platform accessible from any browser with rich
                                interactive content and seamless navigation.
                            </CardDescription>
                        </Card>

                        <Card
                            className="border-0 shadow-lg bg-white text-center p-8"
                            data-oid="cigsuua"
                        >
                            <div
                                className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
                                data-oid="45xa9k4"
                            >
                                <Smartphone
                                    className="h-8 w-8 text-orange-600"
                                    data-oid="jll07_t"
                                />
                            </div>
                            <CardTitle className="text-2xl mb-4" data-oid="lm5qwr5">
                                Mobile Apps
                            </CardTitle>
                            <CardDescription className="text-base" data-oid="gvu9n_v">
                                Native iOS and Android apps optimized for mobile learning with
                                offline capabilities and push notifications.
                            </CardDescription>
                        </Card>

                        <Card
                            className="border-0 shadow-lg bg-white text-center p-8"
                            data-oid="5lroi-x"
                        >
                            <div
                                className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6"
                                data-oid="dwovezv"
                            >
                                <Zap className="h-8 w-8 text-emerald-600" data-oid="1_.t5:m" />
                            </div>
                            <CardTitle className="text-2xl mb-4" data-oid="ayk7vtj">
                                Sync Across Devices
                            </CardTitle>
                            <CardDescription className="text-base" data-oid="2jlry-l">
                                Start learning on one device and continue on another with automatic
                                progress synchronization.
                            </CardDescription>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Parent Features Section */}
            <section id="parents" className="py-20 bg-white" data-oid="yxdkobz">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="t-i_2ez">
                    <div className="grid lg:grid-cols-2 gap-12 items-center" data-oid="a39lq26">
                        <div data-oid="75sk49x">
                            <h2
                                className="text-4xl font-bold text-gray-900 mb-6"
                                data-oid="zqwhru2"
                            >
                                Empower Parents in the Learning Journey
                            </h2>
                            <p className="text-xl text-gray-600 mb-8" data-oid="6.xypr-">
                                Stay connected with your child's educational progress through our
                                comprehensive parent dashboard and mobile app.
                            </p>

                            <div className="space-y-6" data-oid="iz2zgr2">
                                <div className="flex items-start space-x-4" data-oid="_-zri7:">
                                    <div
                                        className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                                        data-oid=".6ty_wl"
                                    >
                                        <BarChart3
                                            className="h-4 w-4 text-emerald-600"
                                            data-oid="dntr7m7"
                                        />
                                    </div>
                                    <div data-oid="v80b8h0">
                                        <h3
                                            className="font-semibold text-gray-900 mb-2"
                                            data-oid="4hu9x_m"
                                        >
                                            Real-time Progress Tracking
                                        </h3>
                                        <p className="text-gray-600" data-oid="3bs9vv6">
                                            Monitor your child's learning progress, completed
                                            lessons, and performance metrics in real-time.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="0p70i.x">
                                    <div
                                        className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                                        data-oid="smwa_oe"
                                    >
                                        <Trophy
                                            className="h-4 w-4 text-orange-600"
                                            data-oid="1emurvx"
                                        />
                                    </div>
                                    <div data-oid="-swb-45">
                                        <h3
                                            className="font-semibold text-gray-900 mb-2"
                                            data-oid="m0s-o89"
                                        >
                                            Achievement Notifications
                                        </h3>
                                        <p className="text-gray-600" data-oid="g:a1_0i">
                                            Receive instant notifications when your child completes
                                            milestones or achieves learning goals.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4" data-oid="vtj8n.i">
                                    <div
                                        className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                                        data-oid="zeeuaxv"
                                    >
                                        <Heart
                                            className="h-4 w-4 text-emerald-600"
                                            data-oid="5v2wf3g"
                                        />
                                    </div>
                                    <div data-oid="325t8f4">
                                        <h3
                                            className="font-semibold text-gray-900 mb-2"
                                            data-oid="93bh.3z"
                                        >
                                            Learning Insights
                                        </h3>
                                        <p className="text-gray-600" data-oid="wf-9qic">
                                            Get detailed insights into learning patterns, strengths,
                                            and areas that need attention.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative" data-oid="iylu72y">
                            <img
                                src="/placeholder.svg?height=500&width=600"
                                alt="Parent Dashboard Preview"
                                className="w-full h-auto rounded-2xl shadow-2xl"
                                data-oid="ol6m_xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section
                className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50"
                data-oid="k8g.lp8"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="1opu3mo">
                    <div className="text-center mb-16" data-oid="p5wawru">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4" data-oid="hm9zoge">
                            What Students and Parents Say
                        </h2>
                        <p className="text-xl text-gray-600" data-oid="m4lt7ad">
                            Real feedback from our learning community
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8" data-oid="p7qrim4">
                        <Card className="border-0 shadow-lg bg-white" data-oid="q2k.s07">
                            <CardContent className="p-6" data-oid="4bhhlo-">
                                <div className="flex items-center mb-4" data-oid="i77.kf4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-5 w-5 text-yellow-400 fill-current"
                                            data-oid="z6pl7pq"
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-4" data-oid="kdv4uu8">
                                    "GlobeDock Academy made learning so much easier! The videos are
                                    clear and the AI chat helps me whenever I'm stuck."
                                </p>
                                <div className="flex items-center" data-oid="y:wkp9h">
                                    <div
                                        className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3"
                                        data-oid="g9fjz2:"
                                    >
                                        <GraduationCap
                                            className="h-5 w-5 text-emerald-600"
                                            data-oid="8jfx..g"
                                        />
                                    </div>
                                    <div data-oid="925u:u_">
                                        <div
                                            className="font-semibold text-gray-900"
                                            data-oid="p5pfi-w"
                                        >
                                            Sarah M.
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="dt6z4yq">
                                            Grade 10 Student
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg bg-white" data-oid="r:q_rbj">
                            <CardContent className="p-6" data-oid="ney27o8">
                                <div className="flex items-center mb-4" data-oid="v4hpr1i">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-5 w-5 text-yellow-400 fill-current"
                                            data-oid="-tx4-h8"
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-4" data-oid="9tm4hfm">
                                    "As a parent, I love being able to track my daughter's progress.
                                    The parent app keeps me informed and engaged."
                                </p>
                                <div className="flex items-center" data-oid="c3cp.r6">
                                    <div
                                        className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3"
                                        data-oid="1pl6x.4"
                                    >
                                        <Users
                                            className="h-5 w-5 text-orange-600"
                                            data-oid="l5a-3ai"
                                        />
                                    </div>
                                    <div data-oid="ltpvoue">
                                        <div
                                            className="font-semibold text-gray-900"
                                            data-oid="aq2.17h"
                                        >
                                            Michael K.
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="njcae4k">
                                            Parent
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-0 shadow-lg bg-white" data-oid="y-0vn58">
                            <CardContent className="p-6" data-oid="uk36r5x">
                                <div className="flex items-center mb-4" data-oid="olzj_1q">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-5 w-5 text-yellow-400 fill-current"
                                            data-oid="3-m8zn4"
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-4" data-oid="74pdgmw">
                                    "The offline feature is amazing! I can study even when there's
                                    no internet. The content is really well explained."
                                </p>
                                <div className="flex items-center" data-oid="l10awx0">
                                    <div
                                        className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mr-3"
                                        data-oid="4lyiaz6"
                                    >
                                        <BookOpen
                                            className="h-5 w-5 text-emerald-600"
                                            data-oid="-za2a0k"
                                        />
                                    </div>
                                    <div data-oid="-v36wau">
                                        <div
                                            className="font-semibold text-gray-900"
                                            data-oid="498bi7-"
                                        >
                                            Ahmed R.
                                        </div>
                                        <div className="text-sm text-gray-600" data-oid="c.k1.cw">
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
                data-oid="p6h_fs5"
            >
                <div
                    className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
                    data-oid="dak.lkh"
                >
                    <h2 className="text-4xl font-bold text-white mb-6" data-oid="38619v8">
                        Ready to Transform Your Learning Experience?
                    </h2>
                    <p className="text-xl text-emerald-100 mb-8" data-oid=".-t03ay">
                        Join thousands of students already excelling with GlobeDock Academy. Start
                        your journey to academic success today.
                    </p>
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-oid="pjtf42i"
                    >
                        <Button
                            size="lg"
                            className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-3"
                            data-oid="w0sqom3"
                        >
                            Start Free Trial
                            <ArrowRight className="ml-2 h-5 w-5" data-oid="3jh36qu" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8 py-3"
                            data-oid="b2q9xx_"
                        >
                            Schedule Demo
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16" data-oid="odofhn.">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-oid="3y61dt3">
                    <div className="grid md:grid-cols-4 gap-8" data-oid="dd9awan">
                        <div data-oid="-lxbg4u">
                            <div className="flex items-center space-x-2 mb-4" data-oid="8-5ues9">
                                <Globe className="h-8 w-8 text-emerald-400" data-oid="lag.xub" />
                                <span className="text-2xl font-bold" data-oid="gy:fj2.">
                                    GlobeDock Academy
                                </span>
                            </div>
                            <p className="text-gray-400 mb-4" data-oid="5l.35fo">
                                Empowering students with quality education through innovative
                                e-learning solutions.
                            </p>
                        </div>

                        <div data-oid="6aaf2ys">
                            <h3 className="font-semibold mb-4" data-oid="q4wvy31">
                                Platform
                            </h3>
                            <ul className="space-y-2 text-gray-400" data-oid="yzl:49s">
                                <li data-oid="q0clo91">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="cspya8w"
                                    >
                                        Web App
                                    </a>
                                </li>
                                <li data-oid="ylxz4hd">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="73uihvp"
                                    >
                                        Mobile Apps
                                    </a>
                                </li>
                                <li data-oid="983:x3q">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="2cgh7-p"
                                    >
                                        Parent Dashboard
                                    </a>
                                </li>
                                <li data-oid="jiurp57">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="ut.elz_"
                                    >
                                        Features
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div data-oid="sz4e58c">
                            <h3 className="font-semibold mb-4" data-oid="p2m7ufl">
                                Support
                            </h3>
                            <ul className="space-y-2 text-gray-400" data-oid="k-aviqe">
                                <li data-oid="cn6r5m2">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="4:z3eql"
                                    >
                                        Help Center
                                    </a>
                                </li>
                                <li data-oid="rzpe_y-">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="ar6wb1i"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li data-oid="91z4b6w">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="wy:bjqg"
                                    >
                                        System Status
                                    </a>
                                </li>
                                <li data-oid="40qg2f:">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="l9h4uuh"
                                    >
                                        Community
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div data-oid=":dhhsct">
                            <h3 className="font-semibold mb-4" data-oid="50zswiv">
                                Company
                            </h3>
                            <ul className="space-y-2 text-gray-400" data-oid="4ycl4cu">
                                <li data-oid="qritv73">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="l92g66c"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li data-oid="5qm6va9">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="0r2_gyy"
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li data-oid="bsfkh..">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="5:__n8-"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li data-oid="insohn-">
                                    <a
                                        href="#"
                                        className="hover:text-white transition-colors"
                                        data-oid="mo6gi4p"
                                    >
                                        Terms of Service
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
                        data-oid="7d5wr9k"
                    >
                        <p data-oid="sp0e7pr">
                            &copy; 2024 GlobeDock Academy. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
