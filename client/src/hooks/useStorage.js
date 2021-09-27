/* eslint-disable max-len */
import {useState, useEffect} from 'react';
import {imageStorage} from '../firebase/fireBaseConfig';
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';

const useStorage = (files) => {
  const [progress, setProgress] = useState(0);
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [error, setError] = useState('');
  const [url, setUrl] = useState();

  useEffect(() => {
    const file = files;
    const storageRef = ref(imageStorage, `profile/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed', (snapshot) => {
      const percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, () => {
      getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadUrl) => {
            setUrl(downloadUrl);
            setTaskCompleted(true);
          });
    });
  }, []);

  return {
    error,
    url,
    progress,
    taskCompleted,
  };
};

export default useStorage;
