const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
const db = require("./db/database.js");

const multer = require("multer");

const pdfGenerator = require('wkhtmltopdf');
pdfGenerator.command = "C:\\Program Files\\wkhtmltopdf\\bin\\wkhtmltopdf.exe";

const template = require('./document');


// CREATES A LOCAL FOLDER
const upload = multer({ dest: "uploads" });

const cloudinary = require("cloudinary").v2;

const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const hash = (pass) => bcrypt.hashSync(pass, 10);

// CLOUDINARY CONFIG
cloudinary.config({
  cloud_name: "whah",
  api_key: "967934588341829",
  api_secret: "5tGQ-PeH3P4psCWHmTkZfzbsEsc",
});

// ULOAD.ANY(0) TAKES ANY TYPE OF DATA
app.post("/upload", upload.any(0), (req, res) => {
  // REQ.FILES[0].PATH GIVE US THE PATH FROM THE LOCAL FOLDER WITH FILE NAME
  let image = req.files[0].path;
  console.log("REQ========> ", req.files[0].path);

  try {
    // UPLOAD IMG TO CLOUDINARY
    cloudinary.uploader.upload(image, (error, result) => {
      error && res.send({ status: false, msg: error });
      res.send({ status: true, msg: result });
    });
  } catch (err) {
    res.send({ status: false, msg: err });
  }
  // THE RESPONSE WILL HAVE ALL THE DATA ABOUT THE UPLOADED IMG WE ONLY NEED THE URL FOR NOW
});

