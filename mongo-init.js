db.createUser({
  user: "useless",
  pwd: "somthing",
  roles: [
    {
      role: "readWrite",
      db: "anarchy"
    }
  ]
});