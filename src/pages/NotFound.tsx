import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { BackgroundEffects } from "@/components/BackgroundEffects";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen relative">
      <BackgroundEffects />
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center space-y-8 animate-slide-in-up">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-foreground">404</h1>
            <h2 className="text-2xl font-semibold text-foreground">Page Not Found</h2>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.history.back()}
              className="animate-pulse-glow"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </Button>
            <Button 
              variant="nav" 
              size="lg"
              onClick={() => window.location.href = '/'}
            >
              <Home className="w-5 h-5" />
              Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
