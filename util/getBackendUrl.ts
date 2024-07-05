import { Deployments } from "../types";

let backendUrl : string | null;

export async function getBackendUrl() {
  if(backendUrl) return backendUrl;
  const response = await fetch("https://haakoaho.github.io/speak-fun/deployments/meeting-planner.json");
  const data : Deployments = await response.json();
  backendUrl = data.backendUrl;
  return data.backendUrl;
}