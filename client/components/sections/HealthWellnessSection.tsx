import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Sparkles, Droplet, Activity, Pill } from "lucide-react";

export function HealthWellnessSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white ${isVisible ? "animate-slide-up" : "opacity-0"}`}
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
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${isVisible ? "opacity-100" : "opacity-0"}`}
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
              className={`p-6 rounded-2xl bg-white border-2 border-peach hover:border-pink-400 hover:shadow-2xl hover:scale-105 transition-all group ${isVisible ? "animate-bounce-in" : "opacity-0"}`}
              style={{
                animationDelay: isVisible ? `${idx * 0.1}s` : undefined,
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
  );
}
