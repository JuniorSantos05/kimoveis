import { getRounds, hashSync } from "bcryptjs";
import { type } from "os";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  name: string;

  @Column({ length: 45, unique: true })
  email: string;

  @Column({ type: 'boolean', default: false })
    admin: boolean

  @Column({ length: 120 })
  password: string;

  @CreateDateColumn({type: "date"})
  createdAt: string | Date;

  @UpdateDateColumn({type: "date"})
  updatedAt: string | Date;

  @DeleteDateColumn({type: "date"})
  deletedAt: string | Date;

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isEncrypted = getRounds(this.password);
    if (!isEncrypted) {
      this.password = hashSync(this.password, 10);
    }
  }
}
