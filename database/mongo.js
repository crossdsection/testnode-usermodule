use userTest;
db.createUser({ user: "testadmin" , pwd: "test", roles: ["userAdmin"]});
db.auth('testadmin','test');


