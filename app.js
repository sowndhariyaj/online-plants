const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"));

const products = [{

    "DAIRY": [{
            ProductName: "Best 3 Table top / Office Desk Plants to Bring Prosperity",
            Des: "asd asd asd asd asd asd asd",
            Price: "780"
        },
        {
            ProductName: "Air nPurifier Money Plant with pot",
            Des: "asd asd asd asd asd asd asd",
            Price: "900"
        },
        {
            ProductName: "Miniature Rose, Button Rose (Any Color) - Plant",
            Des: "asd asd asd asd asd asd asd",
            Price: "620"
        },
        {
            ProductName: "2 Layer Lucky Bamboo Plant in a Bowl with Pebbles",
            Des: "asd asd asd asd asd asd asd",
            Price: "590"
        },
        {
            ProductName: "Bougainvillea (White) - Plant",
            Des: "asd asd asd asd asd asd asd",
            Price: "839"
        },
        {
            ProductName: "Parijat Tree, Parijatak, Night Flowering Jasmine - Plant",
            Des: "asd asd asd asd asd asd asd",
            Price: "655"
        },
        {
            ProductName: "Passiflora Sherry (Red) - Plant",
            Des: "asd asd asd asd asd asd asd",
            Price: "585"
        },
        {
            ProductName: "Cassia fistula, Golden shower Tree, Bahava - Plant",
            Des: "asd asd asd asd asd asd asd",
            Price: "820"
        },

    ]
}, {
    "FILLING": [{
            ProductName: "Salvia splendens (Any Color) - Plant",
            Des: "asd asd asd asd asd asd asd",
            Price: "450"
        },
        {
            ProductName: "Marigold Pusa Basanti - Desi Flower Seeds",
            Des: "asd asd asd asd asd asd asd",
            Price: "380"
        },
        {
            ProductName: "Zinnia Tall Mixed Color - Desi Flower Seeds",
            Des: "asd asd asd asd asd asd asd",
            Price: "300"
        },
        {
            ProductName: "Balsam Rose, Balsam Gulab - Desi Flower Seeds",
            Des: "asd asd asd asd asd asd asd",
            Price: "500"
        },
        {
            ProductName: "Sitaphal, Annona squamosa (Grown Through Seeds) - Plant",
            Des: "asd asd asd asd asd asd asd",
            Price: "580"
        },
        {
            ProductName: "Radish Japani white - Desi Vegetable Seeds",
            Des: "asd asd asd asd asd asd asd",
            Price: "450"
        },
        {
            ProductName: "Rajnigandha, Tuberose - Bulbs (set of 10)",
            Des: "asd asd asd asd asd asd asd",
            Price: "370"
        },
        {
            ProductName: "Radish Red Round - Desi Vegetable Seeds",
            Des: "asd asd asd asd asd asd asd",
            Price: "430"
        },

    ]
}, {
    "FROZENNV": [{
            ProductName: "Warli Painting Ceramic Pots - Pack of 3",
            Des: "asd asd asd asd asd asd asd",
            Price: "600"
        },
        {
            ProductName: "5.7 inch (14 cm) Ronda No. 14.5 Round Plastic Planter (Mix Color) - Pack of 6",
            Des: "asd asd asd asd asd asd asd",
            Price: "595"
        },
        {
            ProductName: "4.5 inch (11 cm) Hanging Round Handmade Wooden Pot (Brown)",
            Des: "asd asd asd asd asd asd asd",
            Price: "350"
        },
        {
            ProductName: "Dholki Concrete Pots - Pack of 2",
            Des: "asd asd asd asd asd asd asd",
            Price: "490"

        },
        {
            ProductName: "9.1 inch (23 cm) Ronda No. 2320 Wooden Finish Round Plastic Planter (Brown)",
            Des: "asd asd asd asd asd asd asd",
            Price: "460"

        },
        {
            ProductName: "5.7 inch (14 cm) Apple Round Ceramic Pots - Pack of 2",
            Des: "asd asd asd asd asd asd asd",
            Price: "380"

        },
        {
            ProductName: "2.8 inch (7 cm) Elephant Shape Marble Finish Ceramic Pot (Light Brown) (set of 2)",
            Des: "asd asd asd asd asd asd asd",
            Price: "420"

        },
        {
            ProductName: "4.3 inch (11 cm) Buddha Marble Finish Ceramic Pot (White) (set of 2)",
            Des: "asd asd asd asd asd asd asd",
            Price: "380"

        },
    ]
}, {
    "FROZENV": [{
            ProductName: "Coco peat block - 900 g (Expands Up to 8 - 14 L)",
            Des: "asd asd asd asd asd asd asd",
            Price: "590"
        },
        {
            ProductName: "Expanded Clay Aggregate (Clay Balls) - 1 kg",
            Des: "asd asd asd asd asd asd asd",
            Price: "490"
        },
        {
            ProductName: "Plant O Boost (Special Flower Booster, 10 g) (set of 10)",
            Des: "asd asd asd asd asd asd asd",
            Price: "580"
        },
        {
            ProductName: "Exfoliated Vermiculite - 250 g",
            Des: "asd asd asd asd asd asd asd",
            Price: "430"

        },
        {
            ProductName: ".Perlite - 500 g",
            Des: "asd asd asd asd asd asd asd",
            Price: "410"

        },
        {
            ProductName: "Soilrite Plus (Soil-less Potting Mix with Nutrients) - 2 kg",
            Des: "asd asd asd asd asd asd asd",
            Price: "530"

        },
        {
            ProductName: "Neem Cake - 1 kg (Set of 2)",
            Des: "asd asd asd asd asd asd asd",
            Price: "620"

        },
        {
            ProductName: "Vermicompost - 1 kg (Set of 2)",
            Des: "asd asd asd asd asd asd asd",
            Price: "551"

        },
    ]

}, {
    "TINNED": [{
            ProductName: "Aquarium Pebbles (Yellow, Small) - 1 kg",
            Des: "asd asd asd asd asd asd asd",
            Price: "250"
        },
        {
            ProductName: "Aquarium Pebbles (Mix Color, Small) - 1 kg",
            Des: "asd asd asd asd asd asd asd",
            Price: "237"
        },
        {
            ProductName: "Super Granite Pebbles (Black, Rodi, Polished) - 1 kg",
            Des: "asd asd asd asd asd asd asd",
            Price: "326"
        },
        {
            ProductName: "Onex Pebbles (Occur Yellow, Medium) - 1 kg",
            Des: "asd asd asd asd asd asd asd",
            Price: "380"

        },
        {
            ProductName: "Stone Sand (Red) - 1 kg",
            Des: "asd asd asd asd asd asd asd",
            Price: "325"

        },
        {
            ProductName: "Super Marble Pebbles (White, Small, Polished) - 1 kg",
            Des: "asd asd asd asd asd asd asd",
            Price: "430"

        },
        {
            ProductName: "Aquarium Pebbles (Green, Small) - 1 kg",
            Des: "asd asd asd asd asd asd asd",
            Price: "425"

        },
        {
            ProductName: "Onex Pebbles (Lime Yellow, Medium) - 1 kg",
            Des: "asd asd asd asd asd asd asd",
            Price: "395"

        },
    ]
}, {
    "CULLINARY": [{
        ProductName: "Sweet Chilli Sauce",
        Des: "asd asd asd asd asd asd asd",
        Price: "190"
    }, {
        ProductName: "Mexican Salsa Sauce",
        Des: "asd asd asd asd asd asd asd",
        Price: "210"
    }, {
        ProductName: "Tomato Sauce",
        Des: "asd asd asd asd asd asd asd",
        Price: "200"
    }]
}]



