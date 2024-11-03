import React, { useState } from 'react';

function Profile(props) {
    const [img, setImg] = useState(null);
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const handleFile = async (e) => {
        let file = e.target.files[0];
        const imageString = await convertBase64(file);
        setImg(imageString);
    }

    return (
        <div>
            <input type='file' onChange={handleFile} />
            <img src={img} alt='img' />
        </div>
    );
}

export default Profile;