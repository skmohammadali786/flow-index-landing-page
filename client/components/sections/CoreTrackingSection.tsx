import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Calendar, TrendingUp, Heart, BarChart3 } from "lucide-react";

export function CoreTrackingSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`w-full py-20 px-4 sm:px-6 lg:px-8 bg-white ${isVisible ? "animate-slide-up" : "opacity-0"}`}
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
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${isVisible ? "opacity-100" : "opacity-0"}`}
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
              className={`p-6 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 hover:shadow-2xl hover:scale-105 transition-all border border-pink-200 hover:border-pink-400 group ${isVisible ? "animate-bounce-in" : "opacity-0"}`}
              style={{
                animationDelay: isVisible ? `${idx * 0.1}s` : undefined,
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
  );
}
