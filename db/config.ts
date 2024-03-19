import { defineDb, defineTable, column } from 'astro:db';

export default defineDb({
	tables: {
		Video: defineTable({
			columns: {
				id: column.text({ primaryKey: true }),
				title: column.text(),
				slug: column.text(),
				url: column.text(),
				thumbnail: column.text(),
			},
		}),
	},
});
