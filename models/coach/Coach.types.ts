// import { DefaultResponse } from "@/lib/utils/api-helpers/APIResponse.types";
// import { PaginatedResults } from "@/lib/utils/api-helpers/getPaginatedResults";
import { IProspect } from "../prospect/Prospect.types";

export interface IAncestor {
  _id: string;
  activeName: string;
  name: string;
  slug: string;
  role: string;
  rank: string;
}

export interface IParent {
  _id: string;
  tokenVersion: number;
  verified: boolean;
  approved: boolean;
  role: string;
  rank: string;
  receivedMOU: boolean;
  parent?: ICoach | null;
  prospectRecord: null;
  name: string;
  email: string;
  activeName: string;
  joinDate: string;
  ancestors?: IAncestor[] | null;
  slug: string;
  __v: number;
}

export interface ICoach {
  _id: string;
  tokenVersion: number;
  verified: boolean;
  approved: boolean;
  role: string;
  rank: string;
  parent?: IParent | null;
  name: string;
  email: string;
  activeName: string;
  joinDate: string;
  ancestors?: IAncestor[] | null;
  slug: string;
  __v: number;
  receivedMOU: boolean;
  prospectRecord?: IProspect | null;
}

// export interface CoachByIDResponse extends DefaultResponse {
//   coach?: ICoach | null;
// }

// export interface AllCoachesResponse extends DefaultResponse {
//   results: PaginatedResults<Partial<ICoach>[] | []>;
// }
// export interface AllCoachesResponse extends DefaultResponse {
//   coaches?: ICoach[] | null;
// }
