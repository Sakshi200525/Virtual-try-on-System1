import { useState } from "react";

function useApi(apiFunction) {
  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState(null);

  const execute = async (...args) => {
    try {
      setLoading(true);
      setError(null);

      const result =
        await apiFunction(...args);

      return result;
    } catch (err) {
      setError(
        err.message ||
          "Something went wrong."
      );

      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    execute,
    loading,
    error,
  };
}

export default useApi;