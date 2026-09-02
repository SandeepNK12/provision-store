import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateStore1788342068554 implements MigrationInterface {
    name = 'CreateStore1788342068554'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`stores\` ADD \`address\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`stores\` ADD \`is_deleted\` int NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`stores\` ADD \`deletedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`stores\` DROP COLUMN \`deletedAt\``);
        await queryRunner.query(`ALTER TABLE \`stores\` DROP COLUMN \`is_deleted\``);
        await queryRunner.query(`ALTER TABLE \`stores\` DROP COLUMN \`address\``);
    }

}
