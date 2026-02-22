import { Button } from "@/components/ui/button";
import {
  Calendar,
  Heart,
  BarChart3,
  Activity,
  Droplet,
  ChevronRight,
  User,
  Settings,
  ChevronLeft,
  Clock,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

export function HeroSection() {
  return (
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
                        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                          (day) => (
                            <div
                              key={day}
                              className="text-center text-[10px] text-gray-400 font-medium"
                            >
                              {day}
                            </div>
                          ),
                        )}
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
  );
}
