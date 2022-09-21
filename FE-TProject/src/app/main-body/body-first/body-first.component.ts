import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-body-first',
  templateUrl: './body-first.component.html',
  styleUrls: ['./body-first.component.scss']
})
export class BodyFirstComponent implements OnInit {

  @ViewChild('bodyFirst', { static: true }) bodyFirst!: ElementRef;
  constructor(private renderer2: Renderer2) { }

  ngOnInit(): void {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(200, 200);
    this.renderer2.appendChild(this.bodyFirst.nativeElement, renderer.domElement);
    //document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: "red" });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate();
  }

}
