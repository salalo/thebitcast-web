import imageType from "image-type";

const acceptableFormats = [
  { ext: "png", mime: "image/png" },
  { ext: "jpg", mime: "image/jpg" },
  { ext: "jpeg", mime: "image/jpeg" }
];

export default {
  checkThumbnail(thumbnail) {
    let type = imageType(thumbnail);

    for (let i = 0; i < acceptableFormats.length; i++) {
      if (type.ext == acceptableFormats[i].ext && type.mime == acceptableFormats[i].mime) return true;
    }
    return false;
  }
};
