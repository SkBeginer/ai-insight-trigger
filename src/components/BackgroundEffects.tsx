export const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="ai-gradient-bg w-full h-full">
        {/* Additional floating particles for more dynamic effect */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="ai-particles absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5" />
      <div className="absolute inset-0 bg-gradient-to-tl from-accent/5 via-transparent to-transparent" />
    </div>
  );
};