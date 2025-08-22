

const {pgTable,uuid,varchar,text} =require("drizzle-orm/pg-core");

const authorTable=require("./author.model")

const booksTable =pgTable("authors",{
id:uuid().primaryKey().defaultRandom(),
title:varchar({length:55}).notNull(),
description:text(),
authorId:uuid().references(()=>  authorTable.id).notNull(),

})

module.exports=booksTable;