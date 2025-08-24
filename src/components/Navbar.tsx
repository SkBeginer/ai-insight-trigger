import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Settings, User, UserCircle, Edit3, LogOut, Bell, Moon, Sun, Cog } from "lucide-react";
import aiLogo from "@/assets/ai-logo.png";

export const Navbar = () => {
  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 animate-fade-in">
          <img 
            src={aiLogo} 
            alt="AI Agent" 
            className="w-10 h-10 animate-pulse-glow"
          />
          <span className="text-xl font-semibold text-foreground">
            AI Insights
          </span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center gap-3 animate-fade-in">
          {/* Account Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="nav" 
                size="sm"
                className="hover:scale-105 transition-all duration-300"
              >
                <User className="w-4 h-4" />
                Account
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-card/95 backdrop-blur-sm border-border/50" align="end">
              <DropdownMenuItem className="cursor-pointer hover:bg-accent/50">
                <UserCircle className="w-4 h-4 mr-2" />
                View Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-accent/50">
                <Edit3 className="w-4 h-4 mr-2" />
                Edit Profile
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-border/50" />
              <DropdownMenuItem className="cursor-pointer hover:bg-accent/50">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Settings Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="nav" 
                size="sm"
                className="hover:scale-105 transition-all duration-300"
              >
                <Settings className="w-4 h-4" />
                Settings
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-card/95 backdrop-blur-sm border-border/50" align="end">
              <DropdownMenuItem className="cursor-pointer hover:bg-accent/50">
                <Bell className="w-4 h-4 mr-2" />
                Notification Preferences
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-accent/50">
                <Moon className="w-4 h-4 mr-2" />
                Theme Toggle (Light/Dark)
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-border/50" />
              <DropdownMenuItem className="cursor-pointer hover:bg-accent/50">
                <Cog className="w-4 h-4 mr-2" />
                System Settings
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};