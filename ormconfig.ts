import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'munna6069',
  database: 'courses',
  entities: ['dist/src/**/*.entity{.ts,.js}'],
  synchronize: false,
  // migrationsTableName: 'custom_migration_table',
  migrations: ['dist/src/database/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};
export default typeormConfig;
