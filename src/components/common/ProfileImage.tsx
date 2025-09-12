import { useState, useEffect } from 'react';
import { addGreenBackground } from '@/utils/backgroundRemoval';

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ProfileImage = ({ src, alt, className = "" }: ProfileImageProps) => {
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const processImage = async () => {
      try {
        setIsProcessing(true);
        setError(null);
        const processedSrc = await addGreenBackground(src);
        setProcessedImage(processedSrc);
      } catch (err) {
        console.error('Failed to process image:', err);
        setError('Failed to process image');
        // Fallback to original image
        setProcessedImage(src);
      } finally {
        setIsProcessing(false);
      }
    };

    processImage();
  }, [src]);

  if (isProcessing) {
    return (
      <div className={`${className} bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center`}>
        <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error && !processedImage) {
    return (
      <div className={`${className} bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center`}>
        <span className="text-white text-xs">Error</span>
      </div>
    );
  }

  return (
    <img 
      src={processedImage || src} 
      alt={alt} 
      className={className}
    />
  );
};

export default ProfileImage;