// import React from 'react';

// const Header = () => {
//   return (
//     <header>
//       <h1>My React App</h1>
//       <nav>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;










// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <Link to="/todos">ToDo</Link>
      <Link to="/logout">Logout</Link>
    </nav>
  </header>
);

export default Header;