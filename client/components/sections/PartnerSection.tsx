import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Users, Heart, Lock, BarChart3 } from "lucide-react";

export function PartnerSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-50 to-white ${isVisible ? "animate-slide-up" : "opacity-0"}`}
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
              Share your cycle information with partners in a way that promotes
              understanding and support.
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
              Get thoughtful suggestions for partners on how best to support you
              during different cycle phases.
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
              Generate reports to share with healthcare providers or loved ones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
