import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { EffectPass, VignetteEffect } from 'postprocessing'
import WebGLApp from '../utils/WebGLApp'
import assets from '../utils/AssetManager.js'
import Suzanne from './scene/Suzanne'
import { addNaturalLight } from './scene/lights'
import { addScreenshotButton, addRecordButton } from './scene/screenshot-record-buttons'


@Component({
  selector: 'app-body-first',
  templateUrl: './body-first.component.html',
  styleUrls: ['./body-first.component.scss']
})
export class BodyFirstComponent implements OnInit {

  @ViewChild('bodyFirst', { static: true }) bodyFirst!: ElementRef;
  constructor(private renderer2: Renderer2) { }

  ngOnInit(): void {
    // const scene = new THREE.Scene();
    // const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    // const renderer = new THREE.WebGLRenderer();
    // renderer.setSize(window.innerWidth-100, window.innerHeight-100);
    // renderer.setClearColor( 0xffffff, 0 );
    // this.renderer2.appendChild(this.bodyFirst.nativeElement, renderer.domElement);
    // //document.body.appendChild(renderer.domElement);
    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);
    // const animate = function () {
    //   requestAnimationFrame(animate);

    //   cube.rotation.x += 0.01;
    //   cube.rotation.y += 0.01;

    //   renderer.render(scene, camera);
    // };
    // camera.position.z = 5;
    // renderer.render(scene, camera);
    // animate();
    // true if the url has the `?debug` parameter, otherwise false
windo?.DEBUG = window.location.search.includes('debug')

// grab our canvas
const canvas = document.querySelector('#app')

// setup the WebGLRenderer
const webgl = new WebGLApp({
  canvas,
  // set the scene background color
  background: '#111',
  backgroundAlpha: 1,
  // enable postprocessing
  postprocessing: true,
  // show the fps counter from stats.js
  showFps: window.DEBUG,
  // enable OrbitControls
  orbitControls: window.DEBUG,
  // Add the controls pane inputs
  controls: {
    roughness: 0.5,
    movement: {
      speed: {
        value: 1.5,
        max: 100,
        scale: 'exp',
      },
      frequency: { value: 0.5, max: 5 },
      amplitude: { value: 0.7, max: 2 },
    },
  },
  hideControls: !window.DEBUG,
  // enable cannon-es
  // world: new CANNON.World(),
})

// attach it to the window to inspect in the console
if (window.DEBUG) {
  window.webgl = webgl
}

// hide canvas
webgl.canvas.style.visibility = 'hidden'

// load any queued assets
assets.load({ renderer: webgl.renderer }).then(() => {
  // add any "WebGL components" here...
  // append them to the scene so you can
  // use them from other components easily
  webgl.scene.suzanne = new Suzanne(webgl)
  webgl.scene.add(webgl.scene.suzanne)

  // lights and other scene related stuff
  addNaturalLight(webgl)

  // postprocessing
  // add an existing effect from the postprocessing library
  webgl.composer.addPass(new EffectPass(webgl.camera, new VignetteEffect()))

  // add the save screenshot and save gif buttons
  if (window.DEBUG) {
    addScreenshotButton(webgl)
    addRecordButton(webgl)
  }

  // show canvas
  webgl.canvas.style.visibility = ''

  // start animation loop
  webgl.start()
    })
  }

}
