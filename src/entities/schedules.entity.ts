import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate, User } from "./index";

@Entity("schedules_users_properties")
export class ScheduleUserProperty {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "date" })
  date: Date | string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => RealEstate)
  realEstate: RealEstate;

  @ManyToOne(() => User)
  user: User;
}
