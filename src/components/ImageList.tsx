const ImageList = ({ images }: { images: string[] }) => {
  const imageList = images.map((image, index) => (
    <div key={index} className="aspect-w-3 aspect-h-4 w-full overflow-hidden">
      <img className="object-cover w-full h-full cursor-pointer" src={image}></img>
    </div>
  ));

  return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">{imageList}</div>;
};

export default ImageList;
