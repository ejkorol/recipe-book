import { IDrop } from "../drops";

export interface IOre {
  name: string;
  type: string;
  description: string;
  hardness: number;
  blastResistance: number;
  toolRequired: string;
  minableWith: string[];
  texture: string;
  color: string;
  drops: IDrop[]
};
