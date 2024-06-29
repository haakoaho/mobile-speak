import { Deployments } from "../types";


let deployments : Deployments | null;

export async function getDeployments() : Promise<Deployments> {
  if(deployments) return deployments;
  const response = await fetch("https://haakoaho.github.io/speak-fun/deployments.json");
  return await response.json();
}