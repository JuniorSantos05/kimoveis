import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Address, Categories } from "./index";

@Entity("real_estate")
export class RealEstate {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false, nullable: true })
  sold: boolean;

  @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
  value: number | string;

  @Column({ type: "integer" })
  size: number;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: string | Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: string | Date;

  @OneToOne(() => Address)
  @JoinColumn()
  @Index({ unique: true })
  address: Address;

  @ManyToOne(() => Categories)
  category: Categories;
}