///////////////////////// Rgistration sTUDENT //////////////////////////////
app.post("/api/users/registration", (req, res) => {
  console.log("this is consol =>>>", req.body);
  var registerArray = [
    req.body.name,
    req.body.last,
    req.body.country,
    req.body.city,
    req.body.address,
    req.body.licence,
    req.body.dateOfBirth,
    req.body.placeOfBirth,
    req.body.nationality,
    req.body.educationlvl,
    req.body.field,
    req.body.postalcode,
    req.body.dreamJob,
    req.body.facebook,
    req.body.skills,
    req.body.languages,
    req.body.hobbies,
    req.body.image,
    req.body.summary,
    "false",
    req.body.username,
  ];
  db.registere(registerArray, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

//////////////////////// Registration COMPANY //////////////////////////////////////////

app.post("/api/users/registerCompany", (req, res) => {
  console.log("this is consol =>>>", req.body);

  var registerArray = [
    req.body.email,
    req.body.owner,
    req.body.field,
    req.body.numberOfEmployee,
    req.body.location,
    req.body.website,
    req.body.logo,
    req.body.about,
    "false",
    req.body.name,
  ];
  db.registerCompany(registerArray, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

////////////////////////////// Registration TRAINING CENTER /////////////////////////////////////

app.post("/api/users/registerTrainingCenter", (req, res) => {
  console.log("this is logo ", req.body.logo)
  var registerArray = [
    req.body.email,
    req.body.owner,
    req.body.trainingOptions,
    req.body.numberOfStudent,
    req.body.location,
    req.body.website,
    req.body.logo,
    req.body.about,
    "false",
    req.body.name,
  ];
  db.registerTrainingCenter(registerArray, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

////////////////////////////// waiting for validation ///////////////////////////
app.post("/api/users/sendVerificationRequest", (req, res) => {
  var array = ["true", req.body.username];
  db.verificationRequest(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
////////////////////////////// waiting for validation company ///////////////////////////
app.post("/api/users/sendVerificationRequestCompany", (req, res) => {
  var array = ["true", req.body.name];
  db.verificationRequestCompany(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
////////////////////////////// waiting for validation center ///////////////////////////
app.post("/api/users/sendVerificationRequestCenter", (req, res) => {
  var array = ["true", req.body.name];
  db.verificationRequestCenter(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
//////////////////// Admin Side : Student Verification //////////////////
app.post("/api/users/verifyStudent", (req, res) => {
  var array = ["true", req.body.username];
  db.verifyStudent(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/api/users/rejectStudent", (req, res) => {
  var array = ["false", req.body.username];
  db.rejectStudent(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
////////////////////////// Admin Side : Company Verififcation //////////////////////////////
app.post("/api/users/verifyCompanies", (req, res) => {
  var array = ["true", req.body.name];
  db.verifyCompanies(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/api/users/rejectCompanies", (req, res) => {
  var array = ["false", req.body.name];
  db.rejectCompanies(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
////////////////////////// Admin Side :Training Center /////////////////////////////////

app.post("/api/users/verifyCenter", (req, res) => {
  var array = ["true", req.body.name];
  db.verifyCenter(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/api/users/rejectCenter", (req, res) => {
  var array = ["false", req.body.name];
  db.rejectCenter(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
///////////////////////////////////GET NON VERIFIED USERS///////////////////////////////////////////

app.get("/api/users/getNonVerifiedStudents", async (req, res) => {
  try {
    const requests = await db.getNonVerifiedStudents();
    res.status(200).send(requests);
  } catch (err) {
    console.error(err);
  }
});

app.get("/api/users/getNonVerifiedCompanies", async (req, res) => {
  try {
    const requests = await db.getNonVerifiedCompany();
    res.status(200).send(requests);
  } catch (err) {
    console.error(err);
  }
});

app.get("/api/users/getNonVerifiedCenters", async (req, res) => {
  try {
    const requests = await db.getNonVerifiedCenters();
    res.status(200).send(requests);
  } catch (err) {
    console.error(err);
  }
});
//////////////// GET USER STATE ////////////
app.post("/api/users/getUsersatate", (req, res) => {
  console.log(req.body);
  db.getUserStatus(req.body.username, (err, data) => {
    if (err) throw err;
    res.status(200).send(data);
  });
});

app.post("/api/users/getCompanysatate", (req, res) => {
  console.log(req.body);
  db.getCompanyStatus(req.body.name, (err, data) => {
    if (err) throw err;
    res.status(200).send(data);
  });
});

app.post("/api/users/getCentersatate", (req, res) => {
  console.log(req.body);
  db.getCenterStatus(req.body.name, (err, data) => {
    if (err) throw err;
    res.status(200).send(data);
  });
});


// SIGN UP STUDENT
app.post("/addStudents", (req, res) => {
  console.log(req.body);
  var arr = [
    req.body.username,
    req.body.secretinfo,
    hash(req.body.password),
    req.body.email,
  ];
  db.addStudent(arr, (err, data) => {
    if (err) throw err;

    res.send(`${req.body.username} added succsesfully`);
  });
});


// LOG IN 
app.post("/login", (req, res) => {
  db.getUserInfo(req.body.username, (err, data) => {
    if (err) { res.send("error"); }
    console.log(data[0].password);
    var boolean = bcrypt.compareSync(req.body.password, data[0].password);
    var obj = {
      username: req.body.username,
      password: data[0].password,
    };
    boolean
      ? jwt.sign(
        {
          obj,
        },
        "privatekey",
        {
          expiresIn: "1h",
        },
        (err, token) => {
          err ? console.log(err) : res.status(200).json({ token: token });
          db.saveUserToken(req.body.username, token, (err, data) => {
            if (err) { console.log("error"); }

          });
        }
      )
      : res.send("wrong password ");
  });
});
app.post("/addCompany", (req, res) => {
  var array = [req.body.name, hash(req.body.password)];
  db.addCompany(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});
app.post("/loginCompanies", (req, res) => {
  db.logCompanies(req.body.name, (err, data) => {
    if (err) throw err;

    console.log(data[0].password);
    var boolean = bcrypt.compareSync(req.body.password, data[0].password);
    var obj = {
      name: req.body.name,
      password: data[0].password,
    };
    boolean
      ? jwt.sign(
        {
          obj,
        },
        "privatekey",
        {
          expiresIn: "1h",
        },
        (err, token) => {
          err ? console.log(err) : res.status(200).json({ token: token });
          db.saveCompToken(req.body.name, token, (err, data) => {
            if (err) throw err;
            console.log("token saved");
          });
        }
      )
      : res.send({ err });
  });
});
app.post("/addTC", (req, res) => {
  var array = [req.body.name, hash(req.body.password)];
  db.addTC(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

app.post("/loginTC", (req, res) => {
  db.logTC(req.body.name, (err, data) => {
    if (err) throw err;

    console.log(data[0].password);
    var boolean = bcrypt.compareSync(req.body.password, data[0].password);
    var obj = {
      name: req.body.name,
      password: data[0].password,
    };
    boolean
      ? jwt.sign(
        {
          obj,
        },
        "privatekey",
        {
          expiresIn: "1h",
        },
        (err, token) => {
          err ? console.log(err) : res.status(200).json({ token: token });
          db.saveTcToken(req.body.name, token, (err, data) => {
            if (err) throw err;
            console.log("token saved");
          });
        }
      )
      : res.send({ err });
  });
});
////////////////// ADD TOKENS TO DATABASE //////////////
app.post("/api/users/studentToken", (req, res) => {
  db.selectUserByToken(req.body.token, (err, data) => {
    if (err) throw err;
    console.log("token saved");
    res.send(data);
  });
});

app.post("/api/users/companyToken", (req, res) => {
  db.selectCompanyByToken(req.body.token, (err, data) => {
    if (err) throw err;
    console.log("token saved");
    res.send(data);
  });
});

app.post("/api/users/TcToken", (req, res) => {
  db.selectTcByToken(req.body.token, (err, data) => {
    if (err) throw err;
    console.log("token saved");
    res.send(data);
  });
});

app.post("/api/users/Update", (req, res) => {
  var token = req.body["2"];
  var username = "";
  jwt.verify(token, "privatekey", (err, decoded) => {
    username = decoded.obj.username;
  });
  var obj = {}
  for (var i = 0; i < req.body[0].length; i++) {
    obj[req.body[1][i]] = req.body[0][i]
  }
  for (var key in obj) {
    if (!obj[key]) {
      delete obj[key]
    }
  }
  db.updateUser(username, obj, (err, data) => {
    err ? console.log(err) : console.log(data)
  })
});

app.post("/api/users/findProfil", (req, res) => {
  var user = req.body.profilName;
  db.fetchAllProfile((err, data) => {
    if (err) throw err;
    var arrName = data.map((element) => Object.values(element)).flat();
    if (arrName.includes(user)) {
      db.fetchProfile(user, (err, result) => {
        if (err) throw err;
        res.send(result);
      });
    } else {
      res.send(`user dosen't exist`);
    }
  });
});

app.get("/api/users/getNonVerifiedCenters", async (req, res) => {
  try {
    const requests = await db.getNonVerifiedCenters();
    res.status(200).send(requests);
  } catch (err) {
    console.error(err);
  }
});

app.post("/api/users/getUsersatate", (req, res) => {
  console.log(req.body);
  db.getUserStatus(req.body.username, (err, data) => {
    if (err) throw err;
    res.status(200).send(data);
  });
});

app.post("/api/users/getCompanysatate", (req, res) => {
  console.log(req.body);
  db.getCompanyStatus(req.body.name, (err, data) => {
    if (err) throw err;
    res.status(200).send(data);
  });
});

app.post("/api/users/getCentersatate", (req, res) => {
  console.log(req.body);
  db.getCenterStatus(req.body.name, (err, data) => {
    if (err) throw err;
    res.status(200).send(data);
  });
});

app.post("/addStudents", (req, res) => {
  console.log(req.body);
  var arr = [
    req.body.username,
    req.body.secretinfo,
    hash(req.body.password),
    req.body.email,
  ];
  db.addStudent(arr, (err, data) => {
    if (err) throw err;

    res.send(`${req.body.username} added succsesfully`);
  });
});

app.post("/login", (req, res) => {
  db.getUserInfo(req.body.username, (err, data) => {
    if (err) throw err;

    console.log(data[0].password);
    var boolean = bcrypt.compareSync(req.body.password, data[0].password);
    var obj = {
      username: req.body.username,
      password: data[0].password,
    };
    boolean
      ? jwt.sign(
        {
          obj,
        },
        "privatekey",
        {
          expiresIn: "1h",
        },
        (err, token) => {
          err ? console.log(err) : res.status(200).json({ token: token });
          db.saveUserToken(req.body.username, token, (err, data) => {
            if (err) throw err;
            console.log("token saved");
          });
        }
      )
      : res.send({ err });
  });
});
app.post("/addCompany", (req, res) => {
  var array = [req.body.name, hash(req.body.password)];
  db.addCompany(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});
app.post("/loginCompanies", (req, res) => {
  db.logCompanies(req.body.name, (err, data) => {
    if (err) throw err;

    console.log(data[0].password);
    var boolean = bcrypt.compareSync(req.body.password, data[0].password);
    var obj = {
      name: req.body.name,
      password: data[0].password,
    };
    boolean
      ? jwt.sign(
        {
          obj,
        },
        "privatekey",
        {
          expiresIn: "1h",
        },
        (err, token) => {
          err ? console.log(err) : res.status(200).json({ token: token });
          db.saveCompToken(req.body.name, token, (err, data) => {
            if (err) throw err;
            console.log("token saved");
          });
        }
      )
      : res.send({ err });
  });
});
app.post("/addTC", (req, res) => {
  var array = [req.body.name, hash(req.body.password)];
  db.addTC(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

app.post("/loginTC", (req, res) => {
  db.logTC(req.body.name, (err, data) => {
    if (err) throw err;

    console.log(data[0].password);
    var boolean = bcrypt.compareSync(req.body.password, data[0].password);
    var obj = {
      name: req.body.name,
      password: data[0].password,
    };
    boolean
      ? jwt.sign(
        {
          obj,
        },
        "privatekey",
        {
          expiresIn: "1h",
        },
        (err, token) => {
          err ? console.log(err) : res.status(200).json({ token: token });
          db.saveTcToken(req.body.name, token, (err, data) => {
            if (err) throw err;
            console.log("token saved");
          });
        }
      )
      : res.send({ err });
  });
});

app.post("/api/users/studentToken", (req, res) => {
  db.selectUserByToken(req.body.token, (err, data) => {
    if (err) throw err;
    console.log("token saved");
    res.send(data);
  });
});

app.post("/api/users/companyToken", (req, res) => {
  db.selectCompanyByToken(req.body.token, (err, data) => {
    if (err) throw err;
    console.log("token saved");
    res.send(data);
  });
});

app.post("/api/users/TcToken", (req, res) => {
  db.selectTcByToken(req.body.token, (err, data) => {
    if (err) throw err;
    console.log("token saved");
    res.send(data);
  });
});

app.post("/api/company/Update", (req, res) => {
  console.log(req.body);
  var token = req.body["2"];
  console.log(token);
  var username = "";
  jwt.verify(token, "privatekey", (err, decoded) => {
    username = decoded.obj.name;
    console.log(username);
  });
  var obj = {};
  for (var i = 0; i < req.body[0].length; i++) {
    obj[req.body[1][i]] = req.body[0][i];
  }
  for (var key in obj) {
    if (!obj[key]) {
      delete obj[key];
    }
  }
  db.updateCompany(username, obj, (err, data) => {
    err ? console.log(err) : console.log(data);
  });
});

app.get("/api/posts", (req, res) => {
  db.getPosts((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.post("/api/posts/addPost", (req, res) => {
  var array = [
    req.body.title,
    req.body.description,
    req.body.image,
    "training",
    req.body.owner,
    req.body.rate,
    req.body.salary,
    req.body.contact,
  ];
  var array2 = [
    req.body.newNumberOfPosts,
    req.body.idCenter
  ]

  db.addPost(array, (err, data) => {
    err ? console.log(err) : db.updateNumberOfPosts(array2, (err, data) => {
      err ? console.log(err) : res.send(data)
    })
  });
});



app.post("/api/posts/delete", (req, res) => {
  var array = [
    req.body.id,
  ];
  db.deletePost(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});
app.post('/api/addPosts', (req, res) => {
  var postData = req.body['0']
  console.log(postData)
  db.savePosts(postData, (err, data) => {
    if (err) throw err;
    console.log(data);
  })
})

app.post('/api/center/update', (req, res) => {
  console.log(req.body)
  var token = req.body['2']
  var username = "";
  jwt.verify(token, "privatekey", (err, decoded) => {
    username = decoded.obj.name;
  });
  var obj = {}
  for (var i = 0; i < req.body[0].length; i++) {
    obj[req.body[1][i]] = req.body[0][i]
  }
  for (var key in obj) {
    if (!obj[key]) {
      delete obj[key]
    }
  }
  db.updateTc(username, obj, (err, data) => {
    err ? console.log(err) : console.log(data)
  })
})


//get the company posts by the owner name

app.post('/api/sreachByOwner', (req, res) => {
  db.postsByOwner(req.body.owner, (err, data) => {
    err ? console.log(err) : res.send(data)
  })

})

//delete posts inside company profile using owner
app.post('/api/rmCompanyPosts', (req, res) => {
  console.log('id ==== >', req.body)
  db.delCompPosts(req.body.id, (err, data) => {
    err ? console.log(err) : res.send(data)
  })
})

//find company posts by id before modify
app.post('/api/upCompanyPost', (req, res) => {
  const id = req.body['2'];

  var obj = {}
  for (var i = 0; i < req.body[0].length; i++) {
    obj[req.body[1][i]] = req.body[0][i]
  }
  for (var key in obj) {
    if (!obj[key]) {
      delete obj[key]
    }
  }
  console.log(obj)
  db.updateOnePost(id, obj, (err, data) => {
    err ? console.log(err) : console.log(data)
  })
})

app.post("/api/users/postsTc", (req, res) => {
  var array = [req.body.owner];
  db.getPostsOfTc(array, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.post('/api/update', (req, res) => {
  var arr = req.body;
  var obj1 = arr[0];
  var obj2 = arr[1];
  var arr1 = Object.values(obj1)
  var arr2 = Object.values(obj2)
  console.log(arr1, arr2)
  for (var i = 0; i < arr1.length; i++) {
    if (!arr1[i]) {
      arr1[i] = arr2[i];
    }

  }
  console.log(arr1);
  db.updatePost(arr1, (err, data) => {
    err ? console.log(err) : res.send(data);
  });

})

app.post("/api/posts/deleteTc", (req, res) => {
  var array = [
    req.body.id,
  ];
  db.deletePostTc(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

app.get("/api/students", (req, res) => {
  db.getAllStudents((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.get("/api/companies", (req, res) => {
  db.getAllCompanies((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});
app.get("/api/trainingCenters", (req, res) => {
  db.getAllTrainingCenters((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});


app.post("/api/users/ban/student", (req, res) => {
  var array = [
    req.body.id,
  ];
  db.banStudent(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

app.post("/api/users/ban/company", (req, res) => {
  var array = [
    req.body.id,
  ];
  db.banCompany(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

app.post("/api/users/ban/training", (req, res) => {
  var array = [
    req.body.id,
  ];
  db.banCenter(array, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});
app.post("/api/student/apply", (req, res) => {
  var arr = Object.values(req.body);
  db.StApply(arr, (err, data) => {
    err ? console.log(err) : res.send(data);
  })
})
app.post('/api/getNotification', (req, res) => {
  var arr = [req.body.owner]
  db.getStudentApplication(arr, (err, data) => {
    if (err) throw err;
    res.send(data);
  })
})
app.post('/api/deleteApply', (req, res) => {
  db.deleteApp(req.body.id, (err, data) => {
    err ? console.log(err) : res.send(data)
  })

})
app.post('/api/acceptapply', (req, res) => {
  db.acceptApp(req.body.id, (err, data) => {
    err ? console.log(err) : res.send(data)
  })

})


app.post("/api/users/numberOfPosts", (req, res) => {
  var id = req.body.id
  db.getCenterNumberOfPostsAvailble(id, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});


app.get("/api/posts/weeklyPosts/siver", (req, res) => {
  db.weeklydataSilver((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.get("/api/posts/weeklyPosts/gold", (req, res) => {
  db.weeklydataGold((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.get("/api/posts/weeklyPosts/plat", (req, res) => {
  db.weeklydataPlat((err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

app.post("/api/users/PlatMembership", (req, res) => {
  var name = [req.body.name]
  db.changeMembershipToPlat(name, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

app.post("/api/users/GoldMembership", (req, res) => {
  var name = [req.body.name]
  db.changeMembershipToGold(name, (err, data) => {
    err ? console.log(err) : res.send(data);
  });
});

//save users report to db

app.post('/api/users/Reports', (req, res) => {
  let obj = req.body
  for (var key in obj) {
    if (!obj[key]) {
      obj[key] = "anonymous"
    }
  }
  console.log(obj)
  db.userReports(Object.values(obj), (err, data) => {
    err ? console.log(err) : console.log(data);
  });
})

//get the reports for the admin
app.get('/api/admin/getReports', (req, res) => {
  db.getReports((err, data) => {
    err ? console.log(err) : res.send(data);
  });
})

//delete one report for the admin
app.post('/api/admin/delReports', (req, res) => {
  console.log(req.body.id)
  db.delOneReport(req.body.id, (err, data) => {
    err ? console.log(err) : console.log(data);
  });
})

//////////delete all report for the admin
app.delete('/api/admin/delAllReports', (req, res) => {
  db.delAllReports((err, data) => {
    err ? console.log(err) : console.log(data);
  })
})
///////// testing generate pdf
app.post('/api/pdf', (req, res) => {
  let data = req.body;
  console.log("Creating CV ...")
  pdfGenerator(template(data),
    {
      output: `${__dirname}/cv.pdf`,
      pageSize: 'A4'
    })
  res.send("Success")
})


app.listen(port, () => console.log(`server is listening on port ${port}`));