var username = "";
var adminSign = "admin";
var condition = false;
var productList = [];

mongoose.connect("mongodb://127.0.0.1:27017/Product", { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
    userid: { type: String, unique: true },
    password: String,
    phone: Number,
    cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'cart' }],
    delivery: [{ type: mongoose.Schema.Types.ObjectId, ref: 'delivery' }],
    // history: [{ type: mongoose.Schema.Types.ObjectId, ref: 'history' }]
});
const User = mongoose.model("userlogs", userSchema) //Collection-1

//Product
const cartSchema = new mongoose.Schema({
    productName: String,
    imageId: String,
    price: Number,
    quantity: Number
})
const Cart = mongoose.model("cart", cartSchema)

//Delivery
const deliverySchema = new mongoose.Schema({
    userid: String,
    deliveryDate: Date,
    address: String,
    totalPrice: Number,
    paidStatus: { type: String, default: "Not Paid" },
    deliveryStatus: { type: String, default: "Not Done" },
    products: [{ productName: String, imageId: String, price: Number, quantity: Number }]
})
const Delivery = mongoose.model("delivery", deliverySchema)

//History
// const historySchema = new mongoose.Schema({
//     userid: String,
//     deliveryDate: Date,
//     address: String,
//     totalPrice: Number,
//     paidStatus: { type: String, default: "Not paid" },
//     deliveryStatus: { type: String, default: "Done" },
//     products: [{ productName: String, imageId: String, price: Number, quantity: Number }]
// })
// const History = mongoose.model("history", historySchema)



