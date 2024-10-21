interface ImageWithReflectionProps {
  src: string; // Prop for the image source
}

const ImageWithReflection: React.FC<ImageWithReflectionProps> = ({ src }) => {
  return (
    <div className="flex flex-col items-center relative w-full h-auto">
      {/* Original Image */}
      <div className="relative w-full h-auto">
        <img
          src={src}
          className="object-cover w-full h-auto"
          style={{ display: "block" }} // Optional: Ensures no extra space is added below the image
        />
      </div>

      {/* Reflection */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full transform scale-y-[-1]">
          <img
            src={src} // Same image for reflection
            className="object-cover w-full h-auto opacity-30" // Adjust opacity for the reflection effect
            style={{ display: "block" }} // Optional: Ensures no extra space is added below the image
          />
        </div>
      </div>
    </div>
  );
};

export default ImageWithReflection;
