import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { getConnection } from 'typeorm';
describe('InvoiceController (e2e)', () => {
  let app: INestApplication;
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  afterAll(async () => {
    await getConnection('default').close();
    await app.close();
  });
  describe('find by id', () => {
    let id = 0;
    it('creating a invoice', () => {
      return request(app.getHttpServer())
        .post('/invoice')
        .set('authorization', 'rFIsnkAVn35qKc7uVwa0DQe209q0mY7KkWqwJx5S5yg=')
        .send({
          invoiceNumber: '22',
          amount: 45000,
          invoiceDate: '2022-07-04',
          createdBy: 'xxx',
          buyerName: 'yyy',
          sellerName: 'zzz',
        })
        .expect(201)
        .then((res) => {
          id = res.body.id;
          expect({ status: HttpStatus.CREATED });
        });
    });
    it('find id', () => {
      return request(app.getHttpServer())
        .get(`/invoice/${id}`)
        .set('authorization', 'rFIsnkAVn35qKc7uVwa0DQe209q0mY7KkWqwJx5S5yg=')
        .expect(200)
        .then((res) => {
          res.body;
          expect({ status: HttpStatus.FOUND });
        });
    });
  });
});
