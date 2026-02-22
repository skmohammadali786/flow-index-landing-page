import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Shield, TrendingUp, BarChart3, CheckCircle2 } from "lucide-react";

export function ClinicalSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`w-full py-20 px-4 sm:px-6 lg:px-8 bg-white ${isVisible ? "animate-slide-up" : "opacity-0"}`}
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
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ${isVisible ? "opacity-100" : "opacity-0"}`}
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
              description: "Export data in formats your physician understands",
            },
            {
              icon: CheckCircle2,
              title: "Standardized Terminology",
              description: "Medical-grade language for health records",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 hover:shadow-2xl hover:scale-105 transition-all border border-green-200 hover:border-green-400 group ${isVisible ? "animate-bounce-in" : "opacity-0"}`}
              style={{
                animationDelay: isVisible ? `${idx * 0.1}s` : undefined,
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
  );
}
