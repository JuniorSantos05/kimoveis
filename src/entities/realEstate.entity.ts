import { Address, Category } from "./index";
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

  @CreateDateColumn({type: "date"})
  createdAt: string | Date;

  @UpdateDateColumn({type: "date"})
  updatedAt: string | Date;

  @OneToOne(() => Address, { cascade: true })
  @JoinColumn()
  @Index({ unique: true })
  address: Address;

  @ManyToOne(() => Category, { onDelete: 'SET NULL', nullable:true })
  category: Category | null | undefined;
}
