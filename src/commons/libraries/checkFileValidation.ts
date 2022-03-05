export const checkFileValidation = (images: (string | File)[], file: File) => {
  if (images.includes(file)) {
    alert("중복된 파일입니다.");
    return false;
  }
  if (!file?.size) {
    alert("파일이 존재하지 않습니다.");
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다.(제한: 5MB)");
    return false;
  }

  if (
    !file.type.includes("jpeg") &&
    !file.type.includes("png") &&
    !file.type.includes("gif")
  ) {
    alert("등록 불가능한 파일 형식입니다.");
    return false;
  }

  return true;
};
