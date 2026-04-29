import React, { Component, ReactNode } from 'react';
import { ErrorBanner } from './ErrorBanner';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-background text-on-background flex flex-col font-body-md antialiased">
          <header className="bg-teal-50/80 dark:bg-slate-950/80 backdrop-blur-md docked full-width top-0 sticky border-b border-teal-100 dark:border-slate-800 z-40">
            <div className="flex justify-between items-center w-full px-6 py-4 max-w-2xl mx-auto">
              <h1 className="text-xl font-bold tracking-tight text-teal-900 dark:text-teal-50 font-inter antialiased">
                Alışkanlık Takip
              </h1>
            </div>
          </header>
          <main className="flex-1 w-full max-w-2xl mx-auto px-container-margin py-xl pb-3xl relative z-10">
            <ErrorBanner
              title="Uygulama Hatası"
              message="Beklenmeyen bir hata oluştu. Sayfayı yenileyerek tekrar deneyebilirsiniz."
              onClose={this.handleReset}
            />
            <div className="mt-lg text-center">
              <button
                onClick={this.handleReset}
                className="bg-primary text-on-primary hover:bg-primary-container transition-colors rounded-lg px-lg py-sm font-label-md text-label-md cursor-pointer"
              >
                Yeniden Dene
              </button>
            </div>
          </main>
        </div>
      );
    }

    return this.props.children;
  }
}
