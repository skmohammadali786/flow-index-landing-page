import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Brain, Sparkles, Activity, Moon } from "lucide-react";

export function CognitiveSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`w-full py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
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
  );
}
