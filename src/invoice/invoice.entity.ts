import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('invoice')
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  invoiceNumber: string;

  @Column({ type: 'integer' })
  amount: number;

  @Column({ type: 'varchar' })
  invoiceDate: string;

  @Column({ type: 'varchar' })
  createdBy: string;

  @Column({ type: 'varchar' })
  buyerName: string;

  @Column({ type: 'varchar' })
  sellerName: string;
}
