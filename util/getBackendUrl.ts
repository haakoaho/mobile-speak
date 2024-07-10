import { Deployment } from "../types";

let backendUrl : string | null;

export function getBackendUrl() {
  return "https://mobile-speak.asuscomm.com:8081"
}

export function invalidateBackendUrl(){
  backendUrl = null;
}