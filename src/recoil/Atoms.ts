import { atom } from "recoil";

export const randomFace = atom<number>({
  key: "andomFace",
  default: 5,
});
export const randomColor = atom<number>({
  key: "randomColor",
  default: 2,
});
export const randomEyes = atom<number>({
  key: "randomEyes",
  default: 3,
});
export const randomMouth = atom<number>({
  key: "randomMouth",
  default: 10,
});
export const randomAcc = atom<number>({
  key: "randomAcc",
  default: 19,
});
export const randomPattern = atom<number>({
  key: "randomPattern",
  default: 6,
});
export const randomBackground = atom<number>({
  key: "randomBackground",
  default: 11,
});
export const sectionFlash = atom<boolean>({
  key: "sectionFlash",
  default: false,
});
export const facelock = atom<boolean>({
  key: "facelock",
  default: true,
});
export const colorlock = atom<boolean>({
  key: "colorlock",
  default: true,
});
export const eyeslock = atom<boolean>({
  key: "eyeslock",
  default: true,
});
export const mouthlock = atom<boolean>({
  key: "mouthlock",
  default: true,
});
export const acclock = atom<boolean>({
  key: "acclock",
  default: true,
});
export const patternlock = atom<boolean>({
  key: "patternlock",
  default: true,
});
export const backgroundlock = atom<boolean>({
  key: "backgroundlock",
  default: true,
});
