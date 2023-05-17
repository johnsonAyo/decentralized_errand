import axios, { AxiosRequestConfig } from "axios";
import {
  pinata_apikey,
  pinata_secret,
  sendJsonHeader,
} from "./config";

interface PinJSONResponse {
  IpfsHash: string;
}

interface PinataMetadata {
  name: string;
}

interface PinataOptions {
  cidVersion: number;
}

interface PinataContent {
  [key: string]: any;
}

interface PinJSONData {
  pinataMetadata: PinataMetadata;
  pinataOptions: PinataOptions;
  pinataContent: PinataContent;
}

interface PinFileResponse {
  IpfsHash: string;
}

export async function sendJSONToIPFS(metadata: any): Promise<string> {
  const url = "https://api.pinata.cloud/pinning/pinJSONToIPFS";
  const data: PinJSONData = {
    pinataMetadata: {
      name: "listdata",
    },
    pinataOptions: {
      cidVersion: 1,
    },
    pinataContent: {
      profileInfo: {
        metadataDetails: metadata,
      },
    },
  };
  const response = await axios.post<PinJSONResponse>(url, JSON.stringify(data), sendJsonHeader);
  const hash = `ipfs://${response.data.IpfsHash}`;
  return hash;
}

export async function sendDataToIPFS(metadata: any): Promise<string> {
  const url = "https://api.pinata.cloud/pinning/pinJSONToIPFS";
  const data: PinJSONData = {
    pinataMetadata: {
      name: "listcontent",
    },
    pinataOptions: {
      cidVersion: 1,
    },
    pinataContent: {
      contentInfo: {
        content: metadata,
      },
    },
  };
  const response = await axios.post<PinJSONResponse>(url, JSON.stringify(data), sendJsonHeader);
  const hash = `ipfs://${response.data.IpfsHash}`;
  return hash;
}

export async function sendFileToIPFS(file: File): Promise<string> {
  const formData = new FormData();
  const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";
  formData.append("file", file);
  const pinataOptions = JSON.stringify({
    cidVersion: 0,
  });
  formData.append("pinataOptions", pinataOptions);
  const config: AxiosRequestConfig = {
    headers: {
      "Content-Type": `multipart/form-data`,
      pinata_api_key: pinata_apikey,
      pinata_secret_api_key: pinata_secret,
      Accept: "text/plain",
    },
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
  };
  const response = await axios.post<PinFileResponse>(url, formData, config);
  return response.data.IpfsHash;
}