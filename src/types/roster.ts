export type Roster = {
  id: string;
  name: string;
  surname: string;
  jerseyNum: number;
  DOB: string;
  height: number;
  position: "PG" | "SG" | "SF" | "PF" | "C";
  stats?: string;
};
