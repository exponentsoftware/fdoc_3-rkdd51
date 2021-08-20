// 2.  Questions:a, b and c are based on the following two arrays:users and products

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "17/05/2019 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "17/05/2019 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "17/05/2019 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "17/05/2019 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "17/05/2019 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// a. Imagine you are getting the above users collection from a MongoDB database.

// 	a. Create a function called ***signUp*** which allows user to add to the collection. If user exists, inform the user that he has already an account.
// 	b. Create a function called ***signIn*** which allows user to sign in to the application

// b. The products array has  three elements and each of them has six properties.

// 	a. Create a function called ***rateProduct*** which rates the product
// 	b. Create a function called ***averageRating*** which calculate the average rating of a product

// c. Create a function called ***likeProduct***. This function will helps to like to the product if it is not liked and remove like if it was liked.


////////////////////signUp ////////////////////////////////////

                    ///serverside
const signup = () => {
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      if (err.code === 11000) {
        return res.status(400).json({
          error: "Email already exist. Please try another email",
        });
      }
      return res
        .status(400)
        .json({ error: "could not be able to save in db, pls try again" });
    }
    res.status(200).json({
      name: user.name,
      username: user.username,
      email: user.email,
      id: user._id,
    });
  });
};

                //client side
const signup = (user) => {
  return fetch(`${API}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      console.log("response", response);
      return response.json();
    })
    .catch((err) => console.log(err));
};


signup({ username, email, password }).then((data) => {
  if (data.error) {
  console.log("error: ", data.error);
  }
  console.log("signup successful");
}).catch(console.log("error in signup"))



/////////////////////////////////signin//////////////////////////
////serverside
const signin = (req, res) => {
  const { email, password } = req.body;

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: errors.array()[0].msg,
    });
  }

  User.findOne({ email }, (err, user) => {
    try {
      if (err !== null) {
        res.status(400).json({
          error: "server error",
        });
      }
      if (!user) {
        return res.status(400).json({
          error: "not a registered email",
        });
      }
      if (user && user.authenticate(password) === false) {
        /////authenticate defined in schema as method
        return res.status(401).json({
          error: "Email and password doesn't match",
        });
      }

      //send response to front end
      const { _id, email, username } = user;
      return res.json({user: { _id, username, email } });
    } catch (error) {
      console.log(error);
    }
  });
};


///////client side
export const signin = (user) => {
  return fetch(`${API}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};


signin({ email: email, password: password })
.then((data) => {
  if (data.error) {
    console.log("error: ", data.error);
  } else {
    if (typeof window !== "undefined") {
      localStorage.setItem("username", JSON.stringify(data.user.username));
      localStorage.setItem("email", JSON.stringify(data.user.email));
      console.log("signin successful");
    }
  }
})
.catch(console.log("sign in requestt failed"));




//////////////////////////product rating/////////////////

////////since user is already logged-in, his username is already saved in localStorage//////
const username = localStorage.getItem("username")
/////since we are a product page so we can have productId/////

const productId = useParams()

///as user clicked on a product the perticular product page will open and there is a option of rate product will be shown///
//////as soon as user input the rate and click on save we will update the data///// 

const [products, setProducts] = useState(product)
/////initial value taken from abve declared product

const [rate, setrate] = useState("")
 
const submit = () => {
  setProducts({ ...products, products.rate: rate })

  const updateRate = await fetch(`${API}/${productId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ratings: rate}),
  }).then((res) => res.json).catch(err=>console.log(err))
  
  updateRate()

  }
  
  <form>
<input name='rate' value={rate} placeholder="rate the product" onChange={()=> setrate(rate)} />

<button type='submit' value='save' onClick={submit} />

</form>