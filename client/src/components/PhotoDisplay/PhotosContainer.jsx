import React from "react";
import {Photo, SERVER } from "../Import/componentsImport.js"
import axios from "axios";
import { Masonry } from '@mui/lab';

export default function PhotosContainer(props) {

  const [searchedPhotos, setSearchedPhotos] = React.useState([]);
  const [photos, setPhotos] = React.useState([]);

  React.useEffect(() => {
    try {
      axios.get(SERVER + "/photos")
        .then((res) => {
          setPhotos(res.data);
        }).catch((err) => {
          alert("Error: " + err.message);
        });
    } catch (error) {
      alert("Error: " + error.message);
    }
  }, []);

  

  React.useEffect(() => {
    if (props.searched === "") {
      setSearchedPhotos(photos);
    } else {
      const searchedPhotos = photos.filter((photo) => {
        return photo.description
          .toLowerCase()
          .includes(props.searched.toLowerCase());
      });
      setSearchedPhotos(searchedPhotos);
    }
  }, [props.searched ,photos]);

  return (
    <div className="grid">
      {/* <div className="grid-sizer"></div> */}
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={1}>
        {searchedPhotos.length === 0 ?
          photos.map((photo, index) => {
          return (
            <Photo
              key={photo.id}
              id={photo.id}
              url={photo.image_url}
              description={photo.description}
            />
          );
          }) 
        : searchedPhotos.map((photo, index) => {
          return (
            <Photo
              key={photo.id}
              id={photo.id}
              url={photo.image_url}
              description={photo.description}
            />
          );
        })}
      </Masonry>
    </div>
  );
}
