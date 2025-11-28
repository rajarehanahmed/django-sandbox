import { useState, useCallback } from 'react';
import { ApiResponse } from '../services/api';

// Custom hook for handling API states
export function useApiCall<T>() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);

  const execute = useCallback(async (apiCall: () => Promise<ApiResponse<T>>) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await apiCall();
      
      if (response.error) {
        setError(response.error);
        return null;
      }
      
      setData(response.data);
      return response.data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setLoading(false);
    setError(null);
    setData(null);
  }, []);

  return {
    loading,
    error,
    data,
    execute,
    reset
  };
}

// Simple error message component
export function ErrorMessage({ error, onRetry }: { error: string; onRetry?: () => void }) {
  return (
    <div className="bg-red-50 border-l-4 border-red-400 p-4 my-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <span className="text-red-400 text-xl">⚠️</span>
        </div>
        <div className="ml-3 flex-1">
          <p className="text-sm text-red-700">{error}</p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="mt-2 bg-red-600 text-white px-3 py-1 text-sm rounded hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// Loading spinner component
export function LoadingSpinner({ message = "Loading..." }: { message?: string }) {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="flex items-center space-x-2">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
        <span className="text-gray-600">{message}</span>
      </div>
    </div>
  );
}

// Network status utilities
export function isOnline(): boolean {
  return navigator.onLine;
}

export function getNetworkErrorMessage(error: string): string {
  if (!isOnline()) {
    return "You appear to be offline. Please check your internet connection.";
  }
  
  if (error.includes('Failed to fetch') || error.includes('NetworkError')) {
    return "Unable to connect to the server. The backend might be offline.";
  }
  
  if (error.includes('404')) {
    return "The requested resource was not found.";
  }
  
  if (error.includes('500')) {
    return "Server error. Please try again later.";
  }
  
  return error;
}