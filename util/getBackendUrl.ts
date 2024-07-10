import { Deployment } from "../types";

let backendUrl : string | null;

export async function getBackendUrl() {
  return "http://mobile-speak.asuscomm.com:8081"
}

export function invalidateBackendUrl(){
  backendUrl = null;
}