app.get("/", (req, res) => {
    res.render("index", { username: username });
})
app.get("/login", (req, res) => {
    res.render("login", { msg: "", username: username });
})
app.get("/product", (req, res) => {
    res.render("product", { products: products, username: username });
})
app.get("/contact", (req, res) => {
    res.render("contact", { username: username });
})
app.get("/admin", (req, res) => {
    if (adminSign != "") {
        User.find({}, (err, output) => {
            if (!err) {
                console.log(adminSign);
                res.render("admin", { userlist: output, msg: "", username: adminSign });
            }
        })
    } else {
        res.render("login", { msg: "Login To Admin Pannel", username: "" });
    }
})

app.get("/delivery", (req, res) => {
    Delivery.find({}, (err, output) => {
        if (!err) {
            res.render("yetToDelivery", { products: output, username: adminSign });
            // console.log(output);
        }
    })
})

// User.findOne({ userid: "saran" }).populate('history').exec((err, output) => {
//     if (!err) {
//         console.log(output.history);
//     }
// })

// app.get("/history",(req,res) => {
//     if (username == "") {
//         res.render("login", { msg: "Log In to See the HISTORY", username: "" });
//     } else {
//         User.findOne({ userid: username }).populate('history').exec((err, output) => {
//             if (!err) {
//                 res.render("history", { products: output.history, username: username });
//             }
//         })
//     }
// })

app.get('/sucess',(req,res)=>{
    res.render('sucess');
})

// Login
app.post("/login", (req, res) => {
    var userid = req.body.userName
    var pass = req.body.Password

    User.findOne({ userid: userid }, (err, output) => {
        if (!err) {
            if (output) {
                if (output.password == pass) {
                    username = userid;

                    //Session Handling!
                    if (condition) {
                        const NewCart = new Cart({
                                productName: productList[0],
                                imageId: productList[1],
                                quantity: productList[2],
                                price: productList[3]
                            })
                            // console.log(userid);
                        productList = []
                        User.findOne({ userid: userid }, (err, output) => {
                            if (!err) {
                                output.cart.push(NewCart);
                                output.save((err) => {
                                    if (!err) {
                                        NewCart.save();
                                        res.redirect("/product");
                                    }
                                })
                            }
                        })
                    } else {
                        // console.log("Error");
                        res.redirect("product");
                    }

                } else {
                    res.render("login", { msg: "Wrong Password!", username: username });
                }
            } else {
                res.render("login", { msg: "UserID Not Found! Pls SignUp", username: username });
            }
        }
    })
})
app.post("/signup", (req, res) => {
    var userid = req.body.userName
    var pass = req.body.Password
    var repass = req.body.RePassword
    var phone = req.body.phone

    User.findOne({ userid: userid }, (err, output) => {
        if (!err) {
            if (!output) {
                if (pass != repass) {
                    res.render("login", { msg: "SingUp Failed! Re-Type the Correct Password", username: username });
                } else {
                    const newuser = new User({
                        userid: userid,
                        password: pass,
                        phone: phone
                    })
                    newuser.save()
                    res.render("login", { msg: "successfully Registed!", username: username });
                }
            } else {
                res.render("login", { msg: "User-ID Already Exits!", username: username });
            }
        }
    })
})

