import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';

export const usersTable = mysqlTable('users_table', {
  id: int({ unsigned: true }).primaryKey().autoincrement(),
  name: varchar({ length: 255 }).notNull(),
  age: int().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  image: varchar({ length: 255 })
});
