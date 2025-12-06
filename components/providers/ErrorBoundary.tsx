// ABOUTME: Error boundary component to catch React errors and prevent full app crashes
// ABOUTME: Displays fallback UI with error details and reload option for graceful degradation

'use client';

import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-cyber-dark p-4">
          <div className="max-w-lg border-2 border-cyber-magenta p-8 bg-black/50">
            <h2 className="text-2xl font-bold text-cyber-magenta mb-4">
              ⚠️ SYSTEM_ERROR
            </h2>
            <p className="text-gray-400 mb-4">
              An unexpected error occurred in this section.
            </p>
            {this.state.error && (
              <pre className="text-xs text-gray-600 mb-4 p-4 bg-gray-900 overflow-auto">
                {this.state.error.message}
              </pre>
            )}
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-cyber-dark transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
