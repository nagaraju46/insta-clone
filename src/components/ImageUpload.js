import React, { useState } from "react";
import "./ImageUpload.css";
import firebase from "firebase";
import { storage, db } from "../firebase";
export default function ImageUpload() {
  const [caption, setcaption] = useState("");
  const [image, setimage] = useState(null);
  const [progres, setprogres] = useState(0);
  const [username, setusername] = useState("");
  const [location, setlocation] = useState("");
  const handleupload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progres = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setprogres(progres);
      },
      (err) => {
        console.log(err);
        alert(err.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
            db.collection("posts").add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imgurl: url,
              username: username,
              location: location,
            });
            setprogres(0);
            setcaption("");
            setimage(null);
            setusername("");
            setlocation("");
          });
      }
    );
  };
  const handlechange = (e) => {
    if (e.target.files[0]) setimage(e.target.files[0]);
  };
  return (
    <div className="imageupload">
      <progress className="imageupload__progress" value={progres} max="100" />
      <input
        type="text"
        placeholder="enter the CAPTION"
        value={caption}
        onChange={(e) => {
          setcaption(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="enter the USERNAME"
        value={username}
        onChange={(e) => {
          setusername(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="enter the LOCATION"
        value={location}
        onChange={(e) => {
          setlocation(e.target.value);
        }}
      />
      <input type="file" onChange={handlechange} />
      <button onClick={handleupload}>Upload</button>
    </div>
  );
}
