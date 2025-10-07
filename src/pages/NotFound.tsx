import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="mb-4 text-4xl font-serif font-bold">Page Not Found</h1>
        <p className="mb-8 text-xl text-muted-foreground">The page you're looking for doesn't exist.</p>
        <a href="/" className="inline-flex items-center justify-center rounded-md bg-accent text-accent-foreground hover:bg-accent/90 h-10 px-8 font-medium transition-colors">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
