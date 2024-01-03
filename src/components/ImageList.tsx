const ImageList = ({ images }: { images: string[] }) => {
  const imageList = images.map((image, index) => (
    <div key={index}>
      <img className="object-cover w-full h-auto" src={image}></img>
    </div>
  ));

  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{imageList}</div>;
};

export default ImageList;
