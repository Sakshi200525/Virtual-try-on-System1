const API_BASE_URL =
  "http://localhost:8000/api";

async function handleResponse(response) {
  if (!response.ok) {
    const message =
      await response.text();

    throw new Error(
      message ||
        "Server request failed."
    );
  }

  return response.json();
}

export async function uploadImage(file) {
  const formData =
    new FormData();

  formData.append(
    "file",
    file
  );

  const response =
    await fetch(
      `${API_BASE_URL}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

  return handleResponse(response);
}

export async function analyzeBody(file) {
  const formData =
    new FormData();

  formData.append(
    "file",
    file
  );

  const response =
    await fetch(
      `${API_BASE_URL}/body/analyze`,
      {
        method: "POST",
        body: formData,
      }
    );

  return handleResponse(response);
}

export async function performTryOn(
  file,
  garment,
  color
) {
  const formData =
    new FormData();

  formData.append(
    "file",
    file
  );

  formData.append(
    "garment",
    garment
  );

  formData.append(
    "color",
    color
  );

  const response =
    await fetch(
      `${API_BASE_URL}/tryon`,
      {
        method: "POST",
        body: formData,
      }
    );

  return handleResponse(response);
}

export async function getRecommendations(
  bodyShape
) {
  const response =
    await fetch(
      `${API_BASE_URL}/recommendation`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          body_shape: bodyShape,
        }),
      }
    );

  return handleResponse(response);
}

export async function predictSize(
  measurements
) {
  const response =
    await fetch(
      `${API_BASE_URL}/size/predict`,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify(
          measurements
        ),
      }
    );

  return handleResponse(response);
}