import { createContext, useContext, useState } from "react";

type ImageSizeType = "contain" | "cover" | "none";

type ContextType = {
  imageSize: ImageSizeType;
  setImageSize: React.Dispatch<React.SetStateAction<ImageSizeType>>;
};

const ImageSizeContext = createContext({} as ContextType);

const ImageSizeProvider = ({ children }: { children: React.ReactNode[] }) => {
  const [imageSize, setImageSize] = useState<ImageSizeType>("contain");

  return (
    <ImageSizeContext.Provider value={{ imageSize, setImageSize }}>
      {children}
    </ImageSizeContext.Provider>
  );
};

const useImageSize = () => {
  return useContext(ImageSizeContext);
};

export { ImageSizeProvider, useImageSize };
