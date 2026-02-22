import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function FinalCtaSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className={`w-full py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
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
  );
}
