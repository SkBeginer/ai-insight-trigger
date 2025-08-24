import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Hero = () => {
  const [loading, setLoading] = useState(false);
  const [greeting, setGreeting] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      const userName = "User"; // Can be customized later
      
      if (hour < 12) {
        setGreeting(`Good Morning, ${userName} 🌅`);
      } else if (hour < 18) {
        setGreeting(`Good Afternoon, ${userName} ☀️`);
      } else {
        setGreeting(`Good Evening, ${userName} 🌙`);
      }
    };

    updateGreeting();
    const interval = setInterval(updateGreeting, 60000); // Update every minute
    
    return () => clearInterval(interval);
  }, []);

  const handleClick = async () => {
    setLoading(true);
    
    try {
      // Open webhook URL in new tab
      window.open('https://hook.eu2.make.com/ad3sqw9fcany2mx5b1tn3housbsxae1s', '_blank');
      
      // Show success toast
      toast({
        title: "✅ Request Sent!",
        description: "Email will arrive shortly.",
        duration: 4000,
      });
      
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
        duration: 4000,
      });
    } finally {
      // Keep loading state for a moment to show the animation
      setTimeout(() => setLoading(false), 2000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative">
      {/* Background particles */}
      <div className="ai-particles absolute top-1/4"></div>
      <div className="ai-particles absolute top-1/3"></div>
      <div className="ai-particles absolute top-1/2"></div>
      <div className="ai-particles absolute top-2/3"></div>
      <div className="ai-particles absolute top-3/4"></div>
      
      <div className="text-center space-y-8 max-w-2xl animate-slide-in-up">
        {/* Greeting */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            {greeting}
          </h1>
          <p className="text-lg text-muted-foreground">
            The email will be sent in <span className="text-accent font-semibold">3–4 minutes</span> after clicking the button.
          </p>
        </div>

        {/* Trigger Button */}
        <div className="pt-8">
          <Button
            variant="hero"
            size="xl"
            onClick={handleClick}
            disabled={loading}
            className="relative min-w-64 animate-pulse-glow"
          >
            {loading ? (
              <>
                <Loader2 className="w-6 h-6 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Sparkles className="w-6 h-6" />
                Trigger AI Agent
              </>
            )}
          </Button>
        </div>

        {/* Description */}
        <div className="pt-12 space-y-4 animate-fade-in">
          <h2 className="text-2xl font-semibold text-foreground">
            AI-Powered Competitor Intelligence
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Our AI agent searches the internet for competitor updates, analyzes market trends, 
            and delivers actionable insights directly to your inbox.
          </p>
        </div>
      </div>
    </div>
  );
};
