export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Subtle light pulse gradient background */}
      <div className="w-full h-full relative">
        {/* Main gradient background with pulse animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse-gentle" />
        
        {/* Diagonal wave movement */}
        <div className="absolute inset-0 opacity-50">
          <div className="absolute w-full h-full bg-gradient-to-r from-transparent via-blue-400/5 to-transparent animate-wave-diagonal" />
          <div className="absolute w-full h-full bg-gradient-to-r from-transparent via-purple-400/5 to-transparent animate-wave-diagonal-reverse" />
        </div>
        
        {/* Glowing gradient transitions */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-blue-400/10 to-transparent animate-glow-blue" />
          <div className="absolute top-1/2 right-0 w-1/3 h-1/3 bg-gradient-radial from-purple-400/10 to-transparent animate-glow-purple" />
          <div className="absolute bottom-0 left-1/2 w-1/3 h-1/3 bg-gradient-radial from-pink-400/10 to-transparent animate-glow-pink" />
        </div>
      </div>
      
      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-transparent to-background/5" />
    </div>
  );
};