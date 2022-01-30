import {MigrationInterface, QueryRunner} from "typeorm";

export class instructor1642583663769 implements MigrationInterface {
    name = 'instructor1642583663769'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "instructors" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "position" character varying NOT NULL, CONSTRAINT "PK_95e3da69ca76176ea4ab8435098" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "instructors"`);
    }

}
