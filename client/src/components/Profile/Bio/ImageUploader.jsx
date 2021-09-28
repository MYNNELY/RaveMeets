import React, {useState, useEffect} from 'react';
import useStorage from '../../../hooks/useStorage.js';

const ImageUploader = ({ files, extract, imageUrlData }) => {
  const {
    url,
    error,
    taskCompleted,
  } = useStorage(files[0]);

  const [isUploading, setIsUploading] = useState(true);

  useEffect(() => {
    if (taskCompleted) {
      setIsUploading(false);
      extract(error, url);
    }
  }, [taskCompleted, url]);


  return (
    <div>
      <div className="thumbnails">
        <div className="progress-bar">Uploading...</div>
      </div>
    </div>
  );
};

export default ImageUploader;
