import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./index";

@Entity("categories")
export class Categories {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  name: string;

  @OneToMany(() => RealEstate, (realEstate) => realEstate.category)
  realEstates: RealEstate[];
}
