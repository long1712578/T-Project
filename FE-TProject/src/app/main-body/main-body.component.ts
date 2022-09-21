import { Component, OnInit } from '@angular/core';
import html2canvas from "html2canvas";
import * as THREE from "three";

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit {
  name = "Angular " ;
  ctx: any;
  scene: any;
  camera: any;
  renderer: any;
  cube: any;
  canvas: any;
  texture: any;
  htmlcube: any;

  constructor() {
    this.drawRandomDot = this.drawRandomDot.bind(this);
    this.animate = this.animate.bind(this);
  }

  ngOnInit() {
    const htmlTextureCanvasElement = document.getElementById("htmlTexture");
    // html -> canvas
    const htmlContent = document.getElementById("testdiv");
    const obj = {
      onrendered: function (canvas: { toDataURL: (arg0: string) => any; }) {
        var imgData = canvas.toDataURL("image/png");
        console.log(imgData);
      },
      logging: true,
      taint: true,
      useCORS: true,
      foreignObjectRendering: true
    };

    console.warn("html2canvas");
    console.log(html2canvas);


    var myCanvas = document.getElementById("htmlTexture") as HTMLCanvasElement;
    var ctx = myCanvas.getContext("2d");

    setInterval(() => {
      console.log('update');
      const testdiv = document.querySelector("#testdiv") as HTMLCanvasElement;
      html2canvas(testdiv).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        // console.log(imgData);

        var img = new Image();

        img.onload = function () {
          ctx?.drawImage(img, 0, 0); // Or at whatever offset you like
        };
        img.src = imgData;
      });
    }, 3000)


    this.init(myCanvas);
  }

  init(canvas: HTMLCanvasElement | HTMLImageElement | HTMLVideoElement | ImageBitmap) {
    console.warn("init");
    console.log(THREE);

    // Dynamic canvas
    this.canvas = document.getElementById("dynamicTexture");
    this.ctx = this.canvas.getContext("2d");
    // document.body.appendChild(this.ctx.canvas);
    this.ctx.canvas.width = 256;
    this.ctx.canvas.height = 256;
    this.ctx.fillStyle = "#FFF";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    this.texture = new THREE.CanvasTexture(canvas);

    // THREE js scene
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({
      map: this.texture
    });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    this.htmlcube = new THREE.Mesh(geometry, material);
    this.htmlcube.position.set(0, 2, 0);
    this.scene.add(this.htmlcube);

    this.camera.position.z = 10;
    this.animate();
  }

  animate() {
    this.drawRandomDot();
    this.texture.needsUpdate = true;

    requestAnimationFrame(this.animate);

    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;

    this.renderer.render(this.scene, this.camera);
  }

  randInt(min: number, max: number | undefined) {
    if (max === undefined) {
      max = min;
      min = 0;
    }
    return (Math.random() * (max - min) + min) | 0;
  }

  drawRandomDot() {
    this.ctx.fillStyle = `#${this.randInt(0x1000000, undefined)
      .toString(16)
      .padStart(6, "0")}`;
    this.ctx.beginPath();

    const x = this.randInt(256, undefined);
    const y = this.randInt(256, undefined);
    const radius = this.randInt(10, 64);
    this.ctx.arc(x, y, radius, 0, Math.PI * 2);
    this.ctx.fill();
  }
}
