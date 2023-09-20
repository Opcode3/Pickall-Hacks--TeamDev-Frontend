import ImageGallery from "react-image-gallery";

const images = [
  { original: "/images/learn/front.jpeg",},
  { original: "/images/learn/front-quarter.jpeg",},
  { original: "/images/learn/front.jpeg",},
  { original: "/images/learn/front.jpeg",},
  { original: "/images/learn/front.jpeg",}
];


export const CarGallery = () => {
    return <ImageGallery items={images} showThumbnails={false} />;
}