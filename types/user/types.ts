import { DeaprtmentDTO } from "../department/types";
import { TeamDTO } from "../team/types";

export interface UserAuthInfo {
  userId: string;
  isLogin: boolean;
}

export interface BibotUserDTO {
  id: string;
  firstName: string;
  lastName: string;
  userRole: string;
  profileUrl: string;
  email: string;
  duty: string;
}

export interface BibotUserInfo {
  bibotUser: BibotUserDTO;
  department: DeaprtmentDTO;
  team: TeamDTO;
}

export interface ResourceAccess {
  bibot: {
    roles: string[];
  };
}
