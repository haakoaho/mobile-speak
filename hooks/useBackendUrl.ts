import { useEffect, useState } from "react";

export const useBackendUrl = () => {
  const [backendUrl, setBackendUrl] = useState<string>("");

  useEffect(() => {
    async function fetchBackendUrl() {
      const url = await getBackendUrl();
      setBackendUrl(url);
    }
  
    fetchBackendUrl();
  }, []);

  return backendUrl;
};

export async function getBackendUrl() {
  const response = await fetch("/api/backendUrl");
  const data = await response.json();
  return data.backendUrl;
}
