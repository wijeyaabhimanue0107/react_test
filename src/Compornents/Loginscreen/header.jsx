// import React from 'react';

// const SimpleComponent = () => {
//   const greeting = 'Hello, JSX!';

//   return (
//     <div>
//       <h1>{greeting}</h1>
//       <p>This is a simple JSX example.</p>
//     </div>
//   );
// };

// export default SimpleComponent;










// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const handleLogout = () => {
//     // Handle logout logic here
//     console.log('Logout clicked!');
//   };

//   return (
//     <header>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/todos">ToDo</Link>
//           </li>
//           <li>
//             <button onClick={handleLogout}>Logout</button>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;







import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const listHeader = ["Home", "About", "Contact"];

    return (
    <div className="bg-yellow-600 py-4">
        <div className="container mx-auto">
            <div className="flex flex-row">
              {listHeader.map((item) => {
                return (
                  <Link to={`/${item}`} key={item}>
                    <div className="px-4">
                      <p className="text-white capitalize">{item}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
        </div>
    </div>
  );
};

export default Header;