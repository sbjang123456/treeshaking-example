import { plusOne, plusTwo } from "@sbjang123456/my-utils";

export const getTest = () => {
  console.log("fucking");
  console.log(plusOne(1));
};

export const getTest1_1 = () => {
  console.log("sibal");
  console.log(plusOne(5));
};

export const getTest2 = () => {
  console.log("asshole");
  return plusTwo(10);
};

export const getTest3 = () => {
  console.log("hihihihi version test");
  return plusTwo(30);
};

export const checkNoVarInitForLoop = () => {
  let str = "";
  for (i = 0; i < 10; i++) {
    console.log(i);
    str += `${i}`;
  }
  return str;
};
export const checkYesVarInitForLoop = () => {
  let str = "";
  for (let i = 0; i < 10; i + 2) {
    console.log(i);
    str += `${i}`;
  }
  return str;
};
