import { useEffect, useState } from 'react';
import { api } from '../../services/api';

const ImageResidence = ({ idHouse }) => {
  const [image, setImage] = useState<string>('');

  const getImage = async () => {
    const { data, headers } = await api.get(`/properties/image1/${idHouse}`, {
      responseType: 'arraybuffer',
    });
    if (data.byteLength > 0) {
      let image = btoa(
        new Uint8Array(data).reduce(
          (data, byte) => data + String.fromCharCode(byte),
          ''
        )
      );
      setImage(`data:${headers['content-type'].toLowerCase()};base64,${image}`);
    }
  };

  useEffect(() => {
    getImage();
  }, []);

  return <img src={image} width="100%" height="100%" />;
};

export default ImageResidence;
