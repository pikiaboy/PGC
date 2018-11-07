var createEntry = require('./createEntry.js');

var user = {
                  "uniqueID" : "pretend mfsadfdsd5 hash here",
                        "name" : {
                                         "first" : "Phil",
                                         "last" : "Canete"
                                 },
                   "email" : "pcanete@ucsc.edu",
                   "phone" : "916-878-6673",
                   "successfulReservations" : 0,
                   "pending" : 0
 };

createEntry(user);


