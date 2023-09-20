import ImageGallery from "react-image-gallery";

const images = [
  { original: "/images/learn/front.jpeg",},
  { original: "/images/learn/front-quarter.jpeg",},
  { original: "/images/learn/rear.jpeg",},
  { original: "/images/learn/rear-quarter.jpeg",},
  { original: "/images/learn/passangers-side.jpeg",},
];


export const CarGallery = () => {
    return <div className="three-column-slider"><ImageGallery items={images} showThumbnails={false} /></div>
}