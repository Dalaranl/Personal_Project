export const checkFileValidation = (images: string[], file?: File) => {
  if (!file?.size) {
    alert("파일이 존재하지 않습니다.");
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("파일 용량이 너무 큽니다.(제한: 5MB)");
    return false;
  }

  if (!file.type.includes("jpeg") && !file.type.includes("png")) {
    alert("jpeg, png 파일만 업로드 가능합니다.");
    return false;
  }

  if (images.length === 6) {
    alert("사진은 최대 6장까지 등록 가능합니다.");
    return false;
  }

  return true;
};
