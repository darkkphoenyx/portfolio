// import { Link } from "react-router-dom";

// export default function Logo() {
//   return (
//     <div className=" w-14 my-4 text-2xl font-semibold">
//         <li className="list-none">
//           <Link className="cursor-pointer" to="/">
//             {/* <img
//           className=" object-fill mt-3.5"
//           src="./assets/logo1.png"
//           alt="Logo"
//           /> */}
//             darkkphoenyx
//           </Link>
//         </li>
//     </div>
//   );
// }


import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <div className='my-4'>
      <li className="list-none">
        <Link className=" w-14  my-4 text-2xl font-semibold" to={"/"}>
          Darkkphoenyx
        </Link>
      </li>
    </div>
  );
}
