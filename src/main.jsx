import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';
import '@/index.css';

function Root() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent hydration mismatch by only rendering after mount
  if (!isMounted) {
    return null;
  }

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<Root />);