import React, {useState, useEffect} from 'react';
import useStorage from '../../../hooks/useStorage.js';

const ImageUploader = ({ files, extract, imageUrlData }) => {
  if (files !== undefined) {
    const {
      url,
      error,
      progress,
      taskCompleted,
    } = useStorage(files[0]);

    const [isUploading, setIsUploading] = useState(true);

    useEffect(() => {
      if (taskCompleted) {
        setIsUploading(false);
        console.log(url, 'url from storage');
        console.log(taskCompleted, 'taskcompleted');
        extract(error, url);
      }
    }, [taskCompleted, url]);


    return (
      <div>
        <div className="thumbnails">
          {isUploading && <div className="progress-bar">Uploading...</div>}
        </div>
        <div>
          {/* <img src={url} key={url} width="75" height="100" /> */}
        </div>
      </div>
    );
  }
  return (<></>);
};

export default ImageUploader;
