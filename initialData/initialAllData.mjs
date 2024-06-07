import { initialData } from "./funcs/initialData.mjs";

// cg-imageフォルダをイニシャル
await initialData("cg-image", "CGDataObj");

// effect-imageフォルダをイニシャル
await initialData("effect-image", "EffectDataObj");

// stand-imageフォルダをイニシャル
await initialData("stand-image", "StandImgDataObj");

// videoフォルダをイニシャル
await initialData("video", "VideoDataObj");

// voiceフォルダをイニシャル
await initialData("voice", "VoiceDataObj");
