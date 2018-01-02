exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("resolution")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resolution").insert([
        {
          name: "joe",
          content: "I want to lose 10 pounds by the end of February"
        },
        {
          name: "jenny",
          content: "I want to get hired as a developer by the end of February"
        }
      ]);
    });
};
