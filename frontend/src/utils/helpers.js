export function formatName(name) {
  if (!name) return "";

  return name
    .trim()
    .replace(/\b\w/g, (letter) =>
      letter.toUpperCase()
    );
}

export function getMatchText(score) {
  if (score >= 90) {
    return "Excellent Match";
  }

  if (score >= 75) {
    return "Great Match";
  }

  if (score >= 60) {
    return "Good Match";
  }

  return "Possible Match";
}

export function validateImage(file) {
  if (!file) {
    return false;
  }

  return file.type.startsWith("image/");
}

export function createPreview(file) {
  if (!file) return null;

  return URL.createObjectURL(file);
}