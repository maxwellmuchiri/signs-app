// import React from "react";

// const Navbar = ({ loggedIn, logOut, cartItems }) => {
//   return (
//   <nav>
//   <div>
//   <img src="https://scontent.fnbo1-1.fna.fbcdn.net/v/t39.30808-6/307318806_578942147355321_7352939837138745643_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFQPfQacuQ-J45j2jN80P5FCalHI3fXk50JqUcjd9eTnULD-JhofAg_cRwtQIYiHS5iY-DGzv5Itn_0UpQebICF&_nc_ohc=Z58acDrUBSkAX96iPMh&_nc_ht=scontent.fnbo1-1.fna&oh=00_AfAOooQlfvTBms_IsCh9judIP7YNNf384tWglIzqjOkqHQ&oe=6465DCD9" alt="Seedling Logo" />
//   <a href="/">Sagana Seedlings</a>
//   </div>
//     <div>
//       <select>
//         <option>Fruit seedlings</option>
//         <option>Flower seedlings</option>
//         <option>Exotic tree seedlings </option>
//         <option>Indegenous </option>
//         <option>Seedling Type 5</option>
//       </select>
  
//       <div className="search">
//         <input type="text" placeholder="Search" />
//         <i className="fas fa-search"></i>
//       </div>
  
//       {loggedIn ? (
//         <>
//           <a href="/my-account">My Account</a>
//           <button onClick={logOut}>Log Out</button>
  
//           <div className="cart">
//             <img src="cart-logo.png" alt="Cart Logo" />
//             <span>{cartItems.length}</span>
//           </div>
//         </>
//       ) : (
//         <>
//           <a href="/sign-up">Sign Up</a>
//           <a href="/log-in">Log In</a>
//         </>
//       )}
//     </div>
//   </nav>
//   );
//   };
  
//   export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ loggedIn, logOut, cartItems }) => {
  return (
    <nav>
      <div>
        <img
          src="https://scontent.febb3-1.fna.fbcdn.net/v/t39.30808-6/368009851_613450754242703_2035892794540794207_n.jpg?stp=dst-jpg_s168x128&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=lFavFjW_WFIAX87lDZg&_nc_ht=scontent.febb3-1.fna&oh=00_AfDqi-sgrCmsLD8SFsqLvuMG2L9ISKkLUw2f_o_MmNN3mQ&oe=64E32EC9"
          alt="Seedling Logo"
        />
        <Link to="/">ELIM SIGNS</Link>
      </div>
      <div>
        <select>
          <option>2D & 3D signs</option>
          <option>Road Signs</option>
          <option>Laser cuts</option>
          <option>CNC cuts</option>
          <option>Paylons</option>''
        </select>

        {loggedIn ? (
          <>
            <Link to="/my-account">My Account</Link>
            <button onClick={logOut}>Log Out</button>

            <div className="cart">
              <Link to="/cart">
                <FaShoppingCart />
                <span>{cartItems.length}</span>
              </Link>
            </div>
          </>
        ) : (
          <>
            <Link to="/sign-up">Sign Up</Link>
            <Link to="/log-in">Log In</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