app.post("/adminsign", (req, res) => {
    var userid = req.body.userid;
    var pass = req.body.pass;

    if (userid == "admin") {
        if (pass == "admin") {
            adminSign = "admin"
            res.redirect("admin");
        } else {
            res.render("login", { msg: "Wrong Admin Password!", username: adminSign });
        }
    } else {
        res.render("login", { msg: "Wrong Admin UserID!", username: adminSign });
    }

})

// Cart
app.get("/cart", (req, res) => {

    if (username == "") {
        res.render("login", { msg: "Log In to See the CART", username: "" });
    } else {
        User.findOne({ userid: username }).populate('cart').exec((err, output) => {
            if (!err) {
                res.render("cart", { found: output.cart, NoOfProducts: 1, username: username });
            }
        })
    }
})
app.post("/cart", (req, res) => {
    var price = parseInt(req.body.price);
    var quantity = parseInt(req.body.quantity);
    var productName = req.body.product;
    var userid = req.body.userid;
    var imageId = req.body.image;

    if (username == "") {
        condition = true;
        productList.push(productName)
        productList.push(imageId)
        productList.push(quantity)
        productList.push(quantity * price)
        res.render("login", { msg: "Log In to ADD up your Product", username: "" });
    } else {

        // console.log(userid);

        User.findOne({ userid: userid }).populate('cart').exec((err, output) => {
            if (!err) {
                var foundValue = -1;
                output.cart.forEach((e) => {
                    if (e.productName == productName) {
                        foundValue = e._id;
                    }
                });

                if (foundValue == -1) {
                    // adding New product
                    const NewCart = new Cart({
                        productName: productName,
                        imageId: imageId,
                        quantity: quantity,
                        price: quantity * price
                    })

                    output.cart.push(NewCart);
                    output.save((err) => {
                        if (!err) {
                            NewCart.save();
                            res.redirect("/product");
                        }
                    })
                } else {
                    //Updating the Products
                    Cart.findOne({ _id: foundValue }, (err, product) => {
                        product.quantity += quantity;
                        product.price += quantity * price;
                        product.save((err) => {
                            if (!err) {
                                res.redirect("/product");
                            }
                        });
                    })

                }
            }
        });

    }

})
app.get("/deliverysts", (req, res) => {

        if (username != "") {
            User.findOne({ userid: username }).populate('delivery').exec((err, output) => {
                if (!err) {
                    console.log(output.delivery);
                    if (output.delivery[0] == undefined) {
                        res.render("deliverysts", { username: username, products: [] });
                    } else {
                        res.render("deliverysts", { username: username, products: output.delivery });
                    }
                }
            })
        } else {
            res.render("login", { msg: "Log In to See Delivery status", username: "" });
        }
    })
    // place Order
