import { fetchImages } from '../api/shibe';
import { useQuery } from '@tanstack/react-query';
import ImageGrid from './ImageGrid';

const Content = () => {
  const { data: images, isLoading } = useQuery({ queryFn: fetchImages, queryKey: ['images'] });
  const imageGrid = images ? <ImageGrid images={images} /> : null;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
          <h2 className="text-xl font-semibold text-blue-600 mt-4">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-grow overflow-auto">
      <div className="container mx-auto px-4 py-8">{imageGrid}</div>
    </div>
  );
};

export default Content;
