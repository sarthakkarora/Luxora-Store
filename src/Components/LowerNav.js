import { React, useEffect, useState, useRef } from "react";
import Logo from "../imgs/hlogo.png";
import search from "../imgs/search.png";
import wishlist from "../imgs/wishlist.png";
import cart from "../imgs/cart.png";
import orders from "../imgs/orders.png";
import Default from "../imgs/default.png";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import "./navbar.css";
import { app } from "../Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import swal from "sweetalert";

const auth = getAuth(app);

function LowerNav() {
  const CartItems = useSelector((state) => state.CartItemsAdded.CartItems);
  const ListItems = useSelector((state) => state.ItemsAdded.ListItems);
  const OrderItems = useSelector((state) => state.OrderAdded.OrderItems);
  const [user, setUser] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [Products, setProducts] = useState([]);

  const navigate = useNavigate();

  const searchResultsRef = useRef(null);

  const totalLength = OrderItems.reduce((acc, item) => {
    // if the item is an array, add its length to the accumulator
    if (Array.isArray(item)) {
      return acc + item.length;
    }
    // otherwise, just add 1 to the accumulator
    return acc + 1;
  }, 0);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    const GetProducts = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      const new_data = await data.json();
      setProducts(new_data);
    };

    GetProducts();

    const handleClick = (event) => {
      if (
        searchResultsRef.current &&
        !searchResultsRef.current.contains(event.target)
      ) {
        setSearchText("");
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const searchResults = Products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchText.toLowerCase()) ||
      product.description.toLowerCase().includes(searchText.toLowerCase())
  );

  const totalQuantity = CartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <div className="navbar2">
        <div className="right-content2">
          <div className="right-one">
            <img
              onClick={() => {
                if (window.location.href.includes("/payment")) {
                  swal({
                    title: "Are you sure?",
                    text: "Your transaction is still pending!",
                    icon: "warning",
                    buttons: ["Cancel", "Yes"],
                  }).then((willNavigate) => {
                    if (willNavigate) {
                      navigate("/wishlists");
                    }
                  });
                } else {
                  navigate("/wishlists");
                }
              }}
              src={wishlist}
              className="wishlist"
            />
            <p
              style={
                ListItems && ListItems.length > 0
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
              className="list-count"
            >
              {ListItems.length}
            </p>
          </div>

          <div className="right-two">
            <img
              onClick={() => {
                if (window.location.href.includes("/payment")) {
                  swal({
                    title: "Are you sure?",
                    text: "Your transaction is still pending!",
                    icon: "warning",
                    buttons: ["Cancel", "Yes"],
                  }).then((willNavigate) => {
                    if (willNavigate) {
                      navigate("/cart");
                    }
                  });
                } else {
                  navigate("/cart");
                }
              }}
              src={cart}
              className="cart"
            />

            <p
              style={
                CartItems && CartItems.length > 0
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
              className="cart-count"
            >
              {totalQuantity}
            </p>
          </div>

          <div className="right-three">
            <img
              onClick={() => {
                if (window.location.href.includes("/payment")) {
                  swal({
                    title: "Are you sure?",
                    text: "Your transaction is still pending!",
                    icon: "warning",
                    buttons: ["Cancel", "Yes"],
                  }).then((willNavigate) => {
                    if (willNavigate) {
                      navigate("/orders");
                    }
                  });
                } else {
                  navigate("/orders");
                }
              }}
              src={orders}
              className="orders"
            />
            <p
              style={
                OrderItems && OrderItems.length > 0
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
              className="order-count"
            >
              {totalLength}
            </p>
          </div>

          <img
            onClick={() => navigate("/account")}
            src={
              user && user.photoURL
                ? user.photoURL.replace(/^http:\/\//i, "https://") //replaces the http with https
                : Default
            }
            className="default"
          />
        </div>
      </div>
      {searchText !== "" && (
        <div
          ref={searchResultsRef}
          className={`search-results ${searchResults.length ? "show" : ""}`}
        >
          {searchResults.length > 0 &&
            searchResults.map((product) => (
              <div
                onClick={() => {
                  if (window.location.href.includes("/payment")) {
                    swal({
                      title: "Are you sure?",
                      text: "Your transaction is still pending!",
                      icon: "warning",
                      buttons: ["Cancel", "Yes"],
                    }).then((willNavigate) => {
                      if (willNavigate) {
                        navigate(`/product/${product.id}`);
                      }
                    });
                  } else {
                    navigate(`/product/${product.id}`);
                  }
                }}
                className="search-results2"
                key={product.id}
              >
                <div className="product-img">
                  <img src={product.image} className="product-image" />
                </div>
                <div className="product-data">
                  <p className="product-title">
                    {product.title.length > 50
                      ? product.title.slice(0, 50) + "..."
                      : product.title}
                  </p>
                  <p className="product-desc">
                    {product.description.length > 50
                      ? product.description.slice(0, 50) + "..."
                      : product.description}
                  </p>
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
}

export default LowerNav;
