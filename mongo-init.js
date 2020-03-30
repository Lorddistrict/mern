db.createUser({
  user: "etienne",
  pwd: "root",
  roles: [
    {
      role: "readWrite",
      db: "anarchy"
    }
  ]
});
