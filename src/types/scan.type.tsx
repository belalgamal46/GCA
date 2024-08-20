export interface Cable {
  id: number;
  name: string;
  type?: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  serial: string;
  tutorial_link: string;
}

export interface CableScan {
  serial: string;
  address: string | null;
  cable_id: number;
  user_id: number;
  qrcode_identifier: string;
  updated_at: string;
  created_at: string;
  id: number;
  lon: string;
  lat: string;
}

export interface ScanResponse {
  cable: Cable;
  serial: string;
  address: string | null;
  cable_id: number;
  user_id: number;
  qrcode_identifier: string;
  updated_at: string;
  created_at: string;
  id: number;
  lon: string;
  lat: string;
  response: string;
  data: object;
  points: number;
  pointsAdded: number;
}
