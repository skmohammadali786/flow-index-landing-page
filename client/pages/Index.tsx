import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Calendar,
  Heart,
  BarChart3,
  Brain,
  Shield,
  Users,
  Lock,
  Activity,
  TrendingUp,
  Droplet,
  Moon,
  Pill,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  User,
  Settings,
  ChevronLeft,
  Clock,
} from "lucide-react";

export default function Index() {
  const coreTrackingRef = useScrollAnimation();
  const healthWellnessRef = useScrollAnimation();
  const smartInsightsRef = useScrollAnimation();
  const cognitiveRef = useScrollAnimation();
  const clinicalRef = useScrollAnimation();
  const partnerRef = useScrollAnimation();
  const privacyRef = useScrollAnimation();
  const finalCtaRef = useScrollAnimation();

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-pink-50 to-purple-50 pt-20 pb-20">
        {/* Decorative gradient orbs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div
          className="absolute bottom-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight animate-slide-up">
                Flow Index — Your cycle,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 animate-pulse-slow">
                  simplified.
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 font-light">
                Know your Rhythm. Feel in control.
              </p>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="https://flow-index-f7fdedcf.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <Button
                  className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full shadow-lg hover:shadow-2xl hover:shadow-pink-400/50 transition-all duration-300"
                  size="lg"
                >
                  Start Tracking
                </Button>
              </a>
              <a
                href="https://flow-index-f7fdedcf.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform duration-300"
              >
                <Button
                  variant="outline"
                  className="px-8 py-6 text-lg font-semibold border-2 border-purple-300 text-gray-900 rounded-full hover:bg-purple-50 hover:border-purple-500 transition-all duration-300"
                  size="lg"
                >
                  Visit Main Website
                </Button>
              </a>
            </div>

            <div
              className="flex items-center gap-6 text-sm text-gray-600 pt-4 animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-pink-500" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-pink-500" />
                <span>100% Private</span>
              </div>
            </div>
          </div>

          {/* Right Column - Mobile Mockup */}
          <div
            className="flex justify-center lg:justify-end animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative w-72 h-full">
              {/* Phone Frame */}
              <div className="relative mx-auto w-72 h-96 bg-black rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-900">
                {/* Phone Screen */}
                <div className="w-full h-full bg-stone-50 overflow-hidden flex flex-col relative">
                  {/* Status Bar */}
                  <div className="h-8 bg-white/50 flex items-center justify-between px-6 text-xs font-medium z-10">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
                    </div>
                  </div>

                  {/* App Content */}
                  <div className="h-full flex flex-col">
                    {/* Top Bar */}
                    <div className="pt-2 px-4 pb-4 flex justify-between items-center">
                      <h1 className="text-lg font-serif font-bold text-red-800/80">
                        Flow Index
                      </h1>
                      <div className="flex gap-3">
                        <User className="w-4 h-4 text-gray-400" />
                        <Settings className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>

                    {/* Nav Icons */}
                    <div className="flex justify-between px-5 pb-4 border-b border-stone-100">
                      <div className="p-1.5 bg-white rounded-xl shadow-sm border border-stone-100">
                        <Calendar className="w-4 h-4 text-gray-700" />
                      </div>
                      <TrendingUp className="w-4 h-4 text-gray-400" />
                      <BarChart3 className="w-4 h-4 text-gray-400" />
                      <Activity className="w-4 h-4 text-gray-400" />
                      <Heart className="w-4 h-4 text-gray-400" />
                      <Clock className="w-4 h-4 text-gray-400" />
                    </div>

                    {/* Calendar Card */}
                    <div className="flex-1 px-4 pt-4">
                      <div className="bg-white rounded-3xl p-4 shadow-sm pb-8">
                        {/* Month Header */}
                        <div className="flex justify-between items-center mb-4 px-2">
                          <ChevronLeft className="w-4 h-4 text-gray-400" />
                          <h2 className="text-base font-serif font-bold text-gray-800">
                            February 2026
                          </h2>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>

                        {/* Days Header */}
                        <div className="grid grid-cols-7 mb-3">
                          {[
                            "Sun",
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thu",
                            "Fri",
                            "Sat",
                          ].map((day) => (
                            <div
                              key={day}
                              className="text-center text-[10px] text-gray-400 font-medium"
                            >
                              {day}
                            </div>
                          ))}
                        </div>

                        {/* Calendar Grid */}
                        <div className="grid grid-cols-7 gap-y-3 gap-x-1 mb-6">
                          {Array.from({ length: 28 }, (_, i) => i + 1).map(
                            (day) => {
                              let content = (
                                <span className="text-xs text-gray-600 font-medium">
                                  {day}
                                </span>
                              );
                              let className =
                                "h-7 w-7 mx-auto flex items-center justify-center rounded-full relative";

                              if (day === 8 || day === 9) {
                                className +=
                                  " bg-red-400 text-white shadow-md shadow-red-200";
                                content = (
                                  <>
                                    <span className="text-[10px] font-bold z-10 mb-1">
                                      {day}
                                    </span>
                                    <div className="absolute bottom-1 flex items-center justify-center w-full">
                                      <Droplet
                                        className="w-2.5 h-2.5 text-white/50"
                                        fill="currentColor"
                                      />
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-green-400 rounded-full border border-white"></div>
                                  </>
                                );
                              } else if (day === 7) {
                                className += " bg-red-50 text-red-400";
                                content = (
                                  <span className="text-xs font-medium">?</span>
                                );
                              } else if (day >= 24 && day <= 28) {
                                className += " bg-purple-100 text-purple-700";
                              }

                              return (
                                <div key={day} className={className}>
                                  {content}
                                </div>
                              );
                            },
                          )}
                        </div>

                        {/* Legend */}
                        <div className="flex flex-wrap gap-x-3 gap-y-2 px-1 justify-center">
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-sm bg-red-400"></div>
                            <span className="text-[9px] text-gray-500 font-medium">
                              Period
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-sm border border-dashed border-red-400"></div>
                            <span className="text-[9px] text-gray-500 font-medium">
                              Predicted
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-sm bg-purple-200"></div>
                            <span className="text-[9px] text-gray-500 font-medium">
                              Fertile
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-sm bg-purple-400"></div>
                            <span className="text-[9px] text-gray-500 font-medium">
                              Ovulation
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* FAB */}
                    <div className="absolute bottom-4 right-4">
                      <button className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-200 text-white hover:bg-red-600 transition-colors">
                        <Droplet className="w-5 h-5 fill-current" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Cycle Tracking Section */}
      <section
        ref={coreTrackingRef.ref}
        className={`w-full py-20 px-4 sm:px-6 lg:px-8 bg-white ${coreTrackingRef.isVisible ? "animate-slide-up" : "opacity-0"}`}
        style={{ animationDelay: "0.1s" }}
      >
        <div className="container mx-auto">
          <div
            className="text-center mb-16 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 group-hover:text-pink-600 transition-colors">
              Core Cycle Tracking & Prediction
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understand your natural rhythm with precision.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${coreTrackingRef.isVisible ? "opacity-100" : "opacity-0"}`}
          >
            {[
              {
                icon: Calendar,
                title: "Intelligent Visual Calendar",
                description: "Color-coded tracking across your entire cycle",
              },
              {
                icon: TrendingUp,
                title: "Smart Period Predictions",
                description: "Accurate forecasting powered by AI analysis",
              },
              {
                icon: Heart,
                title: "Ovulation Insights",
                description: "Know your fertile window with precision",
              },
              {
                icon: BarChart3,
                title: "Cycle Statistics",
                description: "Historical tracking and pattern analysis",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 hover:shadow-2xl hover:scale-105 transition-all border border-pink-200 hover:border-pink-400 group ${coreTrackingRef.isVisible ? "animate-bounce-in" : "opacity-0"}`}
                style={{
                  animationDelay: coreTrackingRef.isVisible
                    ? `${idx * 0.1}s`
                    : undefined,
                }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-400 to-purple-400 flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm group-hover:text-gray-900 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health & Wellness Logging */}
      <section
        ref={healthWellnessRef.ref}
        className={`w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white ${healthWellnessRef.isVisible ? "animate-slide-up" : "opacity-0"}`}
        style={{ animationDelay: "0.2s" }}
      >
        <div className="container mx-auto">
          <div
            className="text-center mb-16 animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Health & Wellness Logging
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Capture the full picture of your wellbeing.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${healthWellnessRef.isVisible ? "opacity-100" : "opacity-0"}`}
          >
            {[
              {
                icon: Sparkles,
                title: "Mood & Symptom Tracking",
                description: "Log how you're feeling throughout your cycle",
              },
              {
                icon: Droplet,
                title: "Flow Intensity",
                description: "Track menstrual flow with detailed logging",
              },
              {
                icon: Activity,
                title: "Lifestyle Metrics",
                description: "Monitor sleep, hydration, and exercise",
              },
              {
                icon: Pill,
                title: "Medications & Notes",
                description: "Keep detailed health records and observations",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-white border-2 border-peach hover:border-pink-400 hover:shadow-2xl hover:scale-105 transition-all group ${healthWellnessRef.isVisible ? "animate-bounce-in" : "opacity-0"}`}
                style={{
                  animationDelay: healthWellnessRef.isVisible
                    ? `${idx * 0.1}s`
                    : undefined,
                }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-peach to-pink-300 flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm group-hover:text-gray-900 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Smart Insights & Analytics */}
      <section
        ref={smartInsightsRef.ref}
        className={`w-full py-20 px-4 sm:px-6 lg:px-8 bg-white ${smartInsightsRef.isVisible ? "animate-slide-up" : "opacity-0"}`}
        style={{ animationDelay: "0.3s" }}
      >
        <div className="container mx-auto">
          <div
            className="text-center mb-16 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Smart Insights & Analytics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Turn data into meaningful awareness.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${smartInsightsRef.isVisible ? "opacity-100" : "opacity-0"}`}
          >
            {[
              {
                icon: BarChart3,
                title: "Pattern Detection",
                description:
                  "Discover trends and insights from your cycle data with advanced analytics.",
              },
              {
                icon: Sparkles,
                title: "Phase-Based Wellness Tips",
                description:
                  "Get personalized recommendations based on your current cycle phase.",
              },
              {
                icon: TrendingUp,
                title: "Visual Cycle Analytics",
                description:
                  "Beautiful charts and graphs show your health patterns over time.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-2xl bg-gradient-to-br from-lavender/20 to-transparent border-2 border-purple-200 hover:border-purple-400 hover:shadow-2xl hover:scale-105 transition-all group ${smartInsightsRef.isVisible ? "animate-bounce-in" : "opacity-0"}`}
                style={{
                  animationDelay: smartInsightsRef.isVisible
                    ? `${idx * 0.15}s`
                    : undefined,
                }}
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-400 to-blue-400 flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cognitive Performance Forecast */}
      <section
        ref={cognitiveRef.ref}
        className={`w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 ${cognitiveRef.isVisible ? "animate-slide-up" : "opacity-0"}`}
        style={{ animationDelay: "0.4s" }}
      >
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div
              className="text-center mb-12 animate-slide-up"
              style={{ animationDelay: "0.5s" }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Cognitive Performance Forecast
              </h2>
              <p className="text-xl text-gray-600">
                Work with your biology, not against it.
              </p>
            </div>

            <div className="bg-white rounded-3xl border-2 border-purple-200 p-8 sm:p-12 shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500">
                      <Brain className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Brain Performance Predictions
                    </h3>
                    <p className="text-gray-700 text-sm mt-2">
                      Know when your cognitive performance peaks and dips
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-yellow-400 to-orange-400">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Focus & Energy Forecasting
                    </h3>
                    <p className="text-gray-700 text-sm mt-2">
                      Predict your energy and concentration levels daily
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-pink-400 to-rose-500">
                      <Activity className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Optimal Work Timing
                    </h3>
                    <p className="text-gray-700 text-sm mt-2">
                      Schedule important tasks when you're at your best
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-green-400 to-teal-500">
                      <Moon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Smart Break Suggestions
                    </h3>
                    <p className="text-gray-700 text-sm mt-2">
                      Receive personalized break timing recommendations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical-Grade Support */}
      <section
        ref={clinicalRef.ref}
        className={`w-full py-20 px-4 sm:px-6 lg:px-8 bg-white ${clinicalRef.isVisible ? "animate-slide-up" : "opacity-0"}`}
        style={{ animationDelay: "0.5s" }}
      >
        <div className="container mx-auto">
          <div
            className="text-center mb-16 animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Clinical-Grade Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bridge everyday tracking with real medical insight.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${clinicalRef.isVisible ? "opacity-100" : "opacity-0"}`}
          >
            {[
              {
                icon: Shield,
                title: "Medical Symptom Scales",
                description: "Validated clinical assessment tools built-in",
              },
              {
                icon: TrendingUp,
                title: "Red Flag Detection",
                description: "Alerts for potential health concerns",
              },
              {
                icon: BarChart3,
                title: "Doctor-Ready Reports",
                description:
                  "Export data in formats your physician understands",
              },
              {
                icon: CheckCircle2,
                title: "Standardized Terminology",
                description: "Medical-grade language for health records",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 hover:shadow-2xl hover:scale-105 transition-all border border-green-200 hover:border-green-400 group ${clinicalRef.isVisible ? "animate-bounce-in" : "opacity-0"}`}
                style={{
                  animationDelay: clinicalRef.isVisible
                    ? `${idx * 0.1}s`
                    : undefined,
                }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm group-hover:text-gray-900 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Sharing */}
      <section
        ref={partnerRef.ref}
        className={`w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-50 to-white ${partnerRef.isVisible ? "animate-slide-up" : "opacity-0"}`}
        style={{ animationDelay: "0.6s" }}
      >
        <div className="container mx-auto">
          <div
            className="text-center mb-16 animate-slide-up"
            style={{ animationDelay: "0.7s" }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Partner Sharing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build understanding and support together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 border-2 border-rose-200 hover:border-rose-400 hover:shadow-2xl hover:scale-105 transition-all group animate-bounce-in">
              <Users className="w-12 h-12 text-rose-500 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">
                Partner Dashboard
              </h3>
              <p className="text-gray-700 group-hover:text-gray-900 transition-colors">
                Share your cycle information with partners in a way that
                promotes understanding and support.
              </p>
            </div>

            <div
              className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 border-2 border-rose-200 hover:border-rose-400 hover:shadow-2xl hover:scale-105 transition-all group animate-bounce-in"
              style={{ animationDelay: "0.1s" }}
            >
              <Heart className="w-12 h-12 text-rose-500 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">
                Care Suggestions
              </h3>
              <p className="text-gray-700 group-hover:text-gray-900 transition-colors">
                Get thoughtful suggestions for partners on how best to support
                you during different cycle phases.
              </p>
            </div>

            <div
              className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 border-2 border-rose-200 hover:border-rose-400 hover:shadow-2xl hover:scale-105 transition-all group animate-bounce-in"
              style={{ animationDelay: "0.2s" }}
            >
              <Lock className="w-12 h-12 text-rose-500 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">
                Privacy Controls
              </h3>
              <p className="text-gray-700 group-hover:text-gray-900 transition-colors">
                You control exactly what information is shared and with whom, at
                all times.
              </p>
            </div>

            <div
              className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl p-8 border-2 border-rose-200 hover:border-rose-400 hover:shadow-2xl hover:scale-105 transition-all group animate-bounce-in"
              style={{ animationDelay: "0.3s" }}
            >
              <BarChart3 className="w-12 h-12 text-rose-500 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-rose-600 transition-colors">
                Shareable Reports
              </h3>
              <p className="text-gray-700 group-hover:text-gray-900 transition-colors">
                Generate reports to share with healthcare providers or loved
                ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Personalization */}
      <section
        ref={privacyRef.ref}
        className={`w-full py-20 px-4 sm:px-6 lg:px-8 bg-white ${privacyRef.isVisible ? "animate-slide-up" : "opacity-0"}`}
        style={{ animationDelay: "0.7s" }}
      >
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div
              className="text-center mb-12 animate-slide-up"
              style={{ animationDelay: "0.8s" }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                Privacy & Personalization
              </h2>
              <p className="text-xl text-gray-600">Your data. Your control.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Lock,
                  title: "Secure Data Storage",
                  description:
                    "Enterprise-grade encryption keeps your sensitive health data safe",
                },
                {
                  icon: Sparkles,
                  title: "Personalized Onboarding",
                  description:
                    "Customize Flow Index to match your specific needs and preferences",
                },
                {
                  icon: CheckCircle2,
                  title: "Full Customization",
                  description:
                    "Control every aspect of tracking to fit your unique cycle",
                },
                {
                  icon: TrendingUp,
                  title: "Export Capability",
                  description:
                    "Download your complete health data anytime in standard formats",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 hover:border-blue-400 hover:shadow-2xl hover:scale-105 transition-all group animate-bounce-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 text-sm group-hover:text-gray-900 transition-colors">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        ref={finalCtaRef.ref}
        className={`w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 ${finalCtaRef.isVisible ? "animate-slide-up" : "opacity-0"}`}
        style={{ animationDelay: "0.8s" }}
      >
        <div
          className="container mx-auto text-center animate-slide-up"
          style={{ animationDelay: "0.9s" }}
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8">
            Start understanding your cycle today.
          </h2>
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Join thousands of people taking control of their health with Flow
            Index.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://flow-index-f7fdedcf.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <Button
                className="px-10 py-7 text-lg font-semibold bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-full shadow-lg hover:shadow-2xl hover:shadow-pink-400/50 transition-all duration-300 animate-bounce-in"
                size="lg"
              >
                Get Started
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a
              href="https://flow-index-f7fdedcf.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-110 transition-transform duration-300"
            >
              <Button
                variant="outline"
                className="px-10 py-7 text-lg font-semibold border-2 border-purple-400 text-gray-900 rounded-full hover:bg-purple-50 hover:border-purple-600 transition-all duration-300 animate-bounce-in"
                style={{ animationDelay: "0.1s" }}
                size="lg"
              >
                Visit Main Website
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="w-full bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 animate-fade-in"
        style={{ animationDelay: "0.9s" }}
        ref={finalCtaRef.ref}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold mb-2">Flow Index</h3>
              <p className="text-gray-400">
                Your cycle, simplified. Know your rhythm.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2026 Flow Index. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  title="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.398.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  title="Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
