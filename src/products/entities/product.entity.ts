import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true, default: 'без описания' })
  description: string;

  @Column({ nullable: true, default: 0 })
  amount: number;
}
