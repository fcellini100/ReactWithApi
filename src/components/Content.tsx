import { fetchImages } from '../api/shibe';
import { useQuery } from '@tanstack/react-query';
import ImageGrid from './ImageGrid';

const Content = () => {
  const { data: images, isLoading } = useQuery({ queryFn: fetchImages, queryKey: ['images'] });
  const imageSection = images ? <ImageGrid images={images} /> : null;

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="flex-grow overflow-auto">
      <div className="container mx-auto px-4 py-8">{imageSection}</div>
    </div>
  );
};

export default Content;
