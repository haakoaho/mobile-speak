export async function getBackendUrl() {
  const response = await fetch("/api/backendUrl");
  const data = await response.json();
  return data.backendUrl;
}