app.post("/placeorder", (req, res) => {
        var amount = req.body.amount;
        var deliveryDate = req.body.deliveryDate;
        var address = req.body.address;
        console.log(amount);

        User.findOne({ userid: username }).populate('cart').exec((err, usercart) => {
            if (!err) {
                const productArray = [];
                usercart.cart.forEach(e => {
                    var productList = { productName: e.productName, imageId: e.imageId, price: e.price, quantity: e.quantity }
                    productArray.push(productList);
                });

                //Adding Delivery info
                const newDelivery = new Delivery({
                    userid: username,
                    deliveryDate: deliveryDate,
                    address: address,
                    totalPrice: amount,
                    products: productArray
                })
                usercart.delivery.push(newDelivery);
                usercart.cart = [];
                usercart.save((error) => {
                    if (!error) {
                        newDelivery.save((err) => {
                            if (!err) {
                                res.redirect("/sucess")
                            }
                        });
                    }
                })

            }
        })


    })
    // remove item
app.post("/removeProduct", (req, res) => {
    const id = req.body.id;
    // console.log(username);
    Cart.findOneAndDelete({ _id: id }, (err) => {
        if (!err) {
            User.findOne({ userid: username }, (err, output) => {
                if (!err) {

                    //Removes the Id in Array
                    const index = output.cart.indexOf(id);
                    if (index > -1) {
                        output.cart.splice(index, 1); // 2nd parameter means remove one item only
                    }
                    output.save((err) => {
                        if (!err) {
                            res.redirect("/cart")
                        }
                    })
                }
            })
        }
    })
})


// Admin
// remover User
app.post("/removeUser", (req, res) => {
    var id = req.body.id
        // User.findOneAndDelete({age: {$gte:5} }, function (err, docs) {
    User.findOneAndDelete({ _id: id }, (err) => {
        if (!err) {
            User.find({}, (err, output) => {
                if (!err) {
                    res.render("admin", { userlist: output, msg: "Successfully Removed!", username: username });
                }
            })
        }
    })

})

app.post("/viewUserDeliveryProducts", (req, res) => {
    var id = req.body.id
        // console.log(userId);
    User.findById({ _id: id }).populate('delivery').exec((err, output) => {
        if (!err) {
            if (output.delivery[0] == undefined) {
                res.render("develiveryTemp", { username: "Admin", products: [] });
            } else {
                res.render("develiveryTemp", { username: "Admin", products: output.delivery });
            }
        }
    })
})

app.get("/toDelivery", (req, res) => {
    if (adminSign != "") {
        User.findOne({}).populate('delivery').exec((err, output) => {
            if (!err) {
                res.render("toDelivery", { username: adminSign, userArray: output })
            }
        })
    } else {
        res.render("login", { msg: "Login To Admin Pannel", username: "" });
    }
})


// Log Out  
app.get("/logout", (req, res) => {
    username = ""
    res.redirect("/")
})
app.get("/logoutAdmin", (req, res) => {
    adminSign = ""
    res.redirect("/")
})

app.post("/paid", (req, res) => {
    var user = req.body.user;
    Delivery.updateOne({ userid: user }, { paidStatus: "Paid" }, (err, output) => {
        res.redirect("/delivery");
        console.log("Paid status Updated successfully");
    })
})
app.post("/delivered", (req, res) => {
    var user = req.body.user;
    Delivery.updateOne({ userid: user }, { deliveryStatus: "Done" }, (err, output) => {
        paidsts = "Done";
        console.log("delivery status updated sucessfully");
        res.redirect("/delivery");
    })
    const productArray = [];
    Delivery.findOne({ userid: user }, (err, output) => {
        output.products.forEach(e => {
            var productList = { productName: e.productName, imageId: e.imageId, price: e.price, quantity: e.quantity }
            productArray.push(productList);
        });
        // const newHistory = new History({
        //     userid: output.userid,
        //     deliveryDate: output.deliveryDate,
        //     address: output.address,
        //     totalPrice: output.totalPrice,
        //     paidStatus: output.paidStatus,
        //     deliveryStatus: "Delivered",
        //     products: productArray
        // })
        // newHistory.save((e) => {
        //     if (!e) {
        res.render("yetToDelivery", { products: output, username: adminSign });
        //     }
        // })
    })
})

app.listen(9000, () => {
    console.log("server is running on port 9000");
})