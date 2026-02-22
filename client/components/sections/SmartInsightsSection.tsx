import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { BarChart3, Sparkles, TrendingUp } from "lucide-react";

export function SmartInsightsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`w-full py-20 px-4 sm:px-6 lg:px-8 bg-white ${isVisible ? "animate-slide-up" : "opacity-0"}`}
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
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isVisible ? "opacity-100" : "opacity-0"}`}
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
              className={`p-8 rounded-2xl bg-gradient-to-br from-lavender/20 to-transparent border-2 border-purple-200 hover:border-purple-400 hover:shadow-2xl hover:scale-105 transition-all group ${isVisible ? "animate-bounce-in" : "opacity-0"}`}
              style={{
                animationDelay: isVisible ? `${idx * 0.15}s` : undefined,
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
  );
}
