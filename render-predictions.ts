import { throttle } from "lodash";

interface Prediction {
  bbox: [number, number, number, number];
  class: string;
}

export const renderPredictions = (predictions: Prediction[], ctx: CanvasRenderingContext2D) => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  const font = "18px sans-serif";
  ctx.font = font;
  ctx.textBaseline = "top";

  predictions.forEach((prediction) => {
    const [x, y, width, height] = prediction["bbox"];

    const isPerson = prediction.class === "person";

    ctx.strokeStyle = isPerson ? "#FF0000" : "#00FFFF";
    ctx.lineWidth = 4;
    ctx.strokeRect(x, y, width, height);

    ctx.fillStyle = `rgba(255, 0, 0, ${isPerson ? 0.2 : 0})`;
    ctx.fillRect(x, y, width, height);

    ctx.fillStyle = isPerson ? "#FF0000" : "#00FFFF";
    const textWidth = ctx.measureText(prediction.class).width;
    const textHeight = parseInt(font, 10);
    ctx.fillRect(x, y, textWidth + 4, textHeight + 4);

    ctx.fillStyle = "#000000";
    ctx.fillText(isPerson ? "Gay" : prediction.class, x, y);

    if (isPerson) {
      playAudio();
    }
  });
};

const playAudio = throttle(() => {
  try {
    const audio = new Audio("/30seconds.mp3");
    audio.play();
  } catch (error) {}
}, 30000);
