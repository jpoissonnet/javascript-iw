"use client";
import React, {useEffect} from "react";
import "./css/style.css";

function getRadius() {
  return Math.floor(10 + Math.random() * 50);
}

function getRandomHexColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class Disk {
  constructor(
    public x = 0,
    public y = 0,
    public radius = 20,
    public color = "#000000"
  ) {}

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.fillStyle = getRandomHexColor();
    ctx.arc(this.x, this.y, getRadius(), 0, 2 * Math.PI);
    ctx.fill("evenodd");
    ctx.closePath();
  }
}

function onClickCanvas(
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D
) {
  return (e) => {
    const x = e.clientX - canvas.offsetLeft - 20;
    const y = e.clientY - canvas.offsetTop - 20;
    const disk = new Disk(x, y, getRadius(), getRandomHexColor());
    disk.draw(ctx);
  };
}

const Page = () => {
  const [name, setName] = React.useState("pouet");
  const canvasRef = React.useRef(null);
  React.useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    canvas.addEventListener("click", onClickCanvas(canvas, ctx));
  }, []);

  return (
    <>
      <canvas
        id="masterpiece"
        ref={canvasRef}
        width="800"
        height="600"
      ></canvas>
    </>
  );
};

export default Page;
