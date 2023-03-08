import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("addresses")
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 45 })
  street: string;

  @Column({ length: 8 })
  zipCode: string;

  @Column({ length: 7, nullable: true, type: "varchar" })
  number: string | null | undefined;

  @Column({ length: 20 })
  city: string;

  @Column({ length: 2 })
  state: string;
 
}
