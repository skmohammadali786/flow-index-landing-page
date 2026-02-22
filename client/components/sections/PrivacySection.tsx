import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Lock, Sparkles, CheckCircle2, TrendingUp } from "lucide-react";

export function PrivacySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`w-full py-20 px-4 sm:px-6 lg:px-8 bg-white ${isVisible ? "animate-slide-up" : "opacity-0"}`}
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
  );
}
