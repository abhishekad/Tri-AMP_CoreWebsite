import React from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle, RefreshCw } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null,
      errorInfo: null 
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to an error reporting service
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ 
      error,
      errorInfo,
      hasError: true 
    });
  }

  handleReset = () => {
    this.setState({ 
      hasError: false,
      error: null,
      errorInfo: null 
    });
    // Optionally: reset the app state here if needed
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-charcoal text-light-gray flex items-center justify-center p-6">
          <div className="max-w-2xl w-full bg-secondary/50 backdrop-blur-sm border border-red-500/30 rounded-xl p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-red-400" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-3">Something went wrong</h2>
            <p className="text-light-gray/80 mb-6">
              We're sorry, but an unexpected error occurred. Our team has been notified.
            </p>
            <div className="bg-charcoal/80 p-4 rounded-lg mb-6 text-left overflow-auto max-h-60">
              <p className="text-sm font-mono text-red-400 mb-2">
                {this.state.error?.toString()}
              </p>
              <details className="text-xs text-light-gray/60">
                <summary className="cursor-pointer mb-2">Error details</summary>
                <pre className="mt-2 p-2 bg-charcoal/50 rounded overflow-auto">
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                onClick={this.handleReset}
                className="bg-electric-blue hover:bg-electric-blue/90 text-white"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Try again
              </Button>
              <Button 
                variant="outline" 
                className="border-aqua/50 text-aqua hover:bg-aqua/10"
                onClick={() => window.location.href = '/'}
              >
                Go to Home
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
