import React from "react";

const Header = () => {
  return (
    <div className="w-full h-24 flex flex-row bg-slate-200 px-2 border-b[1px] border-b-red">
      <ul className="flex flex-row basis-1/3 justify-between list-none  hover:bg-sky-200 ...	">
        <li className="">HOME</li>
        <li className="">MEN</li>
        <li className=""> WOMEN</li>
        <li className="">ABOUT US</li>
        <li className="">CONTACT</li>
      </ul>
      <div className=" flex flex-col basis-1/3 justify-between	">
        <div> Store</div>
        <div>Eyewear</div>
      </div>
      <div className=" flex flex-row basis-1/3 justify-between	">
        <div>search</div>
        <div>
          <div>cart</div>
          <div> $117.00</div>
        </div>
        <div> LOG IN</div>
      </div>
    </div>
  );
};

export default Header